import gsap from 'gsap';
import * as THREE from 'three';
import { Text as TroikaText } from 'troika-three-text';
import { workItems } from '../data/work-items.js';
import { registerGalleryOverlay, unregisterGalleryOverlay } from './three.js';

// Cinematic 3D strip carousel — one continuous curved mesh wrapping an arc,
// with UV-scrolled image segments, wave displacement, and parallax.
// Composited by the shared renderer via registerGalleryOverlay().

let isWorkInitialized = false;

const CONFIG = {
  // Strip geometry
  ARC_RADIUS: 14,            // cylinder radius
  ARC_SPAN: 3.5,             // Wider arc (~200 degrees)
  STRIP_HEIGHT: 5.5,         // Taller strip for 5:4 aspect ratio
  STRIP_Y_OFFSET: -1.2,      // vertical center of strip (pushes below title)
  WIDTH_SEGMENTS: 80,         // Sufficient segments for smooth arc with wave
  HEIGHT_SEGMENTS: 20,        // Sufficient segments for wave detail

  // How many image slots are visible across the strip
  ITEMS_ON_STRIP: 11,         // Increased to maintain density with wider arc/taller items
  GAP_SIZE: 0.03,             // normalized gap between images
  NUM_UNIQUE: 4,              // unique textures

  // Camera
  CAMERA_FOV: 50,
  CAMERA_Z: 12,

  // Scroll / drag (scroll is in "item units" — 1.0 = one image width)
  SCROLL_SPEED: 0.004,
  SCROLL_LERP: 0.08,
  DRAG_MULTIPLIER: 0.008,

  // Parallax
  PARALLAX_ROTATION_X: 0.03,
  PARALLAX_ROTATION_Y: 0.05,
  PARALLAX_CAMERA_X: 0.15,
  PARALLAX_CAMERA_Y: 0.08,
  PARALLAX_LERP: 0.03,

  // Wave shader
  WAVE_AMPLITUDE: 0.175,      // Reduced by 50%
  WAVE_FREQUENCY: 3.0,       // Increased frequency
  WAVE_SPEED: 0.6,

  // Lighting
  POINT_LIGHT_INTENSITY: 2.5,
  POINT_LIGHT_Z: 10,
  AMBIENT_INTENSITY: 0.4,

  // Title
  TITLE_FONT: '/OTJubilee-Golden.otf',
  TITLE_FONT_SIZE: 0.55,
};

// ─── SHADERS ────────────────────────────────────────────────────────────────────

const STRIP_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;

  varying vec2 vUv;
  varying vec3 vNormal;

  // **** Noise 2D
  float hash1(vec2 p){ return fract( sin(length(p)) * 43758.5453 ); }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p); 
    f *= f * (3.0-2.0*f);

    return mix(
      mix(hash1(i + vec2(0.,0.)), hash1(i + vec2(1.,0.)), f.x),
      mix(hash1(i + vec2(0.,1.)), hash1(i + vec2(1.,1.)), f.x),
      f.y);
  }

  float fbmWave(vec2 p, float time) {	
    float f = 0.;
    p.x -= time;
    f += 0.50000 * noise(p); p *= 1.18; p.x -= -time*1.05;
    f += 0.25000 * noise(p); p *= 1.25; p.x -= time*1.48; p.y -= time*0.55;
    f += 0.12500 * noise(p); p *= 1.39; p.x -= -time*2.11; p.y -= -time*0.71;
    // f += 0.06250 * noise(p); p *= 1.52; p.x -= time*2.23; p.y -= time*0.91;
    
    // Normalize
    f /= 0.87500;
    return f;
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;

    // Coordinate scaling to match ShaderToy's scale
    // The original shader used pixel coordinates or large world coordinates.
    // We scale UV (0..1) up to get enough noise repetition.
    vec2 noiseUV = uv * vec2(10.0, 5.0); 

    // Time scaling
    float t = uTime * uWaveSpeed;

    // 1. Calculate Wave Height (Z displacement along normal)
    // h = (fbmWave(...) * 2. - 1.) * scale
    // We use uWaveAmp to control the intensity
    
    // Offset noiseUV to match the specific "good part" of the noise from original shader
    float h = (fbmWave((noiseUV + vec2(699.0, 375.0)) * 0.18, t * 2.0) * 2.0 - 1.0) * uWaveAmp * 5.0;

    // Apply smoothstep to pin the left edge? 
    // The original had: float waveScale = smoothstep(0.0, flagSize.x*0.4, abs(p.x+flagSize.x));
    // Here we might want the whole strip to wave, or maybe pin the ends slightly if it looks better.
    // Let's let it flow freely for now as it's a "ring" of cloth.

    // 2. Apply displacement along normal
    pos += normal * h;

    // 3. Optional: Y displacement for extra cloth detail (buckling)
    float displacementScale = smoothstep(0.0, 1.0, abs(uv.x)); // varying scale?
    // Original: float displacementY = displacementScale*(0.5+0.5*sin(p.x*0.01))*3.;
    // We'll add a simpler version
    float yDisp = sin(noiseUV.x * 0.5 + t) * uWaveAmp * 1.0;
    pos.y += yDisp;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const STRIP_FRAGMENT_SHADER = /* glsl */ `
  uniform sampler2D uTex0;
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform sampler2D uTex3;
  uniform float uScrollOffset;
  uniform float uItemsOnStrip;
  uniform float uNumUnique;
  uniform float uGapSize;
  uniform float uTime;
  uniform float uGrain;

  varying vec2 vUv;
  varying vec3 vNormal;

  float random(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    // Map strip UV.x to scrolling item space
    float totalU = vUv.x * uItemsOnStrip + uScrollOffset;

    // Which item slot and position within it
    float itemFract = fract(totalU);
    float itemIndex = floor(totalU);

    // Wrap to unique textures
    float wrappedIndex = mod(itemIndex, uNumUnique);
    // Handle negative mod
    if (wrappedIndex < 0.0) wrappedIndex += uNumUnique;

    // Gap: discard pixels in the gap region between items
    float halfGap = uGapSize * 0.5;
    if (itemFract < halfGap || itemFract > 1.0 - halfGap) {
      discard;
    }

    // Remap itemFract to texture UV (skip the gap portion)
    float texU = (itemFract - halfGap) / (1.0 - uGapSize);
    vec2 texCoord = vec2(texU, vUv.y);

    // Sample correct texture based on wrapped index
    vec3 col;
    int idx = int(wrappedIndex);
    if (idx == 0) col = texture2D(uTex0, texCoord).rgb;
    else if (idx == 1) col = texture2D(uTex1, texCoord).rgb;
    else if (idx == 2) col = texture2D(uTex2, texCoord).rgb;
    else col = texture2D(uTex3, texCoord).rgb;

    // Subtle grain
    float noise = random(vUv * 10.0 + fract(uTime * 0.1));
    col += (noise - 0.5) * uGrain;

    // Slight darkening at edges of strip for depth
    // Fade out at the far edges of the strip
    // smoothstep(0.0, 0.15, vUv.x) fades in from 0->1 at left
    // (1.0 - smoothstep(0.85, 1.0, vUv.x)) fades out from 1->0 at right
    float edgeFade = smoothstep(0.0, 0.15, vUv.x) * (1.0 - smoothstep(0.85, 1.0, vUv.x));
    col *= edgeFade; // Darken
    gl_FragColor = vec4(col, edgeFade); // Fade alpha
  }
`;

// ─── Cached reusables ────────────────────────────────────────────────────────────
const _raycaster = new THREE.Raycaster();
const _mouseVec = new THREE.Vector2();

// ─── STATE ──────────────────────────────────────────────────────────────────────

const state = {
  container: null,
  titleEl: null,
  scene: null,
  camera: null,
  clock: null,

  // Strip mesh
  stripGroup: null,     // parent group for parallax
  stripMesh: null,      // the single curved mesh
  stripGeometry: null,
  stripMaterial: null,
  textureCache: new Map(),
  textures: [],         // ordered array [tex0, tex1, tex2, tex3]

  // Troika title
  titleMesh: null,

  // Lighting
  pointLight: null,
  ambientLight: null,

  // Scroll state (in item units — 1.0 = one image slot)
  scrollTarget: 0,
  scrollCurrent: 0,
  activeIndex: 0,
  lastActiveTitle: '',

  // Mouse parallax
  mouseX: 0,
  mouseY: 0,
  parallaxCurrent: { rx: 0, ry: 0, cx: 0, cy: 0 },

  // Animation
  introPlayed: false,

  // Interaction
  isPointerDown: false,
  lastPointerX: 0,
  dragStartX: 0,
  dragStartY: 0,

  // Event handlers
  handlers: {
    resize: null,
    wheel: null,
    pointermove: null,
    pointerdown: null,
    pointerup: null,
  },
  gui: null,
};

// ─── DEBUG GUI ──────────────────────────────────────────────────────────────────

async function setupGUI() {
  if (!import.meta.env.DEV) return;
  if (state.gui) state.gui.destroy();
  const { default: GUI } = await import('lil-gui');
  state.gui = new GUI({ title: 'Work Page Debug' });

  const camFolder = state.gui.addFolder('Camera');
  if (state.camera) {
    camFolder.add(state.camera.position, 'z', 5, 20).name('Camera Z').onChange(() => {
      // Update title position based on new Z
      onResize();
    });
  }
  camFolder.add(CONFIG, 'CAMERA_FOV', 30, 90).name('FOV').onChange(() => {
    if (state.camera) {
      state.camera.fov = CONFIG.CAMERA_FOV;
      state.camera.updateProjectionMatrix();
      onResize();
    }
  });

  const lightFolder = state.gui.addFolder('Lighting');
  lightFolder.add(CONFIG, 'AMBIENT_INTENSITY', 0, 2).name('Ambient Int').onChange(v => {
    if (state.ambientLight) state.ambientLight.intensity = v;
  });
  lightFolder.add(CONFIG, 'POINT_LIGHT_INTENSITY', 0, 10).name('Point Int').onChange(v => {
    if (state.pointLight) state.pointLight.intensity = v;
  });
  lightFolder.add(CONFIG, 'POINT_LIGHT_Z', 0, 20).name('Point Z').onChange(v => {
    if (state.pointLight) state.pointLight.position.z = v;
  });

  const waveFolder = state.gui.addFolder('Wave Shader');
  waveFolder.add(CONFIG, 'WAVE_AMPLITUDE', 0, 2).name('Amplitude').onChange(v => {
    if (state.stripMaterial) state.stripMaterial.uniforms.uWaveAmp.value = v;
  });
  waveFolder.add(CONFIG, 'WAVE_FREQUENCY', 0, 10).name('Frequency').onChange(v => {
    if (state.stripMaterial) state.stripMaterial.uniforms.uWaveFreq.value = v;
  });
  waveFolder.add(CONFIG, 'WAVE_SPEED', 0, 2).name('Speed').onChange(v => {
    if (state.stripMaterial) state.stripMaterial.uniforms.uWaveSpeed.value = v;
  });

  const paraFolder = state.gui.addFolder('Parallax');
  paraFolder.add(CONFIG, 'PARALLAX_ROTATION_X', 0, 0.2).name('Rot X');
  paraFolder.add(CONFIG, 'PARALLAX_ROTATION_Y', 0, 0.2).name('Rot Y');
  paraFolder.add(CONFIG, 'PARALLAX_CAMERA_X', 0, 0.5).name('Cam X');
  paraFolder.add(CONFIG, 'PARALLAX_CAMERA_Y', 0, 0.5).name('Cam Y');
}

// ─── TEXTURE LOADING ────────────────────────────────────────────────────────────

function loadAllTextures() {
  const loader = new THREE.TextureLoader();
  const uniqueImages = [...new Set(workItems.map(item => item.image))];

  const promises = uniqueImages.map(src => {
    if (state.textureCache.has(src)) return Promise.resolve();
    return new Promise((resolve) => {
      loader.load(
        src,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = true;
          state.textureCache.set(src, texture);
          resolve();
        },
        undefined,
        () => {
          console.warn(`[work] Failed to load texture: ${src}`);
          resolve();
        }
      );
    });
  });

  return Promise.all(promises);
}

// ─── CURVED STRIP GEOMETRY ──────────────────────────────────────────────────────

function buildStripGeometry() {
  const R = CONFIG.ARC_RADIUS;
  const span = CONFIG.ARC_SPAN;
  const h = CONFIG.STRIP_HEIGHT;
  const wSeg = CONFIG.WIDTH_SEGMENTS;
  const hSeg = CONFIG.HEIGHT_SEGMENTS;

  const vertCount = (wSeg + 1) * (hSeg + 1);
  const positions = new Float32Array(vertCount * 3);
  const normals = new Float32Array(vertCount * 3);
  const uvs = new Float32Array(vertCount * 2);

  let vi = 0;
  let ni = 0;
  let ui = 0;

  for (let j = 0; j <= hSeg; j++) {
    const v = j / hSeg;
    const y = (v - 0.5) * h + CONFIG.STRIP_Y_OFFSET;

    for (let i = 0; i <= wSeg; i++) {
      const u = i / wSeg;
      // Angle from -span/2 to +span/2 (centered on camera)
      const angle = (u - 0.5) * span;

      // Position on cylinder surface, shifted so center is at z=0
      const x = Math.sin(angle) * R;
      const z = (Math.cos(angle) - 1) * R;

      positions[vi++] = x;
      positions[vi++] = y;
      positions[vi++] = z;

      // Normal points outward from cylinder (away from center at 0,y,-R)
      const nx = Math.sin(angle);
      const nz = Math.cos(angle);
      normals[ni++] = nx;
      normals[ni++] = 0;
      normals[ni++] = nz;

      uvs[ui++] = u;
      uvs[ui++] = v;
    }
  }

  // Build index buffer
  const indices = [];
  for (let j = 0; j < hSeg; j++) {
    for (let i = 0; i < wSeg; i++) {
      const a = j * (wSeg + 1) + i;
      const b = a + 1;
      const c = a + (wSeg + 1);
      const d = c + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  return geometry;
}

// ─── SCENE SETUP ────────────────────────────────────────────────────────────────

function setupGalleryScene() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  state.camera = new THREE.PerspectiveCamera(
    CONFIG.CAMERA_FOV,
    w / h,
    0.1,
    100
  );
  state.camera.position.set(0, 0, CONFIG.CAMERA_Z);

  state.scene = new THREE.Scene();

  // Lighting — central point light so center of strip is brightest
  state.ambientLight = new THREE.AmbientLight(0xffffff, CONFIG.AMBIENT_INTENSITY);
  state.scene.add(state.ambientLight);

  state.pointLight = new THREE.PointLight(0xffffff, CONFIG.POINT_LIGHT_INTENSITY, 30, 1.5);
  state.pointLight.position.set(0, 0.5, CONFIG.POINT_LIGHT_Z);
  state.scene.add(state.pointLight);

  // Strip group for collective parallax rotation
  state.stripGroup = new THREE.Group();
  state.scene.add(state.stripGroup);

  state.clock = new THREE.Clock();

  registerGalleryOverlay(state.scene, state.camera, updateWork);
}

// ─── STRIP MESH CREATION ────────────────────────────────────────────────────────

function setupStrip() {
  // Build ordered texture array from unique images
  const uniqueImages = [...new Set(workItems.map(item => item.image))];
  state.textures = uniqueImages.map(src => state.textureCache.get(src)).filter(Boolean);

  // Pad to 4 if needed (shader expects exactly 4)
  while (state.textures.length < 4) {
    state.textures.push(state.textures[0] || new THREE.Texture());
  }

  state.stripGeometry = buildStripGeometry();

  state.stripMaterial = new THREE.ShaderMaterial({
    vertexShader: STRIP_VERTEX_SHADER,
    fragmentShader: STRIP_FRAGMENT_SHADER,
    uniforms: {
      uTex0: { value: state.textures[0] },
      uTex1: { value: state.textures[1] },
      uTex2: { value: state.textures[2] },
      uTex3: { value: state.textures[3] },
      uScrollOffset: { value: 0 },
      uItemsOnStrip: { value: CONFIG.ITEMS_ON_STRIP },
      uNumUnique: { value: CONFIG.NUM_UNIQUE },
      uGapSize: { value: CONFIG.GAP_SIZE },
      uTime: { value: 0 },
      uGrain: { value: 0.03 },
      uWaveAmp: { value: CONFIG.WAVE_AMPLITUDE },
      uWaveFreq: { value: CONFIG.WAVE_FREQUENCY },
      uWaveSpeed: { value: CONFIG.WAVE_SPEED },
    },
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: true,
  });

  state.stripMesh = new THREE.Mesh(state.stripGeometry, state.stripMaterial);
  state.stripMesh.frustumCulled = false;

  // Start hidden for intro
  state.stripMesh.material.uniforms.uWaveAmp.value = 0;
  state.stripMesh.position.y = -2;
  state.stripMesh.scale.y = 0.001;

  state.stripGroup.add(state.stripMesh);
}

// ─── TROIKA TITLE ───────────────────────────────────────────────────────────────

function setupTitle() {
  if (!state.scene) return;

  const title = new TroikaText();
  title.text = (workItems[0]?.title || '').toUpperCase();
  title.font = CONFIG.TITLE_FONT;
  title.anchorX = 'center';
  title.anchorY = 'middle';
  title.fontSize = CONFIG.TITLE_FONT_SIZE;
  title.textAlign = 'center';
  title.maxWidth = 8;
  title.color = 0xe2e2e2;
  title.material.transparent = true;
  title.material.opacity = 1;
  title.material.depthTest = false;
  title.material.depthWrite = false;
  title.frustumCulled = false;

  // Position in upper third of the perspective frustum
  const visibleHeight = 2 * Math.tan((CONFIG.CAMERA_FOV / 2) * Math.PI / 180) * CONFIG.CAMERA_Z;
  title.position.set(0, visibleHeight * 0.28, 1);

  state.scene.add(title);
  state.titleMesh = title;
  state.lastActiveTitle = title.text;

  // Subtle fade-in
  title.sync(() => {
    // Force visible immediately
    title.material.opacity = 1;
  });
}

function updateTitle() {
  if (!state.titleMesh) return;

  // Active item = center of the visible strip, determined by scroll offset
  // The center of the strip maps to UV.x = 0.5, which maps to item index:
  // centerItemFloat = 0.5 * ITEMS_ON_STRIP + scrollCurrent
  const centerItem = 0.5 * CONFIG.ITEMS_ON_STRIP + state.scrollCurrent;
  // Use floor instead of round to match the shader's texture selection logic
  const idx = ((Math.floor(centerItem) % CONFIG.NUM_UNIQUE) + CONFIG.NUM_UNIQUE) % CONFIG.NUM_UNIQUE;
  // console.log('[work] scroll:', state.scrollCurrent, 'center:', centerItem, 'idx:', idx);
  state.activeIndex = idx;

  const item = workItems[idx];
  if (!item) return;

  if (state.lastActiveTitle !== item.title) {
    const mesh = state.titleMesh;
    gsap.killTweensOf(mesh.material);
    // Immediate update without fade-out to prevent visibility issues
    mesh.text = item.title.toUpperCase();
    state.lastActiveTitle = item.title;
    mesh.sync(() => {
      mesh.material.opacity = 1;
    });

    // Also update semantic title if exists
    if (state.titleEl) state.titleEl.textContent = item.title;
  }
}

// ─── UPDATE STRIP ───────────────────────────────────────────────────────────────

function updateStrip(time) {
  if (!state.stripMaterial) return;

  const u = state.stripMaterial.uniforms;
  u.uScrollOffset.value = state.scrollCurrent;
  u.uTime.value = time;
}

// ─── PARALLAX ───────────────────────────────────────────────────────────────────

function updateParallax() {
  const target = {
    rx: state.mouseY * CONFIG.PARALLAX_ROTATION_X,
    ry: state.mouseX * CONFIG.PARALLAX_ROTATION_Y,
    cx: state.mouseX * CONFIG.PARALLAX_CAMERA_X,
    cy: state.mouseY * CONFIG.PARALLAX_CAMERA_Y,
  };

  const c = state.parallaxCurrent;
  const l = CONFIG.PARALLAX_LERP;
  c.rx += (target.rx - c.rx) * l;
  c.ry += (target.ry - c.ry) * l;
  c.cx += (target.cx - c.cx) * l;
  c.cy += (target.cy - c.cy) * l;

  if (state.stripGroup) {
    state.stripGroup.rotation.x = c.rx;
    state.stripGroup.rotation.y = c.ry;
  }

  if (state.camera) {
    state.camera.position.x = c.cx;
    state.camera.position.y = c.cy;
    state.camera.lookAt(0, 0, 0);
  }
}

// ─── SCROLL ─────────────────────────────────────────────────────────────────────

function updateScroll() {
  state.scrollCurrent += (state.scrollTarget - state.scrollCurrent) * CONFIG.SCROLL_LERP;
}

// ─── EVENT HANDLERS ─────────────────────────────────────────────────────────────

function onWheel(event) {
  event.preventDefault();
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ? event.deltaX
    : event.deltaY;
  state.scrollTarget += delta * CONFIG.SCROLL_SPEED;
}

function onPointerDown(event) {
  state.isPointerDown = true;
  state.lastPointerX = event.clientX;
  state.dragStartX = event.clientX;
  state.dragStartY = event.clientY;
}

function onPointerMove(event) {
  // Parallax
  state.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  state.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Drag
  if (state.isPointerDown) {
    const deltaX = event.clientX - state.lastPointerX;
    state.scrollTarget -= deltaX * CONFIG.DRAG_MULTIPLIER;
    state.lastPointerX = event.clientX;
  }
}

function onPointerUp(event) {
  if (!state.isPointerDown) return;
  state.isPointerDown = false;

  const dx = Math.abs(event.clientX - state.dragStartX);
  const dy = Math.abs(event.clientY - state.dragStartY);
  if (dx < 5 && dy < 5) {
    handleClick(event);
  }
}

function handleClick(event) {
  if (!state.camera || !state.stripMesh) return;

  _mouseVec.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  _raycaster.setFromCamera(_mouseVec, state.camera);
  const intersects = _raycaster.intersectObject(state.stripMesh, false);

  if (intersects.length > 0) {
    const uv = intersects[0].uv;
    if (uv) {
      // Determine which item was clicked from UV.x + scroll
      const totalU = uv.x * CONFIG.ITEMS_ON_STRIP + state.scrollCurrent;
      const itemIdx = ((Math.floor(totalU) % CONFIG.NUM_UNIQUE) + CONFIG.NUM_UNIQUE) % CONFIG.NUM_UNIQUE;
      const item = workItems[itemIdx];
      if (item?.href) {
        const link = document.querySelector(`a[href="${item.href}"]`);
        if (link) {
          link.click();
        } else {
          window.location.href = item.href;
        }
      }
    }
  }
}

function onResize() {
  if (!state.camera) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  state.camera.aspect = w / h;
  state.camera.updateProjectionMatrix();

  if (state.titleMesh) {
    const visibleHeight = 2 * Math.tan((CONFIG.CAMERA_FOV / 2) * Math.PI / 180) * CONFIG.CAMERA_Z;
    state.titleMesh.position.y = visibleHeight * 0.28;
  }
}

function addEventListeners() {
  state.handlers.wheel = onWheel;
  state.handlers.pointerdown = onPointerDown;
  state.handlers.pointermove = onPointerMove;
  state.handlers.pointerup = onPointerUp;
  state.handlers.resize = onResize;

  window.addEventListener('wheel', state.handlers.wheel, { passive: false });
  window.addEventListener('pointerdown', state.handlers.pointerdown);
  window.addEventListener('pointermove', state.handlers.pointermove);
  window.addEventListener('pointerup', state.handlers.pointerup);
  window.addEventListener('resize', state.handlers.resize);
}

function removeEventListeners() {
  if (state.handlers.wheel) window.removeEventListener('wheel', state.handlers.wheel);
  if (state.handlers.pointerdown) window.removeEventListener('pointerdown', state.handlers.pointerdown);
  if (state.handlers.pointermove) window.removeEventListener('pointermove', state.handlers.pointermove);
  if (state.handlers.pointerup) window.removeEventListener('pointerup', state.handlers.pointerup);
  if (state.handlers.resize) window.removeEventListener('resize', state.handlers.resize);
}

// ─── INTRO ANIMATION ────────────────────────────────────────────────────────────

function playIntro() {
  if (!state.stripMesh) return;

  const tl = gsap.timeline({
    onComplete: () => {
      state.introPlayed = true;
    },
  });

  // Strip rises up and scales in
  tl.to(state.stripMesh.position, {
    y: 0,
    duration: 1.4,
    ease: 'power2.out',
  }, 0.2);

  tl.to(state.stripMesh.scale, {
    y: 1,
    duration: 1.4,
    ease: 'power2.out',
  }, 0.2);

  // Wave amplitude fades in
  tl.to(state.stripMaterial.uniforms.uWaveAmp, {
    value: CONFIG.WAVE_AMPLITUDE,
    duration: 2.0,
    ease: 'power1.out',
  }, 0.5);

  return tl;
}

// ─── UPDATE (called by shared three.js render loop via registerGalleryOverlay) ──

function updateWork() {
  const time = state.clock ? state.clock.getElapsedTime() : 0;

  updateScroll();
  updateStrip(time);
  updateParallax();
  updateTitle();
}

// ─── INIT / DESTROY ─────────────────────────────────────────────────────────────

export async function initWork() {
  if (isWorkInitialized) return;
  isWorkInitialized = true;

  console.log('[work] initializing strip carousel');

  const mainContainer = document.querySelector('[data-barba="container"]');
  if (!mainContainer) {
    console.warn('[work] no barba container found');
    isWorkInitialized = false;
    return;
  }

  state.container = mainContainer;
  state.titleEl = mainContainer.querySelector('.slide-title');

  setupGalleryScene();
  await loadAllTextures();
  setupStrip();
  setupTitle();
  addEventListeners();
  setupGUI();

  playIntro();
}

export function destroyWork() {
  if (!isWorkInitialized) return;
  isWorkInitialized = false;

  console.log('[work] destroying strip carousel');

  // Kill GSAP tweens
  if (state.stripMesh) {
    gsap.killTweensOf(state.stripMesh.position);
    gsap.killTweensOf(state.stripMesh.scale);
  }
  if (state.stripMaterial) {
    gsap.killTweensOf(state.stripMaterial.uniforms.uWaveAmp);
  }
  if (state.titleMesh) {
    gsap.killTweensOf(state.titleMesh.material);
  }

  removeEventListeners();
  unregisterGalleryOverlay();

  // Dispose strip
  if (state.stripMesh) {
    state.stripGroup?.remove(state.stripMesh);
  }
  if (state.stripMaterial) {
    state.stripMaterial.dispose();
    state.stripMaterial = null;
  }
  if (state.stripGeometry) {
    state.stripGeometry.dispose();
    state.stripGeometry = null;
  }
  state.stripMesh = null;
  state.textures = [];

  // Dispose Troika title
  if (state.titleMesh) {
    state.scene?.remove(state.titleMesh);
    state.titleMesh.dispose();
    state.titleMesh = null;
  }

  // Dispose lights
  if (state.pointLight) {
    state.scene?.remove(state.pointLight);
    state.pointLight = null;
  }
  if (state.ambientLight) {
    state.scene?.remove(state.ambientLight);
    state.ambientLight = null;
  }

  // Dispose strip group
  if (state.stripGroup) {
    state.scene?.remove(state.stripGroup);
    state.stripGroup = null;
  }

  // Dispose textures
  state.textureCache.forEach(t => t.dispose());
  state.textureCache.clear();

  // Null out
  state.scene = null;
  state.camera = null;
  state.clock = null;
  state.container = null;
  state.titleEl = null;
  state.scrollTarget = 0;
  state.scrollCurrent = 0;
  state.activeIndex = 0;
  state.lastActiveTitle = '';
  state.mouseX = 0;
  state.mouseY = 0;
  state.parallaxCurrent = { rx: 0, ry: 0, cx: 0, cy: 0 };
  state.isPointerDown = false;
  state.introPlayed = false;
  state.handlers = {
    resize: null,
    wheel: null,
    pointermove: null,
    pointerdown: null,
    pointerup: null,
  };

  if (state.gui) {
    state.gui.destroy();
    state.gui = null;
  }
}
