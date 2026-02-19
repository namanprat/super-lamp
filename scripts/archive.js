import * as THREE from 'three';
import { RGBELoader } from 'three-stdlib';
import gsap from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { VignetteShader, GrainShader, EdgeDistortionShader } from './shaders/post-fx.js';
import { archiveItems } from '../data/archive-items.js';

const CONFIG = Object.freeze({
  cardWidth: 2.25,
  cardHeight: 2.8,
  cardSpacing: 1.85,
  visibleRange: 12,
  dragSensitivityDesktop: 0.0035, // Slower, weightier drag
  dragSensitivityMobile: 0.006,
  wheelSensitivity: 0.0012,
  velocityDamping: 0.95, // More inertia
  velocityEpsilon: 0.00001,
  boundSlack: 1.1,
  clickThreshold: 12,
  clickTimeout: 260,
  dragExitThreshold: 48,
  focusLift: 1.35,
  focusScale: 1.22,
  focusTrackLerp: 0.12,
  focusTransition: 0.42,
  cameraFollowLerp: 0.085,
  cameraBaseY: 0.25,
  cameraBaseZ: 8.6,
  dockMargin: 20,
  dockTopSafe: 90,
  atlasTileSize: 1024,
  mobileBreakpoint: 900,
  hdriUrl: '/env.hdr',
  postFX: Object.freeze({
    grain: 0.015,
    vignette: 0.15,
    bloomStrength: 0.12,
    bloomRadius: 0.4,
    bloomThreshold: 0.85,
  }),
});



const state = {
  running: false,
  initToken: 0,
  rafId: null,

  container: null,
  backgroundEl: null,
  renderHost: null,
  eventTarget: null,

  renderer: null,
  composer: null,
  grainPass: null,

  pmremGenerator: null,
  envRenderTarget: null,

  scene: null,
  camera: null,
  clock: null,

  root: null,
  cards: [],
  cardByIndex: new Map(),

  atlasTexture: null,
  sourceTextures: [],

  ambientLight: null,
  keyLight: null,
  fillLight: null,
  rimLight: null,

  raycaster: new THREE.Raycaster(),
  pointerNdc: new THREE.Vector2(),

  trackOffset: 0,
  trackVelocity: 0,

  isDragging: false,
  activePointerId: null,
  pointerStart: { x: 0, y: 0 },
  pointerLast: { x: 0, y: 0 },
  clickStartTime: 0,
  dragDistance: 0,

  focusedIndex: -1,
  focusLerp: { value: 0 },

  mouseParallaxTarget: new THREE.Vector2(0, 0),
  mouseParallaxCurrent: new THREE.Vector2(0, 0),

  dockPosCurrent: new THREE.Vector2(-9999, -9999),
  dockPosTarget: new THREE.Vector2(-9999, -9999),

  handlers: {},
  dom: {
    overlay: null,
    panel: null,
    title: null,
    year: null,
    description: null,
    category: null,
    prev: null,
    next: null,
    close: null,
  },

  tmp: {
    p0: new THREE.Vector3(),
    p1: new THREE.Vector3(),
    toCam: new THREE.Vector3(),
    projected: new THREE.Vector3(),
  },
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isMobile() {
  return window.innerWidth <= CONFIG.mobileBreakpoint;
}

function getDragSensitivity() {
  return isMobile() ? CONFIG.dragSensitivityMobile : CONFIG.dragSensitivityDesktop;
}

function getRibbonPoint(t, out) {
  out.x = t * CONFIG.cardSpacing;
  out.y = Math.sin(t * 0.42) * 0.52 + Math.sin(t * 0.11) * 0.25;
  out.z = Math.sin(t * 0.78) * 2.15 + Math.sin(t * 0.2) * 1.1;
  return out;
}

function getRibbonTwist(t) {
  return Math.sin(t * 0.55) * 0.24 + Math.sin(t * 0.17) * 0.1;
}

function clearDomDockPosition() {
  if (state.dom.panel) {
    state.dom.panel.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  state.dockPosCurrent.set(-9999, -9999);
  state.dockPosTarget.set(-9999, -9999);
}

function cacheDom() {
  state.dom.overlay = document.getElementById('archive-overlay');
  state.dom.panel = document.querySelector('.archive-focus-panel');
  state.dom.title = document.querySelector('.archive-focus-title');
  state.dom.year = document.querySelector('.archive-focus-year');
  state.dom.description = document.querySelector('.archive-focus-description');
  state.dom.category = document.querySelector('.archive-focus-category');
  state.dom.prev = document.getElementById('archive-prev');
  state.dom.next = document.getElementById('archive-next');
  state.dom.close = document.querySelector('.archive-close-btn');
}

function showOverlay() {
  if (state.dom.overlay) state.dom.overlay.classList.add('active');
  document.body.classList.add('archive-focus-open');
}

function hideOverlay() {
  if (state.dom.overlay) state.dom.overlay.classList.remove('active');
  document.body.classList.remove('archive-focus-open');
  clearDomDockPosition();
}

function updateFocusContent(index) {
  const item = archiveItems[index];
  if (!item) return;
  if (state.dom.title) state.dom.title.textContent = item.title || '';
  if (state.dom.year) state.dom.year.textContent = item.year || '';
  if (state.dom.description) state.dom.description.textContent = item.description || '';
  if (state.dom.category) state.dom.category.textContent = item.category || '';
}

async function loadTextures(items) {
  const loader = new THREE.TextureLoader();
  const textures = new Array(items.length).fill(null);

  await Promise.all(items.map((item, index) => (
    new Promise((resolve) => {
      loader.load(
        item.image,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = true;
          textures[index] = texture;
          resolve();
        },
        undefined,
        () => {
          textures[index] = null;
          resolve();
        }
      );
    })
  )));

  return textures;
}

function createAtlasTexture(textures) {
  const atlasSize = Math.ceil(Math.sqrt(textures.length));
  const tile = CONFIG.atlasTileSize;

  const canvas = document.createElement('canvas');
  canvas.width = atlasSize * tile;
  canvas.height = atlasSize * tile;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  textures.forEach((texture, index) => {
    if (!texture?.image) return;

    const img = texture.image;
    const cellX = (index % atlasSize) * tile;
    const cellY = Math.floor(index / atlasSize) * tile;

    const aspect = (img.width || 1) / (img.height || 1);
    let drawW = tile;
    let drawH = tile;
    let drawX = cellX;
    let drawY = cellY;

    if (aspect > 1) {
      drawW = tile * aspect;
      drawX = cellX - (drawW - tile) * 0.5;
    } else {
      drawH = tile / aspect;
      drawY = cellY - (drawH - tile) * 0.5;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  });

  const atlasTexture = new THREE.CanvasTexture(canvas);
  atlasTexture.colorSpace = THREE.SRGBColorSpace;
  atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
  atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
  atlasTexture.minFilter = THREE.LinearMipmapLinearFilter;
  atlasTexture.magFilter = THREE.LinearFilter;
  atlasTexture.generateMipmaps = true;
  atlasTexture.flipY = false;
  return atlasTexture;
}

function buildTileGeometry(index, total) {
  const atlasSize = Math.ceil(Math.sqrt(total));
  const tileX = index % atlasSize;
  const tileY = Math.floor(index / atlasSize);

  const geometry = new THREE.PlaneGeometry(CONFIG.cardWidth, CONFIG.cardHeight, 1, 1);
  const uv = geometry.attributes.uv;

  for (let i = 0; i < uv.count; i += 1) {
    const u = uv.getX(i);
    const v = uv.getY(i);

    const mappedU = (u + tileX) / atlasSize;
    const mappedV = (v + (atlasSize - 1 - tileY)) / atlasSize;

    uv.setXY(i, mappedU, mappedV);
  }

  uv.needsUpdate = true;
  return geometry;
}

function createCardMesh(index, atlasTexture) {
  const geometry = buildTileGeometry(index, archiveItems.length);
  // Use MeshPhysicalMaterial for a premium, glass-like photo look
  const material = new THREE.MeshPhysicalMaterial({
    map: atlasTexture,
    color: 0xffffff,
    roughness: 0.25,
    metalness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    iridescence: 0.15,
    iridescenceIOR: 1.3,
    envMapIntensity: 1.2,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.userData.archiveIndex = index;
  return mesh;
}

function setupPostFX() {
  state.composer = new EffectComposer(state.renderer);
  const renderPass = new RenderPass(state.scene, state.camera);
  state.composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    CONFIG.postFX.bloomStrength,
    CONFIG.postFX.bloomRadius,
    CONFIG.postFX.bloomThreshold
  );
  state.composer.addPass(bloomPass);

  const vignettePass = new ShaderPass(VignetteShader({ darkness: CONFIG.postFX.vignette }));
  state.composer.addPass(vignettePass);

  state.grainPass = new ShaderPass(GrainShader({ grain: CONFIG.postFX.grain }));
  state.composer.addPass(state.grainPass);

  const edgeDistortionPass = new ShaderPass(EdgeDistortionShader({ shift: 0.004 }));
  state.composer.addPass(edgeDistortionPass);

  state.composer.addPass(new OutputPass());
}

function setupEnvironment() {
  state.pmremGenerator = new THREE.PMREMGenerator(state.renderer);
  state.pmremGenerator.compileEquirectangularShader();

  new RGBELoader().load(CONFIG.hdriUrl, (texture) => {
    state.envRenderTarget = state.pmremGenerator.fromEquirectangular(texture);
    state.scene.environment = state.envRenderTarget.texture;
    // state.scene.background = state.envRenderTarget.texture; // Optional: show HDRI background
    texture.dispose();
  });
}

function createSceneGraph() {
  state.scene = new THREE.Scene();
  state.scene.background = new THREE.Color(0xf2f2f2);
  // Add some fog for depth
  state.scene.fog = new THREE.FogExp2(0xf2f2f2, 0.035);

  state.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 120);
  state.camera.position.set(0, CONFIG.cameraBaseY, CONFIG.cameraBaseZ);

  state.root = new THREE.Group();
  state.scene.add(state.root);

  state.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);

  state.keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
  state.keyLight.position.set(5, 5, 8);
  state.keyLight.castShadow = true;
  state.keyLight.shadow.mapSize.width = 1024;
  state.keyLight.shadow.mapSize.height = 1024;

  state.fillLight = new THREE.PointLight(0xb9cbff, 0.8, 20);
  state.fillLight.position.set(-5, 0, 5);

  state.rimLight = new THREE.DirectionalLight(0xffd9ae, 1.5);
  state.rimLight.position.set(0, 5, -5);

  state.scene.add(state.ambientLight, state.keyLight, state.fillLight, state.rimLight);

  setupEnvironment();
}

function updateCardVisuals(card, rel) {
  const mesh = card.mesh;
  const mat = mesh.material;

  const isFocused = state.focusedIndex === card.index;
  const focusAmt = state.focusLerp.value;

  let dim = 0;
  if (focusAmt > 0 && state.focusedIndex !== -1 && !isFocused) {
    dim = focusAmt;
  }

  const lum = 1 - dim * 0.55;
  mat.color.setRGB(lum, lum, lum);
  mat.emissiveIntensity = isFocused ? 0.08 + focusAmt * 0.22 : 0.05;
  mat.opacity = 1 - dim * 0.2;

  mesh.visible = Math.abs(rel) <= CONFIG.visibleRange;
}

function updateRibbonLayout() {
  const p0 = state.tmp.p0;
  const p1 = state.tmp.p1;

  for (const card of state.cards) {
    const rel = card.index - state.trackOffset;

    getRibbonPoint(rel, p0);
    getRibbonPoint(rel + 0.04, p1);

    const mesh = card.mesh;
    mesh.position.copy(p0);
    mesh.lookAt(p1);
    mesh.rotateZ(getRibbonTwist(rel));

    mesh.scale.set(1, 1, 1);

    if (state.focusedIndex === card.index && state.focusLerp.value > 0.001) {
      state.tmp.toCam.copy(state.camera.position).sub(mesh.position).normalize();
      mesh.position.addScaledVector(state.tmp.toCam, CONFIG.focusLift * state.focusLerp.value);
      mesh.scale.setScalar(1 + CONFIG.focusScale * state.focusLerp.value);
    }

    updateCardVisuals(card, rel);
  }
}

function updateTrackMotion() {
  if (state.focusedIndex !== -1) {
    const target = state.focusedIndex;
    state.trackOffset += (target - state.trackOffset) * CONFIG.focusTrackLerp;
    state.trackVelocity *= 0.84;
  } else {
    state.trackOffset += state.trackVelocity;
    state.trackVelocity *= CONFIG.velocityDamping;

    if (Math.abs(state.trackVelocity) < CONFIG.velocityEpsilon) {
      state.trackVelocity = 0;
    }
  }

  const minOffset = -CONFIG.boundSlack;
  const maxOffset = (archiveItems.length - 1) + CONFIG.boundSlack;

  if (state.trackOffset < minOffset) {
    state.trackOffset = minOffset;
    if (state.trackVelocity < 0) state.trackVelocity *= 0.35;
  }

  if (state.trackOffset > maxOffset) {
    state.trackOffset = maxOffset;
    if (state.trackVelocity > 0) state.trackVelocity *= 0.35;
  }
}

function updateCamera() {
  const targetX = Math.sin(state.trackOffset * 0.24) * 0.65 + (state.trackOffset - (archiveItems.length - 1) * 0.5) * 0.08;
  state.camera.position.x += (targetX - state.camera.position.x) * CONFIG.cameraFollowLerp;
  state.camera.position.y = CONFIG.cameraBaseY;
  state.camera.position.z = CONFIG.cameraBaseZ;
  state.camera.lookAt(state.camera.position.x * 0.2, 0.0, -0.45);

  state.mouseParallaxCurrent.x += (state.mouseParallaxTarget.x - state.mouseParallaxCurrent.x) * 0.1;
  state.mouseParallaxCurrent.y += (state.mouseParallaxTarget.y - state.mouseParallaxCurrent.y) * 0.1;

  state.camera.position.x += state.mouseParallaxCurrent.x * 0.7;
  state.camera.position.y += state.mouseParallaxCurrent.y * 0.28;
}

function updateDockAnchor() {
  if (state.focusedIndex === -1 || !state.dom.panel) {
    clearDomDockPosition();
    return;
  }

  const focused = state.cardByIndex.get(state.focusedIndex);
  if (!focused?.mesh?.visible) {
    clearDomDockPosition();
    return;
  }

  const mesh = focused.mesh;
  state.tmp.projected.copy(mesh.position);
  state.tmp.projected.y += CONFIG.cardHeight * 0.22;
  state.tmp.projected.project(state.camera);

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const rawX = (state.tmp.projected.x * 0.5 + 0.5) * vw;
  const rawY = (-state.tmp.projected.y * 0.5 + 0.5) * vh;

  const panelRect = state.dom.panel.getBoundingClientRect();
  const x = clamp(rawX + 28, CONFIG.dockMargin, vw - panelRect.width - CONFIG.dockMargin);
  const y = clamp(rawY - panelRect.height * 0.5, CONFIG.dockTopSafe, vh - panelRect.height - CONFIG.dockMargin);

  state.dockPosTarget.set(x, y);
  state.dockPosCurrent.x += (state.dockPosTarget.x - state.dockPosCurrent.x) * 0.2;
  state.dockPosCurrent.y += (state.dockPosTarget.y - state.dockPosCurrent.y) * 0.2;

  state.dom.panel.style.transform = `translate3d(${state.dockPosCurrent.x.toFixed(2)}px, ${state.dockPosCurrent.y.toFixed(2)}px, 0)`;
}

function setPointerFromClient(clientX, clientY) {
  const rect = state.renderer.domElement.getBoundingClientRect();
  state.pointerNdc.set(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -(((clientY - rect.top) / rect.height) * 2 - 1)
  );
}

function pickCard(clientX, clientY) {
  if (!state.renderer || !state.camera || state.cards.length === 0) return null;

  setPointerFromClient(clientX, clientY);
  state.raycaster.setFromCamera(state.pointerNdc, state.camera);

  const intersects = state.raycaster.intersectObjects(state.cards.map((card) => card.mesh), false);
  if (!intersects.length) return null;

  const mesh = intersects[0].object;
  const index = mesh.userData?.archiveIndex;
  if (typeof index !== 'number') return null;
  return index;
}

function enterFocus(index) {
  if (index < 0 || index >= archiveItems.length) return;
  state.focusedIndex = index;
  updateFocusContent(index);
  showOverlay();

  gsap.to(state.focusLerp, {
    value: 1,
    duration: CONFIG.focusTransition,
    ease: 'power2.out',
    overwrite: true,
  });
}

function exitFocus() {
  if (state.focusedIndex === -1) return;
  state.focusedIndex = -1;

  gsap.to(state.focusLerp, {
    value: 0,
    duration: CONFIG.focusTransition * 0.92,
    ease: 'power2.out',
    overwrite: true,
    onComplete: () => {
      if (state.focusedIndex === -1) hideOverlay();
    },
  });
}

function navigateFocus(direction) {
  if (archiveItems.length === 0) return;
  if (state.focusedIndex === -1) {
    enterFocus(0);
    return;
  }

  let next = state.focusedIndex + direction;
  if (next < 0) next = archiveItems.length - 1;
  if (next >= archiveItems.length) next = 0;
  enterFocus(next);
}

function isUIElement(target) {
  return Boolean(
    target?.closest('.nav-wrap') ||
    target?.closest('.bottom-nav-wrap') ||
    target?.closest('.menu-wrap') ||
    target?.closest('.menu-box') ||
    target?.closest('.archive-nav-btn') ||
    target?.closest('.archive-close-btn') ||
    target?.closest('.archive-focus-panel')
  );
}

function bindEvents() {
  const target = state.eventTarget;
  if (!target) return;

  state.handlers.pointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (isUIElement(event.target)) return;

    state.isDragging = true;
    state.activePointerId = event.pointerId ?? null;
    state.pointerStart.x = event.clientX;
    state.pointerStart.y = event.clientY;
    state.pointerLast.x = event.clientX;
    state.pointerLast.y = event.clientY;
    state.clickStartTime = performance.now();
    state.dragDistance = 0;

    if (target.setPointerCapture && event.pointerId !== undefined) {
      try {
        target.setPointerCapture(event.pointerId);
      } catch {
        // no-op
      }
    }

    if (state.eventTarget?.style) {
      state.eventTarget.style.cursor = 'grabbing';
    }
  };

  state.handlers.pointerMove = (event) => {
    const rect = state.renderer?.domElement?.getBoundingClientRect();
    if (rect && rect.width && rect.height) {
      const mx = (event.clientX - rect.left) / rect.width - 0.5;
      const my = (event.clientY - rect.top) / rect.height - 0.5;
      state.mouseParallaxTarget.set(-mx * 0.05, my * 0.05);
    }

    if (!state.isDragging) return;
    if (state.activePointerId !== null && event.pointerId !== undefined && state.activePointerId !== event.pointerId) return;

    const dx = event.clientX - state.pointerLast.x;
    const dy = event.clientY - state.pointerLast.y;

    state.dragDistance += Math.sqrt(dx * dx + dy * dy);

    const deltaOffset = -dx * getDragSensitivity();
    state.trackOffset += deltaOffset;
    state.trackVelocity = deltaOffset;

    if (state.focusedIndex !== -1 && state.dragDistance > CONFIG.dragExitThreshold) {
      exitFocus();
    }

    state.pointerLast.x = event.clientX;
    state.pointerLast.y = event.clientY;
  };

  state.handlers.pointerUp = (event) => {
    if (!state.isDragging) return;
    if (state.activePointerId !== null && event.pointerId !== undefined && state.activePointerId !== event.pointerId) return;

    state.isDragging = false;

    if (target.releasePointerCapture && event.pointerId !== undefined) {
      try {
        target.releasePointerCapture(event.pointerId);
      } catch {
        // no-op
      }
    }

    state.activePointerId = null;

    if (state.eventTarget?.style) {
      state.eventTarget.style.cursor = 'grab';
    }

    const elapsed = performance.now() - state.clickStartTime;
    const isClick = elapsed <= CONFIG.clickTimeout && state.dragDistance <= CONFIG.clickThreshold;

    if (isClick) {
      const hitIndex = pickCard(event.clientX, event.clientY);
      if (hitIndex === null) {
        if (state.focusedIndex !== -1) exitFocus();
      } else if (state.focusedIndex === hitIndex) {
        exitFocus();
      } else {
        enterFocus(hitIndex);
      }
      state.trackVelocity = 0;
    }
  };

  state.handlers.wheel = (event) => {
    if (!target.contains(event.target)) return;
    event.preventDefault();

    const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const deltaOffset = dominantDelta * CONFIG.wheelSensitivity;
    state.trackOffset += deltaOffset;
    state.trackVelocity += deltaOffset * 0.35;

    if (state.focusedIndex !== -1 && Math.abs(dominantDelta) > 8) {
      exitFocus();
    }
  };

  state.handlers.keyDown = (event) => {
    if (event.key === 'Escape') {
      if (state.focusedIndex !== -1) {
        event.preventDefault();
        exitFocus();
      }
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigateFocus(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigateFocus(-1);
    }
  };

  state.handlers.overlayClick = (event) => {
    if (!event.target.closest('.archive-focus-panel') && !event.target.closest('.archive-nav-btn')) {
      exitFocus();
    }
  };

  state.handlers.prevClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigateFocus(-1);
  };

  state.handlers.nextClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigateFocus(1);
  };

  state.handlers.closeClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    exitFocus();
  };

  state.handlers.resize = () => {
    if (!state.renderer || !state.camera || !state.composer) return;
    const host = state.renderHost || state.backgroundEl || state.container;
    const width = host?.clientWidth || window.innerWidth;
    const height = host?.clientHeight || window.innerHeight;

    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();

    state.renderer.setSize(width, height);
    state.composer.setSize(width, height);
  };

  target.addEventListener('pointerdown', state.handlers.pointerDown);
  window.addEventListener('pointermove', state.handlers.pointerMove);
  window.addEventListener('pointerup', state.handlers.pointerUp);
  target.addEventListener('wheel', state.handlers.wheel, { passive: false });
  window.addEventListener('keydown', state.handlers.keyDown);
  window.addEventListener('resize', state.handlers.resize);

  state.dom.overlay?.addEventListener('click', state.handlers.overlayClick);
  state.dom.prev?.addEventListener('click', state.handlers.prevClick);
  state.dom.next?.addEventListener('click', state.handlers.nextClick);
  state.dom.close?.addEventListener('click', state.handlers.closeClick);
}

function unbindEvents() {
  const target = state.eventTarget;
  if (target) {
    if (state.handlers.pointerDown) target.removeEventListener('pointerdown', state.handlers.pointerDown);
    if (state.handlers.wheel) target.removeEventListener('wheel', state.handlers.wheel);
  }

  window.removeEventListener('pointermove', state.handlers.pointerMove);
  window.removeEventListener('pointerup', state.handlers.pointerUp);
  window.removeEventListener('keydown', state.handlers.keyDown);
  window.removeEventListener('resize', state.handlers.resize);

  state.dom.overlay?.removeEventListener('click', state.handlers.overlayClick);
  state.dom.prev?.removeEventListener('click', state.handlers.prevClick);
  state.dom.next?.removeEventListener('click', state.handlers.nextClick);
  state.dom.close?.removeEventListener('click', state.handlers.closeClick);

  state.handlers = {};
}

function animate() {
  if (!state.running) return;

  updateTrackMotion();
  updateCamera();
  updateRibbonLayout();
  updateDockAnchor();

  if (state.grainPass?.uniforms?.uTime) {
    state.clock.update();
    state.grainPass.uniforms.uTime.value = state.clock.getElapsed();
  }

  state.composer.render();
  state.rafId = requestAnimationFrame(animate);
}

async function setupArchiveScene(token) {
  state.backgroundEl = document.getElementById('background');
  // Use background as container if gallery missing (which user removed)
  state.container = document.getElementById('gallery') || state.backgroundEl || document.body;

  if (!state.container) return false;
  if (!archiveItems.length) return false;

  state.renderHost = state.backgroundEl || state.container;

  const existingCanvas = state.renderHost.querySelector('canvas[data-archive-canvas="true"]');
  if (existingCanvas) existingCanvas.remove();

  const width = window.innerWidth;
  const height = window.innerHeight;

  state.renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  state.renderer.outputColorSpace = THREE.SRGBColorSpace;
  state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  state.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  state.renderer.toneMappingExposure = 1.2;
  state.renderer.shadowMap.enabled = true;
  state.renderer.shadowMap.type = THREE.PCFShadowMap;
  state.renderer.setSize(width, height);
  state.renderer.setClearColor(0x000000, 0);
  state.renderer.domElement.dataset.archiveCanvas = 'true';

  // Append to renderHost (likely #background)
  state.renderHost.appendChild(state.renderer.domElement);

  // Ensure interactions work on the container
  state.eventTarget = document.body; // Capture events on body to avoid z-index blocking
  state.container.style.pointerEvents = 'auto';
  state.container.style.touchAction = 'none';
  state.container.style.cursor = 'grab';

  // Canvas itself passes events through
  state.renderer.domElement.style.pointerEvents = 'none';
  state.renderer.domElement.style.touchAction = 'none';
  state.renderer.domElement.style.position = 'absolute';
  state.renderer.domElement.style.top = '0';
  state.renderer.domElement.style.left = '0';

  // Force dark text for white background and clear body background so canvas is visible
  document.body.style.color = '#111111';
  document.body.style.backgroundColor = 'transparent';
  document.querySelectorAll('.nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn').forEach(el => {
    el.style.color = '#111111';
  });

  createSceneGraph();

  const textures = await loadTextures(archiveItems);
  if (token !== state.initToken) {
    textures.forEach((texture) => texture?.dispose?.());
    return false;
  }

  state.sourceTextures = textures.filter(Boolean);
  state.atlasTexture = createAtlasTexture(textures);

  state.cards = [];
  state.cardByIndex.clear();

  for (let i = 0; i < archiveItems.length; i += 1) {
    const mesh = createCardMesh(i, state.atlasTexture);
    const card = {
      index: i,
      item: archiveItems[i],
      mesh,
    };

    state.cards.push(card);
    state.cardByIndex.set(i, card);
    state.root.add(mesh);
  }

  setupPostFX();

  state.camera.aspect = width / height;
  state.camera.updateProjectionMatrix();
  state.composer.setSize(width, height);

  state.clock = new THREE.Timer();
  return true;
}

function resetRuntimeState() {
  state.trackOffset = 0;
  state.trackVelocity = 0;
  state.isDragging = false;
  state.activePointerId = null;
  state.dragDistance = 0;
  state.focusedIndex = -1;
  state.focusLerp.value = 0;
  state.mouseParallaxTarget.set(0, 0);
  state.mouseParallaxCurrent.set(0, 0);
  state.pointerStart.x = 0;
  state.pointerStart.y = 0;
  state.pointerLast.x = 0;
  state.pointerLast.y = 0;
  clearDomDockPosition();
}

export async function initArchive() {
  if (state.running) return;

  cacheDom();
  resetRuntimeState();
  hideOverlay();

  const token = state.initToken + 1;
  state.initToken = token;

  console.log('[archive] initArchive started');
  try {
    const ok = await setupArchiveScene(token);
    console.log('[archive] setupArchiveScene completed. result:', ok, 'token match:', token === state.initToken);

    if (!ok || token !== state.initToken) {
      console.warn('[archive] Setup failed or token mismatch');
      destroyArchive();
      return;
    }

    state.running = true;
    requestAnimationFrame(() => {
      console.log('[archive] binding events and starting animation loop');
      bindEvents();
      animate();
    });
  } catch (err) {
    console.error('[archive] FATAL ERROR in initArchive:', err);
  }
}

export function destroyArchive() {
  state.initToken += 1;
  state.running = false;

  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
    state.rafId = null;
  }

  unbindEvents();
  hideOverlay();

  gsap.killTweensOf(state.focusLerp);

  for (const card of state.cards) {
    if (card.mesh?.parent) card.mesh.parent.remove(card.mesh);
    card.mesh?.geometry?.dispose?.();
    card.mesh?.material?.dispose?.();
  }

  state.cards = [];
  state.cardByIndex.clear();

  state.atlasTexture?.dispose?.();
  state.atlasTexture = null;

  for (const texture of state.sourceTextures) {
    texture?.dispose?.();
  }
  state.sourceTextures = [];

  if (state.composer) {
    state.composer.dispose?.();
    state.composer = null;
  }
  state.grainPass = null;

  state.pmremGenerator?.dispose?.();
  state.pmremGenerator = null;

  state.envRenderTarget?.dispose?.();
  state.envRenderTarget = null;

  if (state.renderer) {
    state.renderer.dispose();
    if (state.renderer.domElement?.parentNode) {
      state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
    }
  }

  if (state.container) {
    state.container.style.pointerEvents = '';
    state.container.style.touchAction = '';
    state.container.style.cursor = '';
  }

  // Reset UI colors
  document.body.style.color = '';
  document.body.style.backgroundColor = '';
  document.querySelectorAll('.nav-wrap a, .bottom-nav-wrap a, .menu-toggle-btn').forEach(el => {
    el.style.color = '';
  });

  state.renderer = null;
  state.scene = null;
  state.camera = null;
  state.clock = null;
  state.root = null;

  state.ambientLight = null;
  state.keyLight = null;
  state.fillLight = null;
  state.rimLight = null;

  state.container = null;
  state.backgroundEl = null;
  state.renderHost = null;
  state.eventTarget = null;

  state.dom = {
    overlay: null,
    panel: null,
    title: null,
    year: null,
    description: null,
    category: null,
    prev: null,
    next: null,
    close: null,
  };

  resetRuntimeState();
}
