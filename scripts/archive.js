import * as THREE from 'three';
import gsap from 'gsap';
import { CRTShader } from './CRTShader.js';
import { archiveItems } from '../data/archive-items.js';

const CONFIG = Object.freeze({
  cellSize: 0.85,
  cellSpacing: 1.2,
  gridSize: 0.15,
  lineThickness: 0.01,
  distortion: 0.08,
  depthMin: 0.6,
  depthMax: 1.4,
  imageSizeMin: 0.62,
  imageSizeMax: 0.74,
  imageSizeFocused: 0.9,
  depthScaleMin: 0.92,
  depthScaleMax: 1.08,
  offsetLerp: 0.08,
  parallaxLerp: 0.1,
  pointerPanScale: 0.002,
  wheelPanScale: 0.001,
  clickThreshold: 15,
  clickTimeout: 250,
  dragExitThreshold: 50,
  dragZoomMax: 0.2,
  dragZoomDistance: 200,
  focusEnterDuration: 0.5,
  focusExitDuration: 0.4,
  mousePressedDuration: 0.3,
  dragZoomDuration: 0.3,
  navSearchRadius: 24,
  crt: Object.freeze({
    scanlineIntensity: 0.46,
    scanlineCount: 663.0,
    brightness: 1.32,
    contrast: 1.06,
    saturation: 1.2,
    bloomIntensity: 0.23,
    bloomThreshold: 0.35,
    rgbShift: 0.0,
    adaptiveIntensity: 1.0,
    vignetteStrength: 0.0,
    curvature: 0.65,
    flickerStrength: 0.0,
  }),
});

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const GRID_FRAGMENT_SHADER = /* glsl */ `
  uniform vec2 uResolution;
  uniform float uGridSize;
  uniform float uMousePressed;
  uniform float uZoom;
  uniform float uDistortion;
  uniform vec2 uOffset;
  uniform float uLineThickness;
  uniform float uFocusState;
  uniform vec2 uMouseParallax;
  varying vec2 vUv;

  void main() {
    vec2 screenUV = (vUv - 0.5) * 2.0;
    screenUV /= uZoom;

    float radius = length(screenUV);
    float effectiveDistortion = mix(uDistortion, 0.0, uMousePressed);
    float distortion = 1.0 - effectiveDistortion * radius * radius;
    vec2 distortedUV = screenUV * distortion;

    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 parallaxOffset = uMouseParallax * 0.5 * (1.0 - uFocusState);
    vec2 gridCoord = (distortedUV * aspectRatio + uOffset + parallaxOffset) / uGridSize;
    vec2 gridCell = fract(gridCoord);

    float lineWidth = uLineThickness;
    float distX = min(gridCell.x, 1.0 - gridCell.x);
    float distY = min(gridCell.y, 1.0 - gridCell.y);
    float lines = step(lineWidth, distX) * step(lineWidth, distY);
    float gridLine = 1.0 - lines;

    vec3 gridColor = vec3(0.5);
    float opacity = gridLine * 0.5 * mix(1.0, 0.15, uFocusState);
    gl_FragColor = vec4(gridColor, opacity);
  }
`;

function createImageFragmentShader(textureCount) {
  return /* glsl */ `
    uniform vec2 uResolution;
    uniform float uDistortion;
    uniform sampler2D uImageAtlas;
    uniform float uTextureCount;
    uniform vec2 uOffset;
    uniform float uCellSize;
    uniform float uCellSpacing;
    uniform vec2 uFocusCell;
    uniform float uFocusState;
    uniform float uMousePressed;
    uniform float uZoom;
    uniform vec2 uMouseParallax;
    uniform float uAspectRatios[${textureCount}];
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 screenUV = (vUv - 0.5) * 2.0;
      screenUV /= uZoom;

      float radius = length(screenUV);
      float effectiveDistortion = mix(uDistortion, 0.0, uMousePressed);
      float distortion = 1.0 - effectiveDistortion * radius * radius;
      vec2 distortedUV = screenUV * distortion;

      vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
      float gridCellSize = uCellSize * uCellSpacing;

      vec2 preCellPos = (distortedUV * aspectRatio + uOffset) / gridCellSize;
      vec2 cellId = floor(preCellPos);
      float depth = mix(${CONFIG.depthMin.toFixed(1)}, ${CONFIG.depthMax.toFixed(1)}, random(cellId + vec2(500.0, 0.0)));

      vec2 parallaxOffset = uMouseParallax * depth * (1.0 - uFocusState);
      vec2 worldCoord = (distortedUV * aspectRatio) + uOffset + parallaxOffset;

      vec2 cellPos = worldCoord / gridCellSize;
      cellId = floor(cellPos);
      vec2 cellUV = fract(cellPos);

      float texIndex = mod(cellId.x + cellId.y * 3.0, uTextureCount);
      if (texIndex < 0.0) texIndex += uTextureCount;

      bool isFocused = (abs(cellId.x - uFocusCell.x) < 0.1) && (abs(cellId.y - uFocusCell.y) < 0.1);

      vec3 color = vec3(0.0);
      float outAlpha = 0.0;

      float sizeRand = random(cellId + vec2(200.0, 0.0));
      float baseImageSize = ${CONFIG.imageSizeMin.toFixed(2)} + sizeRand * ${(CONFIG.imageSizeMax - CONFIG.imageSizeMin).toFixed(2)};
      float depthScale = mix(${CONFIG.depthScaleMin.toFixed(2)}, ${CONFIG.depthScaleMax.toFixed(2)}, clamp((depth - ${CONFIG.depthMin.toFixed(1)}) / ${(CONFIG.depthMax - CONFIG.depthMin).toFixed(1)}, 0.0, 1.0));
      baseImageSize *= depthScale;
      float targetImageSize = isFocused ? ${CONFIG.imageSizeFocused.toFixed(2)} : baseImageSize;
      float imageSize = mix(baseImageSize, targetImageSize, uFocusState);

      float imageBorder = (1.0 - imageSize) * 0.5;
      vec2 imageUV = (cellUV - imageBorder) / imageSize;

      float naturalAspect = uAspectRatios[int(texIndex)];
      if (naturalAspect > 1.0) {
        imageUV.x = (imageUV.x - 0.5) * naturalAspect + 0.5;
      } else {
        imageUV.y = (imageUV.y - 0.5) / naturalAspect + 0.5;
      }

      float edgeSmooth = 0.02;
      vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) *
                      smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
      float imageAlpha = imageMask.x * imageMask.y;

      bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0;
      if (inImageArea && imageAlpha > 0.0) {
        float atlasSize = ceil(sqrt(uTextureCount));
        vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));

        float caStrength = 0.012 * pow(radius, 2.0);
        vec2 caOffset = screenUV * caStrength;

        vec2 imageUVR = imageUV - caOffset;
        vec2 imageUVG = imageUV;
        vec2 imageUVB = imageUV + caOffset;

        vec2 atlasUVR = (atlasPos + clamp(imageUVR, 0.0, 1.0)) / atlasSize;
        vec2 atlasUVG = (atlasPos + imageUVG) / atlasSize;
        vec2 atlasUVB = (atlasPos + clamp(imageUVB, 0.0, 1.0)) / atlasSize;

        atlasUVR.y = 1.0 - atlasUVR.y;
        atlasUVG.y = 1.0 - atlasUVG.y;
        atlasUVB.y = 1.0 - atlasUVB.y;

        float r = texture2D(uImageAtlas, atlasUVR).r;
        float g = texture2D(uImageAtlas, atlasUVG).g;
        float b = texture2D(uImageAtlas, atlasUVB).b;
        float a = texture2D(uImageAtlas, atlasUVG).a;

        vec3 finalImageColor = vec3(r, g, b);
        if (!isFocused) {
          finalImageColor *= mix(1.0, 0.15, uFocusState);
        }

        color = finalImageColor;
        outAlpha = imageAlpha * a;
      }

      float fade = 1.0 - smoothstep(1.0, 1.6, radius);
      outAlpha *= fade;
      gl_FragColor = vec4(color * fade, outAlpha);
    }
  `;
}

const state = {
  running: false,
  initToken: 0,
  rafId: null,
  container: null,
  renderer: null,
  camera: null,
  scene: null,
  postScene: null,
  gridMesh: null,
  imageMesh: null,
  postMesh: null,
  renderTarget: null,
  eventTarget: null,
  sourceTextures: [],
  atlasTexture: null,
  aspectRatios: [],
  offset: { x: 0, y: 0 },
  targetOffset: { x: 0, y: 0 },
  isDragging: false,
  clickStartTime: 0,
  dragDistance: 0,
  previousPointer: { x: 0, y: 0 },
  dragStart: { x: 0, y: 0 },
  focusedIndex: -1,
  focusCell: { x: -9999, y: -9999 },
  focusState: { value: 0 },
  dragZoom: { value: 1 },
  mousePressed: { value: 0 },
  mouseTarget: { x: 0, y: 0 },
  mouseParallax: { x: 0, y: 0 },
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
};

function fract(x) {
  return x - Math.floor(x);
}

function random2(x, y) {
  return fract(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123);
}

function textureIndexForCell(cellX, cellY) {
  const count = archiveItems.length;
  return ((cellX + cellY * 3) % count + count) % count;
}

function getRendererSize() {
  const width = state.container?.clientWidth || window.innerWidth;
  const height = state.container?.clientHeight || window.innerHeight;
  return { width, height };
}

function disposeMaterial(mat) {
  if (!mat) return;
  for (const key of Object.keys(mat)) {
    const value = mat[key];
    if (value && typeof value.dispose === 'function') {
      value.dispose();
    }
  }
  mat.dispose?.();
}

async function loadTextures(items) {
  const loader = new THREE.TextureLoader();
  const textures = [];
  const ratios = new Array(items.length).fill(1);

  await Promise.all(items.map((item, index) => (
    new Promise((resolve) => {
      loader.load(
        item.image,
        (texture) => {
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.colorSpace = THREE.SRGBColorSpace;
          textures[index] = texture;
          const w = texture.image?.width || 1;
          const h = texture.image?.height || 1;
          ratios[index] = w / h;
          resolve();
        },
        undefined,
        () => {
          textures[index] = null;
          ratios[index] = 1;
          resolve();
        }
      );
    })
  )));

  return { textures, ratios };
}

function createTextureAtlas(textures) {
  const count = textures.length;
  const atlasSize = Math.ceil(Math.sqrt(count));
  const tileSize = 512;
  const canvas = document.createElement('canvas');
  canvas.width = atlasSize * tileSize;
  canvas.height = atlasSize * tileSize;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  textures.forEach((texture, index) => {
    if (!texture?.image) return;
    const x = (index % atlasSize) * tileSize;
    const y = Math.floor(index / atlasSize) * tileSize;
    const img = texture.image;
    const aspect = (img.width || 1) / (img.height || 1);

    let drawW = tileSize;
    let drawH = tileSize;
    let drawX = x;
    let drawY = y;

    if (aspect > 1) {
      drawW = tileSize * aspect;
      drawX = x - (drawW - tileSize) * 0.5;
    } else {
      drawH = tileSize / aspect;
      drawY = y - (drawH - tileSize) * 0.5;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  });

  const atlas = new THREE.CanvasTexture(canvas);
  atlas.wrapS = THREE.ClampToEdgeWrapping;
  atlas.wrapT = THREE.ClampToEdgeWrapping;
  atlas.minFilter = THREE.LinearFilter;
  atlas.magFilter = THREE.LinearFilter;
  atlas.colorSpace = THREE.SRGBColorSpace;
  atlas.flipY = false;
  return atlas;
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
}

function updateFocusPanel(index) {
  const item = archiveItems[index];
  if (!item) return;

  if (state.dom.title) {
    if (state.dom.title.textContent !== item.title) {
      gsap.fromTo(
        state.dom.title,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out' }
      );
    }
    state.dom.title.textContent = item.title;
  }

  if (state.dom.year) state.dom.year.textContent = item.year || '';
  if (state.dom.description) state.dom.description.textContent = item.description || '';
  if (state.dom.category) state.dom.category.textContent = item.category || '';
  showOverlay();
}

function setFocusUniformCell(x, y) {
  const u = state.imageMesh?.material?.uniforms;
  if (u?.uFocusCell?.value) {
    u.uFocusCell.value.set(x, y);
  }
}

function findNearestCellForIndex(targetIndex, centerX, centerY) {
  const radius = CONFIG.navSearchRadius;
  const cx = Math.round(centerX);
  const cy = Math.round(centerY);
  let best = { x: cx, y: cy };
  let bestDist = Number.POSITIVE_INFINITY;

  for (let x = cx - radius; x <= cx + radius; x += 1) {
    for (let y = cy - radius; y <= cy + radius; y += 1) {
      if (textureIndexForCell(x, y) !== targetIndex) continue;
      const dist = (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY);
      if (dist < bestDist) {
        bestDist = dist;
        best = { x, y };
      }
    }
  }

  return best;
}

function enterFocus(index, cellX, cellY) {
  if (index < 0 || index >= archiveItems.length) return;
  if (state.focusedIndex === index && state.focusCell.x === cellX && state.focusCell.y === cellY) return;

  state.focusedIndex = index;
  state.focusCell.x = cellX;
  state.focusCell.y = cellY;

  const gridCellSize = CONFIG.cellSize * CONFIG.cellSpacing;
  state.targetOffset.x = (cellX + 0.5) * gridCellSize;
  state.targetOffset.y = (cellY + 0.5) * gridCellSize;

  setFocusUniformCell(cellX, cellY);
  updateFocusPanel(index);

  gsap.to(state.focusState, {
    value: 1,
    duration: CONFIG.focusEnterDuration,
    ease: 'power2.out',
    overwrite: true,
  });

  gsap.to(state.dragZoom, {
    value: 1.1,
    duration: CONFIG.focusEnterDuration,
    ease: 'power2.out',
    overwrite: true,
  });
}

function exitFocus() {
  if (state.focusedIndex === -1) return;

  state.focusedIndex = -1;
  state.focusCell.x = -9999;
  state.focusCell.y = -9999;
  setFocusUniformCell(-9999, -9999);
  hideOverlay();

  gsap.to(state.focusState, {
    value: 0,
    duration: CONFIG.focusExitDuration,
    ease: 'power2.out',
    overwrite: true,
  });

  gsap.to(state.dragZoom, {
    value: 1,
    duration: CONFIG.focusExitDuration,
    ease: 'power2.out',
    overwrite: true,
  });
}

function navigateFocus(direction) {
  if (state.focusedIndex === -1) return;
  let nextIndex = state.focusedIndex + direction;
  if (nextIndex >= archiveItems.length) nextIndex = 0;
  if (nextIndex < 0) nextIndex = archiveItems.length - 1;
  const nextCell = findNearestCellForIndex(nextIndex, state.focusCell.x, state.focusCell.y);
  enterFocus(nextIndex, nextCell.x, nextCell.y);
}

function getCellAtClientPosition(clientX, clientY) {
  const renderer = state.renderer;
  const imageUniforms = state.imageMesh?.material?.uniforms;
  if (!renderer || !imageUniforms || archiveItems.length === 0) return null;

  const rect = renderer.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;

  let screenX = ((clientX - rect.left) / rect.width) * 2 - 1;
  let screenY = -(((clientY - rect.top) / rect.height) * 2 - 1);

  screenX /= state.dragZoom.value;
  screenY /= state.dragZoom.value;

  const radius = Math.sqrt(screenX * screenX + screenY * screenY);
  const effectiveDistortion = CONFIG.distortion * (1 - state.mousePressed.value);
  const distortion = 1 - effectiveDistortion * radius * radius;
  const distortedX = screenX * distortion;
  const distortedY = screenY * distortion;

  const aspect = rect.width / rect.height;
  const gridCellSize = CONFIG.cellSize * CONFIG.cellSpacing;

  const preCellX = Math.floor((distortedX * aspect + state.offset.x) / gridCellSize);
  const preCellY = Math.floor((distortedY + state.offset.y) / gridCellSize);
  const depth = CONFIG.depthMin + random2(preCellX + 500.0, preCellY) * (CONFIG.depthMax - CONFIG.depthMin);
  const focusFade = 1 - state.focusState.value;

  const worldX = distortedX * aspect + state.offset.x + state.mouseParallax.x * depth * focusFade;
  const worldY = distortedY + state.offset.y + state.mouseParallax.y * depth * focusFade;

  const cellX = Math.floor(worldX / gridCellSize);
  const cellY = Math.floor(worldY / gridCellSize);

  const cellUVX = worldX / gridCellSize - cellX;
  const cellUVY = worldY / gridCellSize - cellY;

  const texIndex = textureIndexForCell(cellX, cellY);
  const aspectRatios = imageUniforms.uAspectRatios.value;
  const naturalAspect = aspectRatios[texIndex] || 1;

  const sizeRand = random2(cellX + 200.0, cellY);
  let baseImageSize = CONFIG.imageSizeMin + sizeRand * (CONFIG.imageSizeMax - CONFIG.imageSizeMin);
  const depthT = Math.min(Math.max((depth - CONFIG.depthMin) / (CONFIG.depthMax - CONFIG.depthMin), 0), 1);
  const depthScale = CONFIG.depthScaleMin + depthT * (CONFIG.depthScaleMax - CONFIG.depthScaleMin);
  baseImageSize *= depthScale;

  const isFocusedCell = cellX === state.focusCell.x && cellY === state.focusCell.y;
  const targetImageSize = isFocusedCell ? CONFIG.imageSizeFocused : baseImageSize;
  const imageSize = baseImageSize + (targetImageSize - baseImageSize) * state.focusState.value;
  const border = (1 - imageSize) * 0.5;

  let u = (cellUVX - border) / imageSize;
  let v = (cellUVY - border) / imageSize;

  if (naturalAspect > 1) {
    u = (u - 0.5) * naturalAspect + 0.5;
  } else {
    v = (v - 0.5) / naturalAspect + 0.5;
  }

  const isOnImage = u >= 0 && u <= 1 && v >= 0 && v <= 1;
  return { cellX, cellY, texIndex, isOnImage };
}

function shouldIgnorePointerTarget(target) {
  return Boolean(
    target?.closest('.nav-wrap') ||
    target?.closest('.archive-nav-btn') ||
    target?.closest('.archive-close-btn') ||
    target?.closest('.menu-wrap') ||
    target?.closest('.menu-box') ||
    target?.closest('.bottom-nav-wrap') ||
    target?.closest('.archive-focus-panel')
  );
}

function bindEvents() {
  const canvas = state.renderer?.domElement;
  const eventTarget = state.container || canvas;
  if (!canvas || !eventTarget) return;
  state.eventTarget = eventTarget;

  state.handlers.onPointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    if (shouldIgnorePointerTarget(event.target)) return;

    state.isDragging = true;
    state.clickStartTime = Date.now();
    state.dragDistance = 0;
    state.previousPointer.x = event.clientX;
    state.previousPointer.y = event.clientY;
    state.dragStart.x = event.clientX;
    state.dragStart.y = event.clientY;
    if (canvas.style) canvas.style.cursor = 'grabbing';

    gsap.to(state.mousePressed, {
      value: 1,
      duration: CONFIG.mousePressedDuration,
      ease: 'power2.out',
      overwrite: true,
    });
  };

  state.handlers.onPointerMove = (event) => {
    if (!state.isDragging) {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      state.mouseTarget.x = -x * 0.05;
      state.mouseTarget.y = y * 0.05;
      return;
    }

    const dx = event.clientX - state.previousPointer.x;
    const dy = event.clientY - state.previousPointer.y;
    state.dragDistance += Math.sqrt(dx * dx + dy * dy);

    if (state.dragDistance > CONFIG.clickThreshold) {
      const progress = Math.min(state.dragDistance / CONFIG.dragZoomDistance, 1);
      state.dragZoom.value = 1 - progress * CONFIG.dragZoomMax;
      if (state.focusedIndex !== -1 && state.dragDistance > CONFIG.dragExitThreshold) {
        exitFocus();
      }
    }

    state.targetOffset.x -= dx * CONFIG.pointerPanScale;
    state.targetOffset.y += dy * CONFIG.pointerPanScale;
    state.previousPointer.x = event.clientX;
    state.previousPointer.y = event.clientY;
  };

  state.handlers.onPointerUp = (event) => {
    if (!state.isDragging) return;
    state.isDragging = false;
    if (canvas.style) canvas.style.cursor = 'grab';

    gsap.to(state.mousePressed, {
      value: 0,
      duration: CONFIG.focusExitDuration,
      ease: 'power2.out',
      overwrite: true,
    });

    const elapsed = Date.now() - state.clickStartTime;
    const isClick = elapsed < CONFIG.clickTimeout && state.dragDistance < CONFIG.clickThreshold;

    if (isClick) {
      const hit = getCellAtClientPosition(event.clientX, event.clientY);
      if (!hit) {
        if (state.focusedIndex !== -1) exitFocus();
      } else if (state.focusedIndex === -1) {
        if (hit.isOnImage) enterFocus(hit.texIndex, hit.cellX, hit.cellY);
      } else if (!hit.isOnImage) {
        exitFocus();
      } else if (hit.texIndex === state.focusedIndex && hit.cellX === state.focusCell.x && hit.cellY === state.focusCell.y) {
        exitFocus();
      } else {
        enterFocus(hit.texIndex, hit.cellX, hit.cellY);
      }
    } else {
      gsap.to(state.dragZoom, {
        value: state.focusedIndex === -1 ? 1 : 1.1,
        duration: CONFIG.dragZoomDuration,
        ease: 'power2.out',
        overwrite: true,
      });
    }

    state.dragDistance = 0;
  };

  state.handlers.onWheel = (event) => {
    if (eventTarget !== canvas && !eventTarget.contains(event.target)) return;
    event.preventDefault();
    state.targetOffset.x += event.deltaX * CONFIG.wheelPanScale;
    state.targetOffset.y -= event.deltaY * CONFIG.wheelPanScale;
    if (state.focusedIndex !== -1 && (Math.abs(event.deltaX) > 10 || Math.abs(event.deltaY) > 10)) {
      exitFocus();
    }
  };

  state.handlers.onKeyDown = (event) => {
    if (state.focusedIndex === -1) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigateFocus(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigateFocus(-1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      exitFocus();
    }
  };

  state.handlers.onTouchStart = (event) => {
    if (event.touches.length !== 1) return;
    const t = event.touches[0];
    state.handlers.onPointerDown({
      clientX: t.clientX,
      clientY: t.clientY,
      target: event.target,
      button: 0,
    });
  };

  state.handlers.onTouchMove = (event) => {
    if (event.touches.length !== 1) return;
    const t = event.touches[0];
    state.handlers.onPointerMove({
      clientX: t.clientX,
      clientY: t.clientY,
    });
  };

  state.handlers.onTouchEnd = (event) => {
    if (event.changedTouches.length !== 1) return;
    const t = event.changedTouches[0];
    state.handlers.onPointerUp({
      clientX: t.clientX,
      clientY: t.clientY,
    });
  };

  state.handlers.onResize = () => {
    if (!state.renderer || !state.container) return;
    const { width, height } = getRendererSize();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    state.renderer.setSize(width, height);
    state.renderer.setPixelRatio(dpr);
    state.renderTarget?.setSize(width * dpr, height * dpr);

    const gridUniforms = state.gridMesh?.material?.uniforms;
    const imageUniforms = state.imageMesh?.material?.uniforms;
    if (gridUniforms?.uResolution?.value) gridUniforms.uResolution.value.set(width, height);
    if (imageUniforms?.uResolution?.value) imageUniforms.uResolution.value.set(width, height);
  };

  state.handlers.onPrevClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigateFocus(-1);
  };

  state.handlers.onNextClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigateFocus(1);
  };

  state.handlers.onCloseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    exitFocus();
  };

  state.handlers.onOverlayClick = (event) => {
    if (!event.target.closest('.archive-focus-panel') && !event.target.closest('.archive-nav-btn')) {
      exitFocus();
    }
  };

  eventTarget.addEventListener('pointerdown', state.handlers.onPointerDown);
  window.addEventListener('pointermove', state.handlers.onPointerMove);
  window.addEventListener('pointerup', state.handlers.onPointerUp);
  eventTarget.addEventListener('wheel', state.handlers.onWheel, { passive: false });
  window.addEventListener('keydown', state.handlers.onKeyDown);
  eventTarget.addEventListener('touchstart', state.handlers.onTouchStart, { passive: true });
  eventTarget.addEventListener('touchmove', state.handlers.onTouchMove, { passive: true });
  eventTarget.addEventListener('touchend', state.handlers.onTouchEnd, { passive: true });
  window.addEventListener('resize', state.handlers.onResize);

  state.dom.prev?.addEventListener('click', state.handlers.onPrevClick);
  state.dom.next?.addEventListener('click', state.handlers.onNextClick);
  state.dom.close?.addEventListener('click', state.handlers.onCloseClick);
  state.dom.overlay?.addEventListener('click', state.handlers.onOverlayClick);
}

function unbindEvents() {
  const target = state.eventTarget || state.renderer?.domElement;
  if (target && state.handlers.onPointerDown) {
    target.removeEventListener('pointerdown', state.handlers.onPointerDown);
    target.removeEventListener('wheel', state.handlers.onWheel);
    target.removeEventListener('touchstart', state.handlers.onTouchStart);
    target.removeEventListener('touchmove', state.handlers.onTouchMove);
    target.removeEventListener('touchend', state.handlers.onTouchEnd);
  }

  window.removeEventListener('pointermove', state.handlers.onPointerMove);
  window.removeEventListener('pointerup', state.handlers.onPointerUp);
  window.removeEventListener('keydown', state.handlers.onKeyDown);
  window.removeEventListener('resize', state.handlers.onResize);

  state.dom.prev?.removeEventListener('click', state.handlers.onPrevClick);
  state.dom.next?.removeEventListener('click', state.handlers.onNextClick);
  state.dom.close?.removeEventListener('click', state.handlers.onCloseClick);
  state.dom.overlay?.removeEventListener('click', state.handlers.onOverlayClick);
  state.eventTarget = null;
  state.handlers = {};
}

function animate() {
  if (!state.running || !state.renderer) return;

  state.offset.x += (state.targetOffset.x - state.offset.x) * CONFIG.offsetLerp;
  state.offset.y += (state.targetOffset.y - state.offset.y) * CONFIG.offsetLerp;
  state.mouseParallax.x += (state.mouseTarget.x - state.mouseParallax.x) * CONFIG.parallaxLerp;
  state.mouseParallax.y += (state.mouseTarget.y - state.mouseParallax.y) * CONFIG.parallaxLerp;

  const time = performance.now() * 0.001;
  const imageUniforms = state.imageMesh?.material?.uniforms;
  const gridUniforms = state.gridMesh?.material?.uniforms;

  if (imageUniforms) {
    imageUniforms.uOffset.value.set(state.offset.x, state.offset.y);
    imageUniforms.uMousePressed.value = state.mousePressed.value;
    imageUniforms.uZoom.value = state.dragZoom.value;
    imageUniforms.uMouseParallax.value.set(state.mouseParallax.x, state.mouseParallax.y);
    imageUniforms.uFocusState.value = state.focusState.value;
  }

  if (gridUniforms) {
    gridUniforms.uOffset.value.set(state.offset.x, state.offset.y);
    gridUniforms.uMousePressed.value = state.mousePressed.value;
    gridUniforms.uZoom.value = state.dragZoom.value;
    gridUniforms.uMouseParallax.value.set(state.mouseParallax.x, state.mouseParallax.y);
    gridUniforms.uFocusState.value = state.focusState.value;
  }

  state.postMesh.material.uniforms.time.value = time;

  state.renderer.setRenderTarget(state.renderTarget);
  state.renderer.clear();
  state.renderer.render(state.scene, state.camera);

  state.renderer.setRenderTarget(null);
  state.renderer.clear();
  state.renderer.render(state.postScene, state.camera);

  state.rafId = requestAnimationFrame(animate);
}

async function setupScene(token) {
  state.container = document.getElementById('gallery');
  if (!state.container || archiveItems.length === 0) return false;

  const existingCanvas = state.container.querySelector('canvas');
  if (existingCanvas) existingCanvas.remove();

  const { width, height } = getRendererSize();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  state.renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  state.renderer.setSize(width, height);
  state.renderer.setPixelRatio(dpr);
  state.renderer.setClearColor(0x000000, 0);
  state.container.appendChild(state.renderer.domElement);
  state.container.style.pointerEvents = 'auto';
  state.renderer.domElement.style.pointerEvents = 'auto';
  state.renderer.domElement.style.touchAction = 'none';
  state.renderer.domElement.style.cursor = 'grab';

  state.scene = new THREE.Scene();
  state.postScene = new THREE.Scene();
  state.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  state.camera.position.z = 1;

  const { textures, ratios } = await loadTextures(archiveItems);
  if (token !== state.initToken) {
    textures.forEach((texture) => texture?.dispose?.());
    return false;
  }

  state.sourceTextures = textures.filter(Boolean);
  state.aspectRatios = ratios;
  state.atlasTexture = createTextureAtlas(textures);

  const geometry = new THREE.PlaneGeometry(2, 2);

  const gridMaterial = new THREE.ShaderMaterial({
    vertexShader: VERTEX_SHADER,
    fragmentShader: GRID_FRAGMENT_SHADER,
    uniforms: {
      uResolution: { value: new THREE.Vector2(width, height) },
      uGridSize: { value: CONFIG.gridSize },
      uMousePressed: { value: 0 },
      uZoom: { value: 1 },
      uDistortion: { value: CONFIG.distortion },
      uOffset: { value: new THREE.Vector2(0, 0) },
      uLineThickness: { value: CONFIG.lineThickness },
      uFocusState: { value: 0 },
      uMouseParallax: { value: new THREE.Vector2(0, 0) },
    },
    transparent: true,
    depthWrite: false,
    depthTest: false,
  });

  const imageMaterial = new THREE.ShaderMaterial({
    vertexShader: VERTEX_SHADER,
    fragmentShader: createImageFragmentShader(archiveItems.length),
    uniforms: {
      uResolution: { value: new THREE.Vector2(width, height) },
      uDistortion: { value: CONFIG.distortion },
      uImageAtlas: { value: state.atlasTexture },
      uTextureCount: { value: archiveItems.length },
      uOffset: { value: new THREE.Vector2(0, 0) },
      uCellSize: { value: CONFIG.cellSize },
      uCellSpacing: { value: CONFIG.cellSpacing },
      uFocusCell: { value: new THREE.Vector2(-9999, -9999) },
      uFocusState: { value: 0 },
      uMousePressed: { value: 0 },
      uZoom: { value: 1 },
      uMouseParallax: { value: new THREE.Vector2(0, 0) },
      uAspectRatios: { value: state.aspectRatios },
    },
    transparent: true,
    depthWrite: false,
  });

  state.gridMesh = new THREE.Mesh(geometry, gridMaterial);
  state.gridMesh.position.z = -0.5;
  state.imageMesh = new THREE.Mesh(geometry.clone(), imageMaterial);

  state.scene.add(state.gridMesh);
  state.scene.add(state.imageMesh);

  state.renderTarget = new THREE.WebGLRenderTarget(width * dpr, height * dpr, {
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
  });

  const crtUniforms = {
    ...THREE.UniformsUtils.clone(CRTShader.uniforms),
    tDiffuse: { value: state.renderTarget.texture },
    scanlineIntensity: { value: CONFIG.crt.scanlineIntensity },
    scanlineCount: { value: CONFIG.crt.scanlineCount },
    brightness: { value: CONFIG.crt.brightness },
    contrast: { value: CONFIG.crt.contrast },
    saturation: { value: CONFIG.crt.saturation },
    bloomIntensity: { value: CONFIG.crt.bloomIntensity },
    bloomThreshold: { value: CONFIG.crt.bloomThreshold },
    rgbShift: { value: CONFIG.crt.rgbShift },
    adaptiveIntensity: { value: CONFIG.crt.adaptiveIntensity },
    vignetteStrength: { value: CONFIG.crt.vignetteStrength },
    curvature: { value: CONFIG.crt.curvature },
    flickerStrength: { value: CONFIG.crt.flickerStrength },
    time: { value: 0 },
    yOffset: { value: 0 },
  };

  const crtMaterial = new THREE.ShaderMaterial({
    vertexShader: CRTShader.vertexShader,
    fragmentShader: CRTShader.fragmentShader,
    uniforms: crtUniforms,
    transparent: false,
    depthWrite: false,
    depthTest: false,
  });

  state.postMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), crtMaterial);
  state.postScene.add(state.postMesh);
  return true;
}

function resetRuntimeState() {
  state.offset.x = 0;
  state.offset.y = 0;
  state.targetOffset.x = 0;
  state.targetOffset.y = 0;
  state.isDragging = false;
  state.clickStartTime = 0;
  state.dragDistance = 0;
  state.previousPointer.x = 0;
  state.previousPointer.y = 0;
  state.dragStart.x = 0;
  state.dragStart.y = 0;
  state.focusedIndex = -1;
  state.focusCell.x = -9999;
  state.focusCell.y = -9999;
  state.focusState.value = 0;
  state.dragZoom.value = 1;
  state.mousePressed.value = 0;
  state.mouseTarget.x = 0;
  state.mouseTarget.y = 0;
  state.mouseParallax.x = 0;
  state.mouseParallax.y = 0;
}

export async function initArchive() {
  if (state.running) return;
  resetRuntimeState();
  cacheDom();
  hideOverlay();
  const token = state.initToken + 1;
  state.initToken = token;

  const ok = await setupScene(token);
  if (!ok || token !== state.initToken) return;

  state.running = true;
  bindEvents();
  animate();
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
  gsap.killTweensOf(state.focusState);
  gsap.killTweensOf(state.dragZoom);
  gsap.killTweensOf(state.mousePressed);

  if (state.gridMesh) {
    state.scene?.remove(state.gridMesh);
    disposeMaterial(state.gridMesh.material);
    state.gridMesh.geometry?.dispose?.();
    state.gridMesh = null;
  }

  if (state.imageMesh) {
    state.scene?.remove(state.imageMesh);
    disposeMaterial(state.imageMesh.material);
    state.imageMesh.geometry?.dispose?.();
    state.imageMesh = null;
  }

  if (state.postMesh) {
    state.postScene?.remove(state.postMesh);
    disposeMaterial(state.postMesh.material);
    state.postMesh.geometry?.dispose?.();
    state.postMesh = null;
  }

  state.renderTarget?.dispose?.();
  state.renderTarget = null;

  state.atlasTexture?.dispose?.();
  state.atlasTexture = null;
  state.sourceTextures.forEach((texture) => texture?.dispose?.());
  state.sourceTextures = [];
  state.aspectRatios = [];

  if (state.renderer) {
    state.renderer.dispose();
    if (state.renderer.domElement?.parentNode) {
      state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
    }
  }

  state.renderer = null;
  state.camera = null;
  state.scene = null;
  state.postScene = null;
  state.eventTarget = null;
  if (state.container) {
    state.container.style.pointerEvents = '';
  }
  state.container = null;

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
