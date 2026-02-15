import gsap from 'gsap';
import * as THREE from 'three';
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
  WIDTH_SEGMENTS: 96,
  HEIGHT_SEGMENTS: 24,

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
  PARALLAX_ROTATION_X: 0.018,
  PARALLAX_ROTATION_Y: 0.03,
  PARALLAX_CAMERA_X: 0.09,
  PARALLAX_CAMERA_Y: 0.05,
  PARALLAX_LERP: 0.06,

  // Wave shader
  WAVE_AMPLITUDE: 0.18,
  WAVE_FREQUENCY: 2.5,
  WAVE_SPEED: 0.3,

  // Lighting
  POINT_LIGHT_INTENSITY: 2.5,
  POINT_LIGHT_Z: 10,
  AMBIENT_INTENSITY: 0.4,

  // Particles
  PARTICLE_COUNT: 120,
};

// ─── SHADERS ────────────────────────────────────────────────────────────────────

const STRIP_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveFreq;
  uniform float uWaveSpeed;
  uniform vec2 uHoverUV;
  uniform float uRippleStrength;

  varying vec2 vUv;
  varying vec3 vNormal;

  // Clean hash for organic noise overlay
  float hash1(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash1(i), hash1(i + vec2(1.0, 0.0)), f.x),
      mix(hash1(i + vec2(0.0, 1.0)), hash1(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;

    float t = uTime * uWaveSpeed;

    // How far from the horizontal center of the strip (0 at center, 1 at edges)
    // Edges of ribbon flutter more — like real cloth pinned along its midline
    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float edgeScale = smoothstep(0.0, 1.0, edgeDist);

    // Horizontal position scaled by wave frequency
    float px = vUv.x * uWaveFreq * 6.2832; // full cycles across strip

    // ── Primary: traveling sine waves (directional, like wind) ──
    // Multiple frequencies at different speeds create a rich, non-repeating wave
    float wave1 = sin(px * 1.0 - t * 3.0 + vUv.y * 1.5) * 0.50;
    float wave2 = sin(px * 2.3 - t * 2.1 + vUv.y * 2.8) * 0.25;
    float wave3 = sin(px * 0.7 + t * 1.4 - vUv.y * 0.9) * 0.15;
    // Counter-traveling wave for interference — makes it look alive, not mechanical
    float wave4 = sin(px * 1.6 + t * 1.8 + vUv.y * 3.2) * 0.10;

    float primaryWave = (wave1 + wave2 + wave3 + wave4);

    // ── Secondary: organic noise variation ──
    // Low amplitude, slow drift — breaks up the sine regularity
    vec2 noiseUV = vUv * vec2(uWaveFreq * 2.0, uWaveFreq);
    float n1 = noise(noiseUV + vec2(t * 0.8, t * 0.3));
    float n2 = noise(noiseUV * 2.1 + vec2(-t * 0.5, t * 0.7));
    float noiseMod = (n1 * 0.6 + n2 * 0.4) * 2.0 - 1.0;

    // ── Combine: edge-scaled displacement along normal ──
    // Primary waves are the dominant motion; noise adds organic imperfection
    // Edge flutter: center barely moves, edges ripple freely
    float centerHold = mix(0.15, 1.0, edgeScale); // center still gets a hint of motion
    float h = (primaryWave + noiseMod * 0.3) * uWaveAmp * centerHold;

    pos += normal * h;

    // ── Subtle vertical ripple (cloth sway) ──
    // Phase-offset from normal displacement creates an elliptical motion path
    // like how real cloth particles orbit, not just push in/out
    float yRipple = sin(px * 1.0 - t * 3.0 + 1.5708 + vUv.y * 1.5) * 0.3;
    pos.y += yRipple * uWaveAmp * edgeScale;

    // ── Hover ripple: bulge + concentric rings radiating from cursor ──
    if (uHoverUV.x >= 0.0) {
      // Aspect-corrected distance (arc ~49wu wide, strip 5.5wu tall)
      vec2 scaledUV = vec2(vUv.x * 8.9, vUv.y);
      vec2 scaledHover = vec2(uHoverUV.x * 8.9, uHoverUV.y);
      float dist = distance(scaledUV, scaledHover);

      // Smooth bulge: pushes mesh outward right at cursor (pressing into cloth)
      float bulge = exp(-dist * 5.0) * uRippleStrength * 0.12;

      // Expanding ripple rings radiating outward from the push point
      float ripple = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 3.0) * uRippleStrength * 0.25;

      pos += normal * (bulge + ripple);
    }

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
  uniform vec2 uHoverUV;
  uniform float uRippleStrength;
  varying vec2 vUv;
  varying vec3 vNormal;

  // Fast hash for film grain
  float hash(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  void main() {
    // Map strip UV.x to scrolling item space
    float totalU = vUv.x * uItemsOnStrip + uScrollOffset;

    // Which item slot and position within it
    float itemFract = fract(totalU);
    float itemIndex = floor(totalU);

    // Wrap to unique textures
    float wrappedIndex = mod(itemIndex, uNumUnique);
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

    // Hover glow — warm spot + visible concentric rings near cursor
    if (uHoverUV.x >= 0.0) {
      vec2 scaledUV = vec2(vUv.x * 8.9, vUv.y);
      vec2 scaledHover = vec2(uHoverUV.x * 8.9, uHoverUV.y);
      float dist = distance(scaledUV, scaledHover);

      // Warm glow under cursor
      float glow = exp(-dist * 2.5) * uRippleStrength * 0.18;
      col += glow;

      // Visible concentric light/dark ripple rings on the texture
      float rings = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 3.0) * 0.05;
      col += rings * uRippleStrength;

      // Subtle warm color shift near cursor
      col.r += glow * 0.3;
    }

    // Edge fade
    float edgeFade = smoothstep(0.0, 0.15, vUv.x) * (1.0 - smoothstep(0.85, 1.0, vUv.x));
    col *= edgeFade;

    // Film grain — matches post-FX treatment of the 3D scene behind
    float grain = (hash(vUv * 1000.0 + uTime * 100.0) - 0.5) * 0.06;
    col += grain;

    gl_FragColor = vec4(col, edgeFade);
  }
`;

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

  // Particles
  particleSystem: null,
  particlePositions: null,

  // Lighting
  pointLight: null,
  ambientLight: null,

  // Scroll state (in item units — 1.0 = one image slot)
  scrollTarget: 0,
  scrollCurrent: 0,
  scrollVelocity: 0,
  lastDragTime: 0,
  activeIndex: 0,
  lastActiveTitle: '',

  // Mouse parallax
  mouseX: 0,
  mouseY: 0,
  parallaxCurrent: { rx: 0, ry: 0, cx: 0, cy: 0 },

  // Hover ripple
  raycaster: new THREE.Raycaster(),
  rayMouse: new THREE.Vector2(),
  hoverUV: null,
  hoverActive: false,
  rippleStrength: 0,

  // Animation
  animationFrame: null,

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
};

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

  registerGalleryOverlay(state.scene, state.camera);
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
      uWaveAmp: { value: CONFIG.WAVE_AMPLITUDE },
      uWaveFreq: { value: CONFIG.WAVE_FREQUENCY },
      uWaveSpeed: { value: CONFIG.WAVE_SPEED },
      uHoverUV: { value: new THREE.Vector2(-1, -1) },
      uRippleStrength: { value: 0.0 },
    },
    transparent: true,
    side: THREE.FrontSide,
    depthWrite: true,
  });

  state.stripMesh = new THREE.Mesh(state.stripGeometry, state.stripMaterial);
  state.stripMesh.frustumCulled = false;

  state.stripGroup.add(state.stripMesh);
}

// ─── PARTICLES ON RIBBON ─────────────────────────────────────────────────────────

const PARTICLE_VERTEX = /* glsl */ `
  attribute float aSize;
  attribute float aOpacity;
  varying float vOpacity;
  uniform float uPixelRatio;
  void main() {
    vOpacity = aOpacity;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPos.z);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const PARTICLE_FRAGMENT = /* glsl */ `
  varying float vOpacity;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float alpha = smoothstep(1.0, 0.3, d) * vOpacity;
    gl_FragColor = vec4(vec3(1.0), alpha);
  }
`;

function createStripParticles() {
  const count = CONFIG.PARTICLE_COUNT;
  const R = CONFIG.ARC_RADIUS;
  const span = CONFIG.ARC_SPAN;
  const halfH = CONFIG.STRIP_HEIGHT * 0.5;
  const yOff = CONFIG.STRIP_Y_OFFSET;

  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const opacities = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Random angle within the strip arc
    const angle = (Math.random() - 0.5) * span;
    // Slightly offset from surface (outward or inward by up to 0.4)
    const rOff = R + (Math.random() - 0.3) * 0.6;

    positions[i * 3]     = Math.sin(angle) * rOff;
    positions[i * 3 + 1] = (Math.random() - 0.5) * halfH * 2 + yOff;
    positions[i * 3 + 2] = (Math.cos(angle) - 1) * rOff;

    sizes[i] = 0.006 + Math.random() * 0.014;
    opacities[i] = 0.2 + Math.random() * 0.5;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uPixelRatio: { value: dpr },
    },
    vertexShader: PARTICLE_VERTEX,
    fragmentShader: PARTICLE_FRAGMENT,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  state.stripGroup.add(points);

  state.particleSystem = points;
  state.particlePositions = positions;
}

function animateStripParticles(time) {
  if (!state.particleSystem) return;

  const positions = state.particlePositions;
  const count = CONFIG.PARTICLE_COUNT;
  const R = CONFIG.ARC_RADIUS;
  const span = CONFIG.ARC_SPAN;
  const halfH = CONFIG.STRIP_HEIGHT * 0.5;
  const yOff = CONFIG.STRIP_Y_OFFSET;
  const yMin = yOff - halfH;
  const yMax = yOff + halfH;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // Slow upward drift
    positions[i3 + 1] += 0.002;

    // Gentle sine sway in x/z
    positions[i3]     += Math.sin(time * 0.4 + i * 0.6) * 0.0005;
    positions[i3 + 2] += Math.cos(time * 0.35 + i * 0.8) * 0.0004;

    // Wrap around: reset to bottom at new arc position
    if (positions[i3 + 1] > yMax) {
      const angle = (Math.random() - 0.5) * span;
      const rOff = R + (Math.random() - 0.3) * 0.6;
      positions[i3]     = Math.sin(angle) * rOff;
      positions[i3 + 1] = yMin;
      positions[i3 + 2] = (Math.cos(angle) - 1) * rOff;
    }

    // Hover scatter: push particles away from cursor
    if (state.hoverActive && state.hoverUV) {
      // Convert particle position back to approximate UV
      const px = positions[i3];
      const pz = positions[i3 + 2];
      const pAngle = Math.atan2(px, pz + R);
      const pU = pAngle / span + 0.5;
      const pV = (positions[i3 + 1] - yOff) / (halfH * 2) + 0.5;

      const du = (pU - state.hoverUV.x) * 8.9; // aspect-corrected
      const dv = pV - state.hoverUV.y;
      const dist = Math.sqrt(du * du + dv * dv);

      if (dist < 2.0 && dist > 0.01) {
        const force = Math.exp(-dist * 2.0) * 0.008 * state.rippleStrength;
        positions[i3]     += (du / dist) * force * 0.5;
        positions[i3 + 1] += (dv / dist) * force;
        positions[i3 + 2] += (du / dist) * force * 0.3;
      }
    }
  }

  state.particleSystem.geometry.attributes.position.needsUpdate = true;
}

// ─── TITLE (DOM) ────────────────────────────────────────────────────────────────

function updateTitle() {
  if (!state.titleEl) return;

  const centerItem = 0.5 * CONFIG.ITEMS_ON_STRIP + state.scrollCurrent;
  const idx = ((Math.floor(centerItem) % CONFIG.NUM_UNIQUE) + CONFIG.NUM_UNIQUE) % CONFIG.NUM_UNIQUE;
  state.activeIndex = idx;

  const item = workItems[idx];
  if (!item) return;

  if (state.lastActiveTitle !== item.title) {
    state.lastActiveTitle = item.title;
    gsap.to(state.titleEl, {
      opacity: 0,
      duration: 0.15,
      onComplete: () => {
        state.titleEl.textContent = item.title;
        gsap.to(state.titleEl, { opacity: 1, duration: 0.25 });
      },
    });
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
  const driftTime = state.clock ? state.clock.getElapsedTime() : 0;

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
    // Handheld micro-drift — subtle oscillations keep scene alive when idle
    const driftX = Math.sin(driftTime * 0.7) * 0.007 + Math.sin(driftTime * 1.3) * 0.005;
    const driftY = Math.sin(driftTime * 0.5) * 0.006 + Math.cos(driftTime * 1.1) * 0.004;

    // Orbital camera — arc movement so lookAt doesn't cancel parallax
    const orbitRadius = CONFIG.CAMERA_Z;
    const orbitAngle = Math.PI / 2 + c.ry;

    state.camera.position.x = Math.cos(orbitAngle) * orbitRadius + driftX;
    state.camera.position.y = c.cy + c.rx * CONFIG.CAMERA_Z * 0.5 + driftY;
    state.camera.position.z = Math.sin(orbitAngle) * orbitRadius;

    state.camera.lookAt(0, 0, 0);

    // Subtle handheld tilt
    state.camera.rotation.z = c.ry * 0.18;

    // Point light loosely follows camera — reinforces 3D curvature
    if (state.pointLight) {
      state.pointLight.position.x = state.camera.position.x * 0.5;
      state.pointLight.position.y = 0.5 + state.camera.position.y * 0.3;
    }
  }
}

// ─── SCROLL ─────────────────────────────────────────────────────────────────────

function updateScroll() {
  // Apply momentum friction when not dragging
  if (!state.isPointerDown && Math.abs(state.scrollVelocity) > 0.0001) {
    state.scrollTarget += state.scrollVelocity;
    state.scrollVelocity *= 0.95;
  } else if (!state.isPointerDown) {
    state.scrollVelocity = 0;
  }

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
  state.scrollVelocity = 0;
  state.lastDragTime = performance.now();
}

let lastPointerMoveTime = 0;

function onPointerMove(event) {
  // Drag always updates (unthrottled for smooth scrolling)
  if (state.isPointerDown) {
    const now = performance.now();
    const deltaX = event.clientX - state.lastPointerX;
    const dt = now - state.lastDragTime;
    state.scrollTarget -= deltaX * CONFIG.DRAG_MULTIPLIER;
    // Track instantaneous velocity for momentum on release
    if (dt > 0) state.scrollVelocity = -deltaX * CONFIG.DRAG_MULTIPLIER / (dt / 16);
    state.lastPointerX = event.clientX;
    state.lastDragTime = now;
  }

  // Throttle parallax mouse updates to ~60fps
  const now = performance.now();
  if (now - lastPointerMoveTime < 16) return;
  lastPointerMoveTime = now;

  state.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  state.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Hover ripple raycasting
  if (state.camera && state.stripMesh && !state.isPointerDown) {
    state.rayMouse.set(state.mouseX, state.mouseY);
    state.raycaster.setFromCamera(state.rayMouse, state.camera);
    const hits = state.raycaster.intersectObject(state.stripMesh, false);
    if (hits.length > 0 && hits[0].uv) {
      state.hoverUV = hits[0].uv.clone();
      state.hoverActive = true;
      document.body.style.cursor = 'pointer';
    } else {
      state.hoverActive = false;
      document.body.style.cursor = '';
    }
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

  state.rayMouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  state.raycaster.setFromCamera(state.rayMouse, state.camera);
  const intersects = state.raycaster.intersectObject(state.stripMesh, false);

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

let resizeTimeout = null;

function onResize() {
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (!state.camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    state.camera.aspect = w / h;
    state.camera.updateProjectionMatrix();
  }, 100);
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

// ─── ANIMATION LOOP ─────────────────────────────────────────────────────────────

function updateRipple() {
  if (!state.stripMaterial) return;
  const u = state.stripMaterial.uniforms;

  // Smooth lerp ripple strength toward target
  const target = state.hoverActive ? 1.0 : 0.0;
  state.rippleStrength += (target - state.rippleStrength) * 0.08;
  u.uRippleStrength.value = state.rippleStrength;

  if (state.hoverUV) {
    u.uHoverUV.value.set(state.hoverUV.x, state.hoverUV.y);
  } else {
    u.uHoverUV.value.set(-1, -1);
  }
}

function animate() {
  const time = state.clock ? state.clock.getElapsedTime() : 0;

  updateScroll();
  updateStrip(time);
  updateParallax();
  updateRipple();
  animateStripParticles(time);
  updateTitle();

  state.animationFrame = requestAnimationFrame(animate);
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
  createStripParticles();
  addEventListeners();

  state.animationFrame = requestAnimationFrame(animate);
}

export function destroyWork() {
  if (!isWorkInitialized) return;
  isWorkInitialized = false;

  console.log('[work] destroying strip carousel');

  if (state.animationFrame !== null) {
    cancelAnimationFrame(state.animationFrame);
    state.animationFrame = null;
  }

  // Kill GSAP tweens
  if (state.titleEl) {
    gsap.killTweensOf(state.titleEl);
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

  // Dispose particles
  if (state.particleSystem) {
    state.stripGroup?.remove(state.particleSystem);
    state.particleSystem.geometry.dispose();
    state.particleSystem.material.dispose();
    state.particleSystem = null;
    state.particlePositions = null;
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

  // Clear debounce timers
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
    resizeTimeout = null;
  }

  // Reset cursor
  document.body.style.cursor = '';

  // Null out
  state.scene = null;
  state.camera = null;
  state.clock = null;
  state.container = null;
  state.titleEl = null;
  state.scrollTarget = 0;
  state.scrollCurrent = 0;
  state.scrollVelocity = 0;
  state.lastDragTime = 0;
  state.activeIndex = 0;
  state.lastActiveTitle = '';
  state.mouseX = 0;
  state.mouseY = 0;
  state.parallaxCurrent = { rx: 0, ry: 0, cx: 0, cy: 0 };
  state.hoverUV = null;
  state.hoverActive = false;
  state.rippleStrength = 0;
  state.isPointerDown = false;
  state.handlers = {
    resize: null,
    wheel: null,
    pointermove: null,
    pointerdown: null,
    pointerup: null,
  };
}
