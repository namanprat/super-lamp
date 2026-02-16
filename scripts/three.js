import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


let renderer = null;
let composer = null;
let camera = null;
let scene = null;
let resizeHandler = null;
let mouseHandler = null;
let rafId = null;
let containerEl = null;
let isRunning = false;
let keyLight = null;
let ambientLight = null;
let shadowCatcher = null;
let pmremGenerator = null;
let envRenderTarget = null;
let sceneTween = null;
let particleSystem = null;
const tunedMaterials = new Set();

// ── Dual model state ──
let homeModelRoot = null;
let workModelRoot = null;
let activeModel = null;
let currentModelPage = 'home'; // 'home' | 'work'
let clayMaterial = null;
let modelsLoaded = { home: false, work: false };
let modelLoadPromise = null;

// ── Post-FX uniforms ──
const postFXUniforms = {
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uGrain: { value: 0.03 },
};
let bloomPass = null;
const cameraTarget = { angle: Math.PI / 2, y: 0, tilt: 0 };
const cameraCurrent = { angle: Math.PI / 2, y: 0, tilt: 0 };
const cameraOrbitOffset = { x: 0, y: 0, z: 0 };
const parallaxConfig = { angleRange: 0.2, yRange: 0.3, tiltRange: 0.04, lerp: 0.05, orbitRadius: 5 };
const tune = {
  exposure: 1.0,
  ambientIntensity: 0.18,
  ambientColor: '#fff5ff', // Slight magenta to counteract green tint
  keyIntensity: 3.25,
  keyColor: '#ffffff',
  keyX: 4.2,
  keyY: 7.5,
  keyZ: 6.2,
  envBackgroundIntensity: 0.45,
  envBackgroundBlur: 0.55,
  envReflection: 1.3,
  roughnessScale: 1.0,
  metalnessScale: 1.0,
  shadowOpacity: 0.22,
  shadowY: -1.35,
  modelX: 0,
  modelY: -1,
  modelZ: -5,
};

// ── Gallery overlay state (work page wheel) ──
let galleryScene = null;
let galleryCamera = null;

// ── Shader background state (work page alternative to 3D scene) ──
let shaderBackgroundRenderer = null;

const QUALITY_CONFIG = Object.freeze({
  qualityProfile: 'balanced',
  hdriUrl: '/env.hdr',
  enableShadows: true,
});

function getQualitySettings() {
  return {
    profile: 'balanced',
    pixelRatioCap: 1.5,
    toneMappingExposure: 1.0,
    enableShadows: QUALITY_CONFIG.enableShadows,
    shadowMapSize: 512,
  };
}

function setupEnvironmentLighting(currentScene, currentRenderer, hdriUrl) {
  if (typeof process !== 'undefined' && process.env && process.env.VITEST) return;
  pmremGenerator = new THREE.PMREMGenerator(currentRenderer);
  if (pmremGenerator.compileEquirectangularShader) pmremGenerator.compileEquirectangularShader();

  import('three-stdlib')
    .then(({ RGBELoader }) => {
      const hdrLoader = new RGBELoader();
      hdrLoader.load(
        hdriUrl,
        (hdrTexture) => {
          if (!scene) {
            hdrTexture.dispose?.();
            return;
          }
          if (envRenderTarget) envRenderTarget.dispose?.();
          envRenderTarget = pmremGenerator.fromEquirectangular(hdrTexture);
          currentScene.environment = envRenderTarget.texture;
          currentScene.background = envRenderTarget.texture;
          applyEnvironmentTuning();
          hdrTexture.dispose?.();
        },
        undefined,
        () => {
          currentScene.background = null;
          currentScene.environment = null;
        }
      );
    })
    .catch(() => {
      currentScene.background = null;
      currentScene.environment = null;
    });
}

function setupShadows(currentRenderer, currentScene, settings) {
  currentRenderer.shadowMap.enabled = settings.enableShadows;
  if (!settings.enableShadows) {
    currentRenderer.shadowMap.type = THREE.BasicShadowMap;
    return;
  }
  currentRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if (keyLight) {
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0001;
    keyLight.shadow.normalBias = 0.02;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -7;
    keyLight.shadow.camera.right = 7;
    keyLight.shadow.camera.top = 7;
    keyLight.shadow.camera.bottom = -7;

    // Aim the shadow camera at the model so the ribbon casts onto the floor
    keyLight.target.position.set(tune.modelX, tune.modelY, tune.modelZ);
    currentScene.add(keyLight.target);
  }

  const catcherGeometry = new THREE.PlaneGeometry(20, 20);
  const catcherMaterial = new THREE.ShadowMaterial({ opacity: 0.22 });
  shadowCatcher = new THREE.Mesh(catcherGeometry, catcherMaterial);
  shadowCatcher.rotation.x = -Math.PI / 2;
  shadowCatcher.position.set(tune.modelX, tune.shadowY, tune.modelZ);
  shadowCatcher.receiveShadow = true;
  currentScene.add(shadowCatcher);
}

// ── Post-processing shaders ──

const VignetteShader = {
  name: 'VignetteShader',
  uniforms: {
    tDiffuse: { value: null },
    uDarkness: { value: 0.15 },
    uOffset: { value: 1.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uDarkness;
    uniform float uOffset;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * 2.0;
      float vignette = 1.0 - dot(uv, uv) * uDarkness;
      vignette = smoothstep(0.0, uOffset, clamp(vignette, 0.0, 1.0));
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `,
};

const GrainShader = {
  name: 'GrainShader',
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.015 }, // Adjust grain strength here
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    varying vec2 vUv;
    
    float random(vec2 p) {
      vec2 k1 = vec2(
        23.14069263277926, // e^pi (Gelfond's constant)
        2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
      );
      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y, uTime));
      float grain = random(uvRandom);
      
      // Overlay grain
      vec3 color = texel.rgb;
      color += (grain - 0.5) * uGrain;
      
      gl_FragColor = vec4(color, texel.a);
    }
  `,
};

const EdgeDistortionShader = {
  name: 'EdgeDistortionShader',
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
      float edge = smoothstep(0.2, 0.75, dist);

      float shift = 0.0056 * edge;
      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `,
};

function setupPostFX(currentComposer, currentScene, currentCamera) {
  const renderPass = new RenderPass(currentScene, currentCamera);
  currentComposer.addPass(renderPass);

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.075,  // strength
    0.4,   // radius
    0.85   // threshold
  );
  currentComposer.addPass(bloomPass);

  const vignettePass = new ShaderPass(VignetteShader);
  currentComposer.addPass(vignettePass);

  const grainPass = new ShaderPass(GrainShader);
  grainPass.uniforms.uGrain = postFXUniforms.uGrain;
  grainPass.uniforms.uTime = postFXUniforms.uTime;
  currentComposer.addPass(grainPass);

  const edgeDistortionPass = new ShaderPass(EdgeDistortionShader);
  currentComposer.addPass(edgeDistortionPass);

  const outputPass = new OutputPass();
  currentComposer.addPass(outputPass);
}

function applyLightTuning() {
  if (renderer) renderer.toneMappingExposure = tune.exposure;
  if (ambientLight) {
    ambientLight.intensity = tune.ambientIntensity;
    if (ambientLight.color?.set) ambientLight.color.set(tune.ambientColor);
  }
  if (keyLight) {
    keyLight.intensity = tune.keyIntensity;
    if (keyLight.color?.set) keyLight.color.set(tune.keyColor);
    keyLight.position.set(tune.keyX, tune.keyY, tune.keyZ);
  }
}

function applyEnvironmentTuning() {
  if (!scene) return;
  scene.backgroundIntensity = tune.envBackgroundIntensity;
  scene.backgroundBlurriness = tune.envBackgroundBlur;
}

function applyShadowTuning() {
  if (!shadowCatcher) return;
  if (shadowCatcher.material) shadowCatcher.material.opacity = tune.shadowOpacity;
  shadowCatcher.position.set(tune.modelX, tune.shadowY, tune.modelZ);
}

function applyMaterialTuning() {
  tunedMaterials.forEach((material) => {
    if (!material?.userData) return;
    if (material.roughness !== undefined) {
      material.roughness = THREE.MathUtils.clamp((material.userData.baseRoughness ?? material.roughness) * tune.roughnessScale, 0.03, 1);
    }
    if (material.metalness !== undefined) {
      material.metalness = THREE.MathUtils.clamp((material.userData.baseMetalness ?? material.metalness) * tune.metalnessScale, 0, 1);
    }
    material.envMapIntensity = THREE.MathUtils.clamp((material.userData.baseEnvMapIntensity ?? material.envMapIntensity ?? 1) * tune.envReflection, 0.2, 5);
    material.needsUpdate = true;
  });
}

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
    tunedMaterials.add(material);
    return material;
  };

  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map(apply);
  } else {
    mesh.material = apply(mesh.material);
  }
}

function normalizeModelBounds(model) {
  // Center the model geometry so the root can be freely repositioned
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  // Shift children so the model is centered at origin with bottom at y=0
  model.children.forEach(child => {
    child.position.x -= center.x;
    child.position.y -= box.min.y;
    child.position.z -= center.z;
  });
  return size;
}

function finalizeModel(model) {
  normalizeModelBounds(model);

  model.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    tuneMeshMaterial(child);
  });
}

// ── Clay material with iridescent fresnel edge ──

function createClayMaterial() {
  if (clayMaterial) return clayMaterial;

  clayMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xf5f5f0),
    roughness: 0.85,
    metalness: 0.0,
    envMapIntensity: 0.6,
    clearcoat: 0.05,
    clearcoatRoughness: 0.9,
  });

  // Add fresnel-based green/purple edge shift + grain via onBeforeCompile
  const iridescentSnippet = /* glsl */ `
    // Iridescent fresnel edge shift
    vec3 iriViewDir = normalize(vViewPosition);
    float iriFresnel = pow(1.0 - abs(dot(iriViewDir, normal)), 3.0);
    vec3 iriGreen = vec3(0.4, 0.8, 0.5);
    vec3 iriPurple = vec3(0.6, 0.3, 0.8);
    vec3 iriEdge = mix(iriGreen, iriPurple, iriFresnel);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, iriEdge, iriFresnel * 0.2);
  `;

  const grainSnippet = /* glsl */ `
    // Subtle grain texture
    float random(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }
    vec2 uvNoise = vUv * 10.0 + fract(uTime * 0.1);
    float grain = random(uvNoise);
    gl_FragColor.rgb += (grain - 0.5) * uGrain;
  `;

  clayMaterial.onBeforeCompile = (shader) => {
    // Add uniforms for grain animation
    shader.uniforms.uTime = postFXUniforms.uTime;
    shader.uniforms.uGrain = postFXUniforms.uGrain;

    const primary = '#include <dithering_fragment>';
    const fallback = '#include <output_fragment>';

    if (shader.fragmentShader.includes(primary)) {
      shader.fragmentShader = shader.fragmentShader.replace(
        primary,
        iridescentSnippet + '\n' + grainSnippet + '\n' + primary
      );
    } else if (shader.fragmentShader.includes(fallback)) {
      console.warn('[three.js] Clay: using output_fragment fallback for iridescent injection');
      shader.fragmentShader = shader.fragmentShader.replace(
        fallback,
        fallback + '\n' + iridescentSnippet + '\n' + grainSnippet
      );
    } else {
      console.warn('[three.js] Clay: no suitable injection point found');
    }
  };

  clayMaterial.customProgramCacheKey = () => 'clay-iridescent-grain';

  return clayMaterial;
}

function finalizeWorkModel(model) {
  const size = normalizeModelBounds(model);

  // Scale model to roughly match the home model's visual footprint (~3-4 units tall)
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) {
    const targetSize = 4;
    const s = targetSize / maxDim;
    model.scale.set(s, s, s);
  }

  const clay = createClayMaterial();

  model.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    child.material = clay;
  });
}

// ── Model loading ──

function loadModels() {
  if (modelLoadPromise) return modelLoadPromise;

  const loader = new GLTFLoader();

  const homePromise = new Promise((resolve) => {
    loader.load(
      '/home/scene.glb',
      (glb) => {
        if (!scene || !isRunning) {
          resolve();
          return;
        }
        homeModelRoot = glb.scene;
        finalizeModel(homeModelRoot);
        applyMaterialTuning();
        modelsLoaded.home = true;

        // Log mesh names once to help identify the glow volume mesh
        homeModelRoot.traverse(child => {
        });

        // Apply Fresnel fake-volume glow to the designated volume mesh
        homeModelRoot.traverse(child => {
          if (!child.isMesh) return;
          const n = child.name.toLowerCase();
          if (n.includes('volume') || n.includes('glow') || n.includes('light')) {
            homeGlowHandle = createFakeVolumeGlow(child, camera, {
              c: 1.45, p: 2.1, glowColor: '#fff3c6', op: 0.18,
            });
          }
        });

        resolve();
      },
      undefined,
      (err) => {
        console.error('[three.js] Home model load error:', err);
        resolve();
      }
    );
  });

  const workPromise = new Promise((resolve) => {
    // loader.load(
    //   '/work.gltf',
    //   (glb) => {
    //     if (!scene || !isRunning) {
    //       resolve();
    //       return;
    //     }
    //     workModelRoot = glb.scene;
    //     finalizeWorkModel(workModelRoot);
    //     modelsLoaded.work = true;
    //     resolve();
    //   },
    //   undefined,
    //   (err) => {
    //     console.error('[three.js] Work model load error:', err);
    //     resolve();
    //   }
    // );
    resolve(); // Skip work model loading
  });

  modelLoadPromise = Promise.all([homePromise, workPromise]);
  return modelLoadPromise;
}

/**
 * Swap the active 3D model in the scene.
 * @param {'home'|'work'} page - which model to show
 */
export async function swapModel(page) {
  if (!scene) return;
  if (modelLoadPromise) await modelLoadPromise;
  if (!scene || !isRunning) return;
  const targetModel = (page === 'work') ? workModelRoot : homeModelRoot;
  if (!targetModel || activeModel === targetModel) return;

  if (activeModel && activeModel.parent) {
    scene.remove(activeModel);
  }
  targetModel.position.set(tune.modelX, tune.modelY, tune.modelZ);
  scene.add(targetModel);
  activeModel = targetModel;
  currentModelPage = page;

  // Match fog to the active model's aesthetic
  if (scene) {
    if (page === 'work') {
      scene.fog = new THREE.FogExp2(0xf0ece4, 0.035);
    } else {
      scene.fog = new THREE.FogExp2(0x0a0a0f, 0.045);
    }
  }
}

// ── Gallery overlay (used by work.js wheel) ──

/**
 * Register the work page gallery scene + camera so the shared renderer
 * can composite the wheel on top of the 3D scene each frame.
 */
export function registerGalleryOverlay(gScene, gCamera) {
  galleryScene = gScene;
  galleryCamera = gCamera;
}

export function unregisterGalleryOverlay() {
  galleryScene = null;
  galleryCamera = null;
}

// ── Shader background (work page alternative to 3D scene) ──

/**
 * Register a shader background renderer function that replaces the 3D scene.
 * Used by work page to render a pure shader background instead of the GLB model.
 */
export function registerShaderBackground(renderFn) {
  shaderBackgroundRenderer = renderFn;
}

export function unregisterShaderBackground() {
  shaderBackgroundRenderer = null;
}

/**
 * Capture the current rendered frame as an HTMLCanvasElement.
 * Used by transition.js to snapshot the WebGL canvas for the ink dissolve.
 * Requires `preserveDrawingBuffer: true` on the renderer.
 */
export function captureCurrentFrame() {
  if (!renderer) return null;
  const source = renderer.domElement;
  const canvas = document.createElement('canvas');
  canvas.width = source.width;
  canvas.height = source.height;
  canvas.getContext('2d').drawImage(source, 0, 0);
  return canvas;
}

export function closeMenuIfOpen() {
  const btn = document.querySelector('.menu-toggle-btn');
  if (btn && btn.classList.contains('menu-open')) btn.click();
}

// ── Fresnel fake-volume glow ──

/**
 * Apply a Fresnel fake-volume glow shader to an existing mesh via onBeforeCompile.
 * The mesh should be a volume/inner-glow mesh in the GLB (e.g. named "fake_volume001").
 * Returns a handle with an update(camera) method for API compatibility.
 *
 * @param {THREE.Mesh} mesh - the mesh to apply the glow to
 * @param {THREE.Camera} cam - unused, kept for backwards-compatible call sites
 * @param {Object} opts - { c, p, glowColor, op }
 * @returns {{ update: (cam: THREE.Camera) => void }}
 */
export function createFakeVolumeGlow(mesh, _cam, opts = {}) {
  const { c = 1.45, p = 2.1, glowColor = '#fff3c6', op = 0.18 } = opts;

  const mat = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
  });

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.c = { value: c };
    shader.uniforms.p = { value: p };
    shader.uniforms.glowColor = { value: new THREE.Color(glowColor) };
    shader.uniforms.op = { value: op };

    shader.vertexShader = /* glsl */ `
      uniform float c;
      uniform float p;
      varying float vIntensity;
      void main() {
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDir = normalize(-(modelViewMatrix * vec4(position, 1.0)).xyz);
        float fresnel = pow(max(0.0, 1.0 - dot(viewNormal, viewDir)), p);
        vIntensity = min(1.5, fresnel * c);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    shader.fragmentShader = /* glsl */ `
      uniform vec3  glowColor;
      uniform float op;
      varying float vIntensity;
      void main() {
        float alpha = smoothstep(0.0, 1.0, vIntensity) * op;
        vec3 glow = glowColor * vIntensity;
        gl_FragColor = vec4(glow, alpha);
      }
    `;

    mat.userData.shader = shader;
  };

  mat.customProgramCacheKey = () => `fake-volume-${glowColor}-${c}-${p}`;
  mesh.material = mat;
  mesh.renderOrder = 10;
  mesh.needsUpdate = true;

  return {
    update(_camera) {},
    setOpacity(val) {
      const s = mat.userData.shader;
      if (s) s.uniforms.op.value = val;
    },
  };
}

let homeGlowHandle = null;

// ── Floating particles ──

const PARTICLE_COUNT = 200;
const PARTICLE_BOUNDS = { xHalf: 6, yMin: -2, yMax: 4, zMin: -10, zMax: 2 };

function createParticles(targetScene) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const sizes = new Float32Array(PARTICLE_COUNT);
  const opacities = new Float32Array(PARTICLE_COUNT);
  const { xHalf, yMin, yMax, zMin, zMax } = PARTICLE_BOUNDS;

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
    blending: THREE.AdditiveBlending,
    uniforms: {
      uPixelRatio: { value: dpr },
    },
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
        float alpha = smoothstep(1.0, 0.3, d) * vOpacity;
        gl_FragColor = vec4(vec3(1.0), alpha);
      }
    `,
  });

  particleSystem = new THREE.Points(geo, mat);
  particleSystem.frustumCulled = false;
  targetScene.add(particleSystem);
}

function animateParticles(time) {
  if (!particleSystem) return;
  const positions = particleSystem.geometry.attributes.position.array;
  const { xHalf, yMin, yMax, zMin, zMax } = PARTICLE_BOUNDS;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    // gentle upward drift
    positions[i3 + 1] += 0.001;
    // subtle sine sway
    positions[i3]     += Math.sin(time * 0.3 + i * 0.5) * 0.0004;
    positions[i3 + 2] += Math.cos(time * 0.25 + i * 0.7) * 0.0003;

    // wrap when above ceiling
    if (positions[i3 + 1] > yMax) {
      positions[i3 + 1] = yMin;
      positions[i3]     = (Math.random() - 0.5) * 2 * xHalf;
      positions[i3 + 2] = zMin + Math.random() * (zMax - zMin);
    }
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
}

// ── Main webgl init/destroy ──

export function webgl() {
  if (isRunning) {
    return { scene, camera, renderer };
  }
  isRunning = true;
  const quality = getQualitySettings();

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0f, 0.045);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const needsAA = (window.devicePixelRatio || 1) < 1.5;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.pixelRatioCap));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = quality.toneMappingExposure;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  containerEl = document.querySelector('#background');
  if (!containerEl) {
    console.warn('[three.js] #background element not found, creating one');
    containerEl = document.createElement('div');
    containerEl.id = 'background';
    const firstChild = document.body.firstChild;
    document.body.insertBefore(containerEl, firstChild);
  }
  containerEl.appendChild(renderer.domElement);

  ambientLight = new THREE.AmbientLight(0xffffff, 0.18);
  scene.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xffffff, 3.25);
  keyLight.position.set(4.2, 7.5, 6.2);
  scene.add(keyLight);
  applyLightTuning();
  setupEnvironmentLighting(scene, renderer, QUALITY_CONFIG.hdriUrl);
  setupShadows(renderer, scene, quality);
  applyShadowTuning();
  createParticles(scene);

  // Load both models in parallel
  const page = sessionStorage.getItem('webgl-page') || 'home';
  loadModels().then(() => {
    if (!scene || !isRunning) return;
    // Add the appropriate model for the current page
    const modelPage = (page === 'work') ? 'work' : 'home';
    swapModel(modelPage);

    // Set initial camera offset
    const offset = getCameraOffset(page);
    cameraOrbitOffset.x = offset.x;
    cameraOrbitOffset.y = offset.y;
    cameraOrbitOffset.z = offset.z;
  });

  let resizeTimeout = null;
  resizeHandler = () => {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!camera || !renderer || !composer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
      if (bloomPass) bloomPass.setSize(width, height);
      postFXUniforms.uResolution.value.set(width, height);
    }, 100);
  };
  window.addEventListener('resize', resizeHandler);

  try {
    composer = new EffectComposer(renderer);
  } catch {
    composer = {
      addPass: () => { },
      insertPass: () => { },
      setSize: () => { },
      dispose: () => { },
      render: () => renderer?.render(scene, camera),
    };
  }
  setupPostFX(composer, scene, camera);

  // Orbital camera setup — orbit around model center
  cameraTarget.angle = Math.PI / 2;
  cameraTarget.y = 0;
  cameraTarget.tilt = 0;
  cameraCurrent.angle = Math.PI / 2;
  cameraCurrent.y = 0;
  cameraCurrent.tilt = 0;

  let lastMouseTime = 0;

  mouseHandler = (event) => {
    const now = performance.now();
    if (now - lastMouseTime < 16) return;
    lastMouseTime = now;

    const mx = (event.clientX / window.innerWidth) * 2 - 1;
    const my = -(event.clientY / window.innerHeight) * 2 + 1;
    cameraTarget.angle = Math.PI / 2 + mx * parallaxConfig.angleRange;
    cameraTarget.y = -my * parallaxConfig.yRange;
    cameraTarget.tilt = mx * parallaxConfig.tiltRange;
  };
  window.addEventListener('mousemove', mouseHandler, { passive: true });

  let lastFrameTime = performance.now();

  const render = () => {
    if (!isRunning || !camera || !composer) return;
    const now = performance.now();
    const frameDelta = now - lastFrameTime;
    lastFrameTime = now;

    const lerpFactor = parallaxConfig.lerp;
    cameraCurrent.angle += (cameraTarget.angle - cameraCurrent.angle) * lerpFactor;
    cameraCurrent.y += (cameraTarget.y - cameraCurrent.y) * lerpFactor;
    cameraCurrent.tilt += (cameraTarget.tilt - cameraCurrent.tilt) * lerpFactor;

    // Orbit center = model position + page offset (camera moves, model stays)
    const modelPos = activeModel ? activeModel.position : { x: tune.modelX, y: tune.modelY, z: tune.modelZ };
    const cx = modelPos.x + cameraOrbitOffset.x;
    const cy = modelPos.y + cameraOrbitOffset.y;
    const cz = modelPos.z + cameraOrbitOffset.z;
    const radius = parallaxConfig.orbitRadius;

    camera.position.x = cx + Math.cos(cameraCurrent.angle) * radius;
    camera.position.z = cz + Math.sin(cameraCurrent.angle) * radius;
    camera.position.y = cy + cameraCurrent.y + 1;

    // Handheld camera drift
    const driftTime = now * 0.001;
    camera.position.x += Math.sin(driftTime * 0.7) * 0.012 + Math.sin(driftTime * 1.3) * 0.008;
    camera.position.y += Math.sin(driftTime * 0.5) * 0.012 + Math.cos(driftTime * 1.1) * 0.008;
    camera.position.z += Math.cos(driftTime * 0.6) * 0.008;

    camera.lookAt(cx, cy, cz);
    camera.rotation.z += cameraCurrent.tilt;

    // Keep uTime ticking for grain + edge distortion
    postFXUniforms.uTime.value = driftTime;

    // Drift particles
    animateParticles(driftTime);

    // Keep fake-volume glow hook in sync (no-op in current implementation)
    if (homeGlowHandle) homeGlowHandle.update(camera);

    // 1. Render background: either 3D scene (via composer) or shader background
    if (shaderBackgroundRenderer) {
      // Work page: render shader background instead of 3D scene
      shaderBackgroundRenderer(renderer);
    } else {
      // Other pages: render 3D scene via composer (post-processing)
      composer.render();
    }

    // 2. Render gallery overlay (work page wheel) if registered
    if (galleryScene && galleryCamera) {
      const prevAutoClear = renderer.autoClear;
      renderer.autoClear = false;
      renderer.clearDepth();
      
      // Use composer if available (work page with post-processing)
      const workComposer = galleryScene.userData?.composer;
      if (workComposer) {
        workComposer.render();
      } else {
        renderer.render(galleryScene, galleryCamera);
      }
      
      renderer.autoClear = prevAutoClear;
    }

    rafId = requestAnimationFrame(render);
  };

  render();

  return { scene, camera, renderer };
}

export function destroyWebgl() {
  if (!isRunning) return;
  isRunning = false;

  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
    resizeHandler = null;
  }
  if (mouseHandler) {
    window.removeEventListener('mousemove', mouseHandler);
    mouseHandler = null;
  }

  if (sceneTween) {
    sceneTween.kill();
    sceneTween = null;
  }

  // ── Post-FX cleanup ──
  postFXUniforms.uTime.value = 0;
  bloomPass = null;

  // Particles
  if (particleSystem) {
    if (particleSystem.geometry) particleSystem.geometry.dispose();
    if (particleSystem.material) particleSystem.material.dispose();
    if (particleSystem.parent) particleSystem.parent.remove(particleSystem);
    particleSystem = null;
  }

  // Fresnel glow handle
  homeGlowHandle = null;

  // Unregister gallery overlay
  galleryScene = null;
  galleryCamera = null;

  if (shadowCatcher) {
    if (shadowCatcher.geometry) shadowCatcher.geometry.dispose();
    if (shadowCatcher.material) shadowCatcher.material.dispose();
    shadowCatcher = null;
  }
  if (envRenderTarget) {
    envRenderTarget.dispose();
    envRenderTarget = null;
  }
  if (pmremGenerator) {
    pmremGenerator.dispose();
    pmremGenerator = null;
  }
  tunedMaterials.forEach(mat => {
    if (mat && typeof mat.dispose === 'function') mat.dispose();
  });
  tunedMaterials.clear();

  // Dispose both models
  const disposeModel = (model) => {
    if (!model) return;
    model.traverse(child => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        for (const mat of mats) {
          if (!mat) continue;
          // Don't double-dispose clay material (shared)
          if (mat === clayMaterial) continue;
          for (const key of Object.keys(mat)) {
            const val = mat[key];
            if (val && typeof val.dispose === 'function') val.dispose();
          }
          mat.dispose();
        }
      }
    });
    scene?.remove(model);
  };

  disposeModel(homeModelRoot);
  disposeModel(workModelRoot);
  homeModelRoot = null;
  workModelRoot = null;
  activeModel = null;
  modelLoadPromise = null;
  modelsLoaded.home = false;
  modelsLoaded.work = false;

  if (clayMaterial) {
    clayMaterial.dispose();
    clayMaterial = null;
  }

  if (composer) {
    composer.dispose();
    composer = null;
  }
  if (renderer) {
    renderer.dispose();
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
    renderer = null;
  }
  scene = null;
  camera = null;
  keyLight = null;
  ambientLight = null;
  containerEl = null;
}

export function isWebglRunning() {
  return isRunning;
}

/**
 * Get the shared renderer so work.js can avoid creating its own.
 */
export function getRenderer() {
  return renderer;
}

function getCameraOffset(page) {
  if (page === 'contact') return { x: -2, y: 0, z: 0 };
  if (page === 'work') return { x: 0, y: 0, z: 0 }; // Same as home
  return { x: 0, y: 0, z: 0 };
}

/**
 * Animate (or immediately set) the camera orbit center for the given page.
 * @param {'home'|'contact'|'work'} page
 * @param {boolean} immediate — if true, skip the tween
 */
export function setScenePage(page, immediate = false) {
  const target = getCameraOffset(page);
  sessionStorage.setItem('webgl-page', page);

  if (sceneTween) {
    sceneTween.kill();
    sceneTween = null;
  }

  if (immediate) {
    cameraOrbitOffset.x = target.x;
    cameraOrbitOffset.y = target.y;
    cameraOrbitOffset.z = target.z;
  } else {
    sceneTween = gsap.to(cameraOrbitOffset, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.8,
      ease: 'power3.inOut',
    });
  }
}

// ── Scene text API (stubs — Troika removed) ─────────────────────

export async function mountSceneText() {}
export async function unmountSceneText() {}

export default webgl;
