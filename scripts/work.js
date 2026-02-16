import gsap from 'gsap';
import * as THREE from 'three';
import { workItems } from '../data/work-items.js';
import { GLTFLoader } from 'three-stdlib';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import GUI from 'lil-gui';
import {
  registerGalleryOverlay,
  unregisterGalleryOverlay,
  getRenderer,
  createFakeVolumeGlow,
} from './three.js';

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
  
  // Use same parallax config as three.js
  PARALLAX_ANGLE_RANGE: 0.2,
  PARALLAX_Y_RANGE: 0.3,
  PARALLAX_TILT_RANGE: 0.04,
  PARALLAX_CONFIG_LERP: 0.05,
  PARALLAX_ORBIT_RADIUS: 5,

  // Wave shader
  WAVE_AMPLITUDE: 0.18,
  WAVE_FREQUENCY: 2.5,
  WAVE_SPEED: 0.3,

  // Lighting
  POINT_LIGHT_INTENSITY: 3.5,
  POINT_LIGHT_Z: 10,
  AMBIENT_INTENSITY: 1.2,
  DIRECTIONAL_LIGHT_INTENSITY: 2.0,

  // Particles
  PARTICLE_COUNT: 200,
  PARTICLE_BOUNDS: { xHalf: 8, yMin: -3, yMax: 5, zMin: -16, zMax: 2 },

  // Scroll tilt
  SCROLL_TILT_AMOUNT: 0.08,
  SCROLL_TILT_LERP: 0.04,
  SCROLL_TILT_MAX: 0.15,
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

    // Film grain — matches post-FX treatment of the 3D scene behind
    float grain = (hash(vUv * 1000.0 + uTime * 100.0) - 0.5) * 0.06;
    col += grain;

    // Edge fade (tighter zone, only affects alpha to preserve hover effects)
    float edgeFade = smoothstep(0.0, 0.05, vUv.x) * (1.0 - smoothstep(0.95, 1.0, vUv.x));

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

  // Post-processing
  composer: null,
  workGlowHandle: null,

  // 3D model
  workModel: null,
  tunedMaterials: new Set(),

  // Lighting
  pointLight: null,
  ambientLight: null,
  directionalLight: null,
  shadowPlane: null,

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

  // Scroll tilt
  scrollTilt: 0,

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

  // Debug GUI
  gui: null,
  guiModelControls: null,
  guiStripControls: null,
  guiGodRaysControls: null,
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

// ─── 3D MODEL LOADING ───────────────────────────────────────────────────────────

function tuneMaterialMaps(material) {
  if (material.map) material.map.colorSpace = THREE.SRGBColorSpace;
  if (material.emissiveMap) material.emissiveMap.colorSpace = THREE.SRGBColorSpace;
  material.needsUpdate = true;
}

function getFallbackPhysicalMaterial(sourceMaterial) {
  return new THREE.MeshPhysicalMaterial({
    color: sourceMaterial?.color?.clone ? sourceMaterial.color.clone() : new THREE.Color(0xffffff),
    map: sourceMaterial?.map || null,
    normalMap: sourceMaterial?.normalMap || null,
    roughnessMap: sourceMaterial?.roughnessMap || null,
    metalnessMap: sourceMaterial?.metalnessMap || null,
    aoMap: sourceMaterial?.aoMap || null,
    roughness: sourceMaterial?.roughness ?? 0.65,
    metalness: sourceMaterial?.metalness ?? 0.2,
    clearcoat: 0.12,
    clearcoatRoughness: 0.16,
    envMapIntensity: 1.35,
  });
}

function tuneMeshMaterial(mesh) {
  const apply = (sourceMaterial) => {
    if (!sourceMaterial) return sourceMaterial;
    let material = sourceMaterial;

    if (!material.isMeshStandardMaterial && !material.isMeshPhysicalMaterial) {
      material = getFallbackPhysicalMaterial(sourceMaterial);
    }

    tuneMaterialMaps(material);
    material.userData.baseRoughness = material.roughness ?? 0.8;
    material.userData.baseMetalness = material.metalness ?? 0.0;
    material.userData.baseEnvMapIntensity = material.envMapIntensity ?? 1;
    state.tunedMaterials.add(material);
    return material;
  };

  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map(apply);
  } else {
    mesh.material = apply(mesh.material);
  }
}

function normalizeModelBounds(model) {
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  
  model.children.forEach(child => {
    child.position.x -= center.x;
    child.position.y -= box.min.y;
    child.position.z -= center.z;
  });
  
  return size;
}

function finalizeModel(model) {
  const size = normalizeModelBounds(model);

  // Scale model to fit in scene (10x larger)
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) {
    const targetSize = 40;
    const s = targetSize / maxDim;
    model.scale.set(s, s, s);
  }

  model.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    tuneMeshMaterial(child);
  });
}

async function loadWorkModel() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '/work.glb',
      (glb) => {
        state.workModel = glb.scene;
        finalizeModel(state.workModel);
        
        // Position model behind the ribbon
        state.workModel.position.set(0, -6.1, -22.5);
        state.workModel.scale.set(1.3, 1.3, 1.3);
        
        // Update GUI with actual model transform
        if (state.guiModelControls) {
          state.guiModelControls.x = state.workModel.position.x;
          state.guiModelControls.y = state.workModel.position.y;
          state.guiModelControls.z = state.workModel.position.z;
          state.guiModelControls.scale = 1.3;
        }
        
        state.scene.add(state.workModel);

        // Log mesh names to identify volume/glow mesh
        state.workModel.traverse(child => {
        });

        // Apply Fresnel fake-volume glow to the designated volume mesh
        state.workModel.traverse(child => {
          if (!child.isMesh) return;
          const n = child.name.toLowerCase();
          if (n.includes('volume') || n.includes('glow') || n.includes('light')) {
            state.workGlowHandle = createFakeVolumeGlow(child, state.camera, {
              c: 1.0, p: 1.94, glowColor: '#fff8e8', op: 0.04,
            });
          }
        });

        resolve();
      },
      undefined,
      (err) => {
        console.error('[work] Model load error:', err);
        reject(err);
      }
    );
  });
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
  state.camera.position.set(0, -1.1, 0);
  
  // Setup camera position GUI controls
  setupCameraGUI();

  state.scene = new THREE.Scene();
  
  // Fog fades toward bright cream to match the HDRI background
  state.scene.fog = new THREE.FogExp2(0xf0ece4, 0.035);

  // Lighting — brighter ambient for white scene
  state.ambientLight = new THREE.AmbientLight(0xffffff, CONFIG.AMBIENT_INTENSITY);
  state.scene.add(state.ambientLight);

  state.pointLight = new THREE.PointLight(0xffffff, CONFIG.POINT_LIGHT_INTENSITY, 30, 1.5);
  state.pointLight.position.set(0, 0.5, CONFIG.POINT_LIGHT_Z);
  state.scene.add(state.pointLight);
  
  // Directional light for shadows on the strip
  state.directionalLight = new THREE.DirectionalLight(0xffffff, CONFIG.DIRECTIONAL_LIGHT_INTENSITY);
  state.directionalLight.position.set(5, 10, 5);
  state.directionalLight.castShadow = true;
  
  // Configure shadow properties
  state.directionalLight.shadow.mapSize.width = 2048;
  state.directionalLight.shadow.mapSize.height = 2048;
  state.directionalLight.shadow.camera.near = 1;
  state.directionalLight.shadow.camera.far = 40;
  state.directionalLight.shadow.camera.left = -15;
  state.directionalLight.shadow.camera.right = 15;
  state.directionalLight.shadow.camera.top = 15;
  state.directionalLight.shadow.camera.bottom = -15;
  state.directionalLight.shadow.bias = -0.0001;

  // Aim the shadow frustum at the ribbon center
  state.directionalLight.target.position.set(0, -2, -13.4);
  state.scene.add(state.directionalLight);
  state.scene.add(state.directionalLight.target);
  
  // Enable shadows on the shared renderer
  const renderer = getRenderer();
  if (renderer) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  // Strip group for collective parallax rotation
  state.stripGroup = new THREE.Group();
  state.stripGroup.position.set(0, -0.7, -13.4);
  state.scene.add(state.stripGroup);

  // Shadow catcher — horizontal plane below the ribbon that receives the shadow
  const planeGeo = new THREE.PlaneGeometry(40, 20);
  const planeMat = new THREE.MeshStandardMaterial({
    color: 0xf0ece4,
    roughness: 0.9,
    metalness: 0.0,
  });
  state.shadowPlane = new THREE.Mesh(planeGeo, planeMat);
  state.shadowPlane.rotation.x = -Math.PI / 2;
  state.shadowPlane.position.set(0, -5.2, -18);
  state.shadowPlane.receiveShadow = true;
  state.shadowPlane.castShadow = false;
  state.scene.add(state.shadowPlane);

  // Create floating background particles in the work scene
  createParticles();

  state.clock = new THREE.Clock();

  // Setup post-processing composer
  setupPostProcessing();

  registerGalleryOverlay(state.scene, state.camera);
}

// ─── CAMERA GUI CONTROLS ────────────────────────────────────────────────────────

function setupCameraGUI() {
  state.gui = new GUI();
  state.gui.title('Scene Controls');
  
  const cameraFolder = state.gui.addFolder('Camera Position');
  
  const cameraPos = {
    x: state.camera.position.x,
    y: state.camera.position.y,
    z: state.camera.position.z,
  };
  
  cameraFolder.add(cameraPos, 'x', -20, 20, 0.1).onChange((val) => {
    state.camera.position.x = val;
  });
  
  cameraFolder.add(cameraPos, 'y', -20, 20, 0.1).onChange((val) => {
    state.camera.position.y = val;
  });
  
  cameraFolder.add(cameraPos, 'z', -20, 30, 0.1).onChange((val) => {
    state.camera.position.z = val;
  });
  
  cameraFolder.open();
  
  // Camera FOV controls
  const cameraPropsFolder = state.gui.addFolder('Camera Properties');
  
  const cameraProps = {
    fov: state.camera.fov,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  };
  
  cameraPropsFolder.add(cameraProps, 'fov', 10, 120, 1).onChange((val) => {
    state.camera.fov = val;
    state.camera.updateProjectionMatrix();
  });
  
  cameraPropsFolder.add(cameraProps, 'rotationX', -Math.PI, Math.PI, 0.01).onChange((val) => {
    state.camera.rotation.x = val;
  });
  
  cameraPropsFolder.add(cameraProps, 'rotationY', -Math.PI, Math.PI, 0.01).onChange((val) => {
    state.camera.rotation.y = val;
  });
  
  cameraPropsFolder.add(cameraProps, 'rotationZ', -Math.PI, Math.PI, 0.01).onChange((val) => {
    state.camera.rotation.z = val;
  });
  
  cameraPropsFolder.open();
  
  // Strip controls
  const stripFolder = state.gui.addFolder('Strip');
  
  state.guiStripControls = {
    x: 0,
    y: 0,
    z: 0,
  };
  
  stripFolder.add(state.guiStripControls, 'x', -20, 20, 0.1).onChange((val) => {
    if (state.stripGroup) {
      state.stripGroup.position.x = val;
    }
  });
  
  stripFolder.add(state.guiStripControls, 'y', -20, 20, 0.1).onChange((val) => {
    if (state.stripGroup) {
      state.stripGroup.position.y = val;
    }
  });
  
  stripFolder.add(state.guiStripControls, 'z', -20, 20, 0.1).onChange((val) => {
    if (state.stripGroup) {
      state.stripGroup.position.z = val;
    }
  });
  
  stripFolder.open();
  
  // Model controls
  const modelFolder = state.gui.addFolder('Model');
  
  state.guiModelControls = {
    x: 0,
    y: 0,
    z: -14.6,
    scale: 1.3,
  };
  
  modelFolder.add(state.guiModelControls, 'x', -20, 20, 0.1).onChange((val) => {
    if (state.workModel) {
      state.workModel.position.x = val;
    }
  });
  
  modelFolder.add(state.guiModelControls, 'y', -20, 20, 0.1).onChange((val) => {
    if (state.workModel) {
      state.workModel.position.y = val;
    }
  });
  
  modelFolder.add(state.guiModelControls, 'z', -30, 10, 0.1).onChange((val) => {
    if (state.workModel) {
      state.workModel.position.z = val;
    }
  });
  
  modelFolder.add(state.guiModelControls, 'scale', 0.1, 5, 0.1).onChange((val) => {
    if (state.workModel) {
      state.workModel.scale.set(val, val, val);
    }
  });
  
  modelFolder.open();
  
  // Glow controls (Fresnel fake-volume)
  const glowFolder = state.gui.addFolder('Glow');
  state.guiGodRaysControls = { opacity: 0.04 };
  glowFolder.add(state.guiGodRaysControls, 'opacity', 0, 0.3, 0.001).onChange((val) => {
    if (state.workGlowHandle) state.workGlowHandle.setOpacity(val);
  });
  glowFolder.open();
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
  state.stripMesh.castShadow = true;
  state.stripMesh.receiveShadow = true;

  state.stripGroup.add(state.stripMesh);
  
  // Update GUI with actual strip position
  if (state.guiStripControls) {
    state.guiStripControls.x = 0;
    state.guiStripControls.y = -0.7;
    state.guiStripControls.z = -13.4;
  }
}

// ─── PARTICLES ON RIBBON ─────────────────────────────────────────────────────────

// ─── PARTICLES ON RIBBON (REMOVED - using three.js shared particles) ─────────────────────────────────────

// Removed in favor of shared three.js particles

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
    state.titleEl.textContent = item.title;
  }
}

// ─── UPDATE STRIP ───────────────────────────────────────────────────────────────

function updateStrip(time) {
  if (!state.stripMaterial) return;

  const u = state.stripMaterial.uniforms;
  u.uScrollOffset.value = state.scrollCurrent;
  u.uTime.value = time;
}

// ─── FLOATING PARTICLES ─────────────────────────────────────────────────────────

// ─── FLOATING PARTICLES (REMOVED - using three.js shared particles) ──────────────────────────────────

// Removed in favor of shared three.js particles

// ─── POST-PROCESSING ────────────────────────────────────────────────────────────

const postFXUniforms = {
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uGrain: { value: 0.03 },
};

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    uDarkness: { value: 0.65 },
    uOffset: { value: 0.68 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uDarkness;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = vUv - 0.5;
      float vignette = 1.0 - dot(uv, uv) * uDarkness;
      vignette = smoothstep(0.0, uOffset, clamp(vignette, 0.0, 1.0));
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `,
};

const GrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.015 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec3 color = texel.rgb;
      vec2 uvRandom = vUv + uTime * 0.001;
      float grain = random(uvRandom);
      color += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(color, texel.a);
    }
  `,
};

const EdgeDistortionShader = {
  uniforms: {
    tDiffuse: { value: null },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);
      float edge = smoothstep(0.1, 0.6, dist);

      float shift = 0.0072 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `,
};


function setupPostProcessing() {
  const renderer = getRenderer();
  if (!renderer) return;

  state.composer = new EffectComposer(renderer);
  
  const renderPass = new RenderPass(state.scene, state.camera);
  state.composer.addPass(renderPass);

  const vignettePass = new ShaderPass(VignetteShader);
  state.composer.addPass(vignettePass);

  const grainPass = new ShaderPass(GrainShader);
  grainPass.uniforms.uGrain = postFXUniforms.uGrain;
  grainPass.uniforms.uTime = postFXUniforms.uTime;
  state.composer.addPass(grainPass);

  const edgeDistortionPass = new ShaderPass(EdgeDistortionShader);
  state.composer.addPass(edgeDistortionPass);

  const outputPass = new OutputPass();
  state.composer.addPass(outputPass);
  
  // Attach composer to scene userData for three.js render integration
  state.scene.userData.composer = state.composer;
}

// ─── PARALLAX ───────────────────────────────────────────────────────────────────

// Orbital parallax state (mirrors three.js home page pattern)
const orbitTarget = { angle: Math.PI / 2, y: 0, tilt: 0 };
const orbitCurrent = { angle: Math.PI / 2, y: 0, tilt: 0 };

function updateParallax() {
  const driftTime = state.clock ? state.clock.getElapsedTime() : 0;

  // Set orbital targets from mouse position (same approach as three.js)
  orbitTarget.angle = Math.PI / 2 + state.mouseX * CONFIG.PARALLAX_ANGLE_RANGE;
  orbitTarget.y = -state.mouseY * CONFIG.PARALLAX_Y_RANGE;
  orbitTarget.tilt = state.mouseX * CONFIG.PARALLAX_TILT_RANGE;

  // Lerp toward targets
  const l = CONFIG.PARALLAX_CONFIG_LERP;
  orbitCurrent.angle += (orbitTarget.angle - orbitCurrent.angle) * l;
  orbitCurrent.y += (orbitTarget.y - orbitCurrent.y) * l;
  orbitCurrent.tilt += (orbitTarget.tilt - orbitCurrent.tilt) * l;

  if (state.camera) {
    // Orbit center = viewport origin (0, 0, 0)
    const radius = CONFIG.PARALLAX_ORBIT_RADIUS;

    state.camera.position.x = Math.cos(orbitCurrent.angle) * radius;
    state.camera.position.z = Math.sin(orbitCurrent.angle) * radius;
    state.camera.position.y = -1.1 + orbitCurrent.y + 1;

    // Handheld micro-drift — subtle oscillations keep scene alive when idle
    const driftX = Math.sin(driftTime * 0.7) * 0.012 + Math.sin(driftTime * 1.3) * 0.008;
    const driftY = Math.sin(driftTime * 0.5) * 0.012 + Math.cos(driftTime * 1.1) * 0.008;
    const driftZ = Math.cos(driftTime * 0.6) * 0.008;
    state.camera.position.x += driftX;
    state.camera.position.y += driftY;
    state.camera.position.z += driftZ;

    // Look at the strip center
    state.camera.lookAt(0, -1.1, -CONFIG.ARC_RADIUS);

    // Handheld tilt from mouse
    state.camera.rotation.z += orbitCurrent.tilt;

    // Point light loosely follows camera — reinforces 3D curvature
    if (state.pointLight) {
      state.pointLight.position.x = state.camera.position.x * 0.5;
      state.pointLight.position.y = 0.5 + state.camera.position.y * 0.3;
    }
  }
}

// ─── SCROLL TILT ────────────────────────────────────────────────────────────────

function updateScrollTilt() {
  if (!state.stripGroup) return;
  const targetTilt = Math.max(-CONFIG.SCROLL_TILT_MAX,
    Math.min(CONFIG.SCROLL_TILT_MAX, state.scrollVelocity * CONFIG.SCROLL_TILT_AMOUNT));
  state.scrollTilt += (targetTilt - state.scrollTilt) * CONFIG.SCROLL_TILT_LERP;
  state.stripGroup.rotation.z = state.scrollTilt;
}

// ─── PARTICLES ──────────────────────────────────────────────────────────────────

function createParticles() {
  const { PARTICLE_COUNT, PARTICLE_BOUNDS } = CONFIG;
  const { xHalf, yMin, yMax, zMin, zMax } = PARTICLE_BOUNDS;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const sizes = new Float32Array(PARTICLE_COUNT);
  const opacities = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 2 * xHalf;
    positions[i * 3 + 1] = yMin + Math.random() * (yMax - yMin);
    positions[i * 3 + 2] = zMin + Math.random() * (zMax - zMin);
    sizes[i] = 0.008 + Math.random() * 0.016;
    opacities[i] = 0.35 + Math.random() * 0.6;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
    uniforms: { uPixelRatio: { value: dpr } },
    vertexShader: /* glsl */ `
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
    `,
    fragmentShader: /* glsl */ `
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float alpha = smoothstep(1.0, 0.3, d) * vOpacity * 0.45;
        gl_FragColor = vec4(vec3(0.12), alpha);
      }
    `,
  });

  state.particleSystem = new THREE.Points(geo, mat);
  state.particleSystem.frustumCulled = false;
  state.scene.add(state.particleSystem);
}

function animateParticles(time) {
  if (!state.particleSystem) return;
  const positions = state.particleSystem.geometry.attributes.position.array;
  const { xHalf, yMin, yMax, zMin, zMax } = CONFIG.PARTICLE_BOUNDS;

  for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    positions[i3 + 1] += 0.001;
    positions[i3]     += Math.sin(time * 0.3 + i * 0.5) * 0.0004;
    positions[i3 + 2] += Math.cos(time * 0.25 + i * 0.7) * 0.0003;
    if (positions[i3 + 1] > yMax) {
      positions[i3 + 1] = yMin;
      positions[i3]     = (Math.random() - 0.5) * 2 * xHalf;
      positions[i3 + 2] = zMin + Math.random() * (zMax - zMin);
    }
  }
  state.particleSystem.geometry.attributes.position.needsUpdate = true;
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

  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Hover ripple raycasting
  if (state.camera && state.stripMesh && !state.isPointerDown) {
    state.rayMouse.set(mouseX, mouseY);
    state.raycaster.setFromCamera(state.rayMouse, state.camera);
    const hits = state.raycaster.intersectObject(state.stripMesh, false);
    if (hits.length > 0 && hits[0].uv) {
      state.hoverUV = hits[0].uv.clone();
      state.hoverActive = true;
      document.body.style.cursor = 'pointer';
      // Freeze parallax when hovering ribbon - don't update mouseX/mouseY
      return;
    } else {
      state.hoverActive = false;
      document.body.style.cursor = '';
    }
  }

  // Update parallax tracking (only when not hovering ribbon)
  state.mouseX = mouseX;
  state.mouseY = mouseY;
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
    
    // Update composer and post-FX resolution
    if (state.composer) {
      state.composer.setSize(w, h);
    }
    postFXUniforms.uResolution.value.set(w, h);
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
  updateScrollTilt();
  animateParticles(time);
  if (state.workGlowHandle) state.workGlowHandle.update(state.camera);
  updateTitle();

  // Update post-processing uniforms
  postFXUniforms.uTime.value = time;


  state.animationFrame = requestAnimationFrame(animate);
}

// ─── INIT / DESTROY ─────────────────────────────────────────────────────────────

export async function initWork() {
  if (isWorkInitialized) return;
  isWorkInitialized = true;


  const mainContainer = document.querySelector('[data-barba="container"]');
  if (!mainContainer) {
    console.warn('[work] no barba container found');
    isWorkInitialized = false;
    return;
  }

  state.container = mainContainer;
  state.titleEl = mainContainer.querySelector('.slide-title');

  setupGalleryScene();
  
  // Load 3D model
  try {
    await loadWorkModel();
  } catch (err) {
    console.error('[work] Failed to load 3D model:', err);
  }
  
  await loadAllTextures();
  setupStrip();
  createParticles();
  addEventListeners();

  // Roll-in reveal: start hidden, then animate in
  if (state.stripGroup) {
    // Animation removed
    state.stripGroup.scale.set(1, 1, 1);
    state.stripGroup.rotation.x = 0;
  }

  state.animationFrame = requestAnimationFrame(animate);
}

export function destroyWork() {
  if (!isWorkInitialized) return;
  isWorkInitialized = false;


  if (state.animationFrame !== null) {
    cancelAnimationFrame(state.animationFrame);
    state.animationFrame = null;
  }

  removeEventListeners();
  unregisterGalleryOverlay();

  // Dispose GUI
  if (state.gui) {
    state.gui.destroy();
    state.gui = null;
  }
  state.guiModelControls = null;
  state.guiStripControls = null;
  state.guiGodRaysControls = null;

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
    if (state.particleSystem.geometry) state.particleSystem.geometry.dispose();
    if (state.particleSystem.material) state.particleSystem.material.dispose();
    if (state.particleSystem.parent) state.particleSystem.parent.remove(state.particleSystem);
    state.particleSystem = null;
  }

  // Dispose 3D model
  if (state.workModel) {
    state.scene?.remove(state.workModel);
    state.workModel.traverse((child) => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      }
    });
    state.workModel = null;
  }

  // Clear tuned materials
  state.tunedMaterials.clear();

  // Dispose composer
  if (state.composer) {
    state.composer = null;
  }
  // Fresnel glow handle
  state.workGlowHandle = null;

  // Shadow plane
  if (state.shadowPlane) {
    state.shadowPlane.geometry.dispose();
    state.shadowPlane.material.dispose();
    if (state.shadowPlane.parent) state.shadowPlane.parent.remove(state.shadowPlane);
    state.shadowPlane = null;
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
  if (state.directionalLight) {
    state.scene?.remove(state.directionalLight);
    state.directionalLight.dispose();
    state.directionalLight = null;
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
  state.scrollTilt = 0;
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
