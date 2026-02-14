import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Text, preloadFont } from 'troika-three-text';

gsap.registerPlugin(ScrollTrigger);

const fontsReady = Promise.all([
  new Promise(r => preloadFont({ font: '/OTJubilee-Golden.otf' }, r)),
  new Promise(r => preloadFont({ font: '/PPNeueMontreal-Medium.otf' }, r)),
]);


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
const tunedMaterials = new Set();

// ── Dual model state ──
let homeModelRoot = null;
let workModelRoot = null;
let activeModel = null;
let currentModelPage = 'home'; // 'home' | 'work'
let clayMaterial = null;
let modelsLoaded = { home: false, work: false };
let modelLoadPromise = null;

// ── Intro reveal state ──
let introTimeline = null;
let introProgress = { value: 0 };
const introUniforms = {
  uReveal: { value: 0 },
  uTime: { value: 0 },
  uAberration: { value: 0 },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uGrain: { value: 0.015 },
};
let chromaticPass = null;
let vignettePass = null;
let bloomPass = null;
let introRadiusOffset = 0;
let introStartTime = 0;
let introPlayed = false;
let textRevealTween = null;

// ── Text overlay state ──
let overlayScene = null;
let overlayCamera = null;
let overlayRT = null;
let revealQuad = null;
let revealQuadScene = null;
let revealQuadCamera = null;
let textEntries = []; // { mesh, sourceEl, key }
const cameraTarget = { angle: Math.PI / 2, y: 0, tilt: 0 };
const cameraCurrent = { angle: Math.PI / 2, y: 0, tilt: 0 };
const cameraOrbitOffset = { x: 0, y: 0, z: 0 };
const parallaxConfig = { angleRange: 0.15, yRange: 0.3, tiltRange: 0.035, lerp: 0.02, orbitRadius: 5 };
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
    keyLight.shadow.mapSize.set(settings.shadowMapSize, settings.shadowMapSize);
    keyLight.shadow.bias = -0.0001;
    keyLight.shadow.normalBias = 0.02;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -7;
    keyLight.shadow.camera.right = 7;
    keyLight.shadow.camera.top = 7;
    keyLight.shadow.camera.bottom = -7;
  }

  const catcherGeometry = new THREE.PlaneGeometry(20, 20);
  const catcherMaterial = new THREE.ShadowMaterial({ opacity: 0.22 });
  shadowCatcher = new THREE.Mesh(catcherGeometry, catcherMaterial);
  shadowCatcher.rotation.x = -Math.PI / 2;
  shadowCatcher.position.y = -1.35;
  shadowCatcher.receiveShadow = true;
  currentScene.add(shadowCatcher);
}

// ── Intro post-processing shaders ──

const ChromaticAberrationShader = {
  name: 'ChromaticAberrationShader',
  uniforms: {
    tDiffuse: { value: null },
    uAberration: { value: 0 },
    uIntensity: { value: 0.0025 },
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
    uniform float uAberration;
    uniform float uIntensity;
    varying vec2 vUv;
    void main() {
      vec2 dir = vUv - 0.5;
      float dist = length(dir);
      vec2 offset = dir * dist * uAberration * uIntensity;
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      float a = texture2D(tDiffuse, vUv).a;
      gl_FragColor = vec4(r, g, b, a);
    }
  `,
};

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

function setupPostFX(currentComposer, currentScene, currentCamera) {
  const renderPass = new RenderPass(currentScene, currentCamera);
  currentComposer.addPass(renderPass);

  chromaticPass = new ShaderPass(ChromaticAberrationShader);
  chromaticPass.uniforms.uAberration = introUniforms.uAberration;
  currentComposer.addPass(chromaticPass);

  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.075,  // strength
    0.4,   // radius
    0.85   // threshold
  );
  currentComposer.addPass(bloomPass);

  vignettePass = new ShaderPass(VignetteShader);
  currentComposer.addPass(vignettePass);

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
  shadowCatcher.position.y = tune.shadowY;
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
    shader.uniforms.uTime = introUniforms.uTime;
    shader.uniforms.uGrain = introUniforms.uGrain;

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
}

// ── Text overlay helpers ──────────────────────────────────────────

function resolveFontPath(fontFamily) {
  const families = (fontFamily || '').split(',')
    .map(s => s.trim().replace(/^['"]|['"]$/g, '').toLowerCase());
  for (const f of families) {
    if (f.includes('otjubilee')) return '/OTJubilee-Golden.otf';
    if (f.includes('neuemontreal') || f.includes('ppneuemontreal')) return '/PPNeueMontreal-Medium.otf';
    if (f.includes('geist')) return '/GeistMono.woff2';
  }
  return '/OTJubilee-Golden.otf';
}

function applyTextTransform(text, transform) {
  if (transform === 'uppercase') return text.toUpperCase();
  if (transform === 'lowercase') return text.toLowerCase();
  return text;
}

function initOverlay() {
  if (overlayScene) return;
  overlayScene = new THREE.Scene();
  overlayCamera = new THREE.OrthographicCamera(
    -window.innerWidth / 2, window.innerWidth / 2,
    window.innerHeight / 2, -window.innerHeight / 2,
    -1000, 1000
  );
  overlayCamera.position.z = 500;

  // Render target for text overlay (rendered first, then composited with reveal shader)
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  overlayRT = new THREE.WebGLRenderTarget(
    window.innerWidth * dpr, window.innerHeight * dpr,
    { format: THREE.RGBAFormat }
  );

  // Fullscreen quad with reveal composite shader
  const revealMat = new THREE.ShaderMaterial({
    transparent: true,
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tText: { value: overlayRT.texture },
      uReveal: introUniforms.uReveal,
      uTime: introUniforms.uTime,
      uResolution: introUniforms.uResolution,
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D tText;
      uniform float uReveal;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float introRipple(vec2 p, float t) {
        float v = 0.0;
        v += sin(p.y * 6.0 + t * 1.2) * 0.12;
        v += sin(p.y * 14.0 - t * 0.8) * 0.06;
        v += sin(p.y * 22.0 + t * 1.8 + p.x * 3.0) * 0.03;
        return v;
      }

      void main() {
        vec4 texel = texture2D(tText, vUv);
        float nOff = introRipple(vUv, uTime);
        float wipePos = vUv.x + nOff;
        float rMask = smoothstep(uReveal * 1.3 - 0.2, uReveal * 1.3 + 0.2, wipePos);
        texel.a *= (1.0 - rMask);
        if (texel.a < 0.001) discard;
        gl_FragColor = texel;
      }
    `,
  });
  revealQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), revealMat);
  revealQuad.frustumCulled = false;
  revealQuadScene = new THREE.Scene();
  revealQuadScene.add(revealQuad);
  revealQuadCamera = new THREE.Camera(); // identity — NDC passthrough
}

function destroyOverlay() {
  if (textRevealTween) {
    textRevealTween.kill();
    textRevealTween = null;
  }
  clearTextMeshes();
  if (overlayRT) {
    overlayRT.dispose();
    overlayRT = null;
  }
  if (revealQuad) {
    revealQuad.geometry.dispose();
    revealQuad.material.dispose();
    revealQuad = null;
  }
  revealQuadScene = null;
  revealQuadCamera = null;
  overlayScene = null;
  overlayCamera = null;
}

function createTextEntry(sourceEl, opts = {}) {
  const style = window.getComputedStyle(sourceEl);
  const rect = sourceEl.getBoundingClientRect();
  const rawText = sourceEl.textContent?.trim() || '';
  const text = applyTextTransform(rawText, style.textTransform);
  if (!text) return null;

  const fontSizePx = parseFloat(style.fontSize) || 16;
  const letterSpacingPx = parseFloat(style.letterSpacing);
  const lineHeightPx = parseFloat(style.lineHeight);

  // Content width = element width minus padding (getBoundingClientRect includes padding)
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;
  const contentWidth = rect.width - paddingLeft - paddingRight;

  const mesh = new Text();
  mesh.text = text;
  mesh.font = resolveFontPath(style.fontFamily);
  mesh.fontSize = fontSizePx;
  const textAlign = style.textAlign || 'center';
  mesh.textAlign = textAlign;
  mesh.anchorX = textAlign === 'start' ? 'left' : textAlign === 'end' ? 'right' : textAlign;
  mesh.anchorY = 'middle';
  mesh.letterSpacing = Number.isFinite(letterSpacingPx) ? letterSpacingPx / fontSizePx : 0;
  mesh.lineHeight = Number.isFinite(lineHeightPx) ? lineHeightPx / fontSizePx : 'normal';

  // Mirror CSS white-space / text-wrap to control Troika wrapping
  const ws = style.whiteSpace;
  const tw = style.textWrap;

  const parentStyle = sourceEl.parentElement ? window.getComputedStyle(sourceEl.parentElement) : null;
  const inHorizontalFlex = parentStyle
    && (parentStyle.display === 'flex' || parentStyle.display === 'inline-flex')
    && (parentStyle.flexDirection === 'row' || parentStyle.flexDirection === '' || parentStyle.flexDirection === 'row-reverse');

  // Only force nowrap if in horizontal flex, not for all flex items
  const shouldNowrap = ws === 'nowrap' || ws === 'pre' || tw === 'nowrap';

  if (shouldNowrap) {
    mesh.whiteSpace = 'nowrap';
  } else {
    mesh.maxWidth = contentWidth > 0 ? contentWidth : fontSizePx * 10;
  }
  mesh.color = new THREE.Color().setStyle(style.color || '#e2e2e2').getHex();
  mesh.material.transparent = true;
  mesh.material.depthWrite = false;
  mesh.material.depthTest = false;
  mesh.material.toneMapped = false;
  mesh.frustumCulled = false;
  mesh.renderOrder = 20;

  let x = 0;
  if (textAlign === 'left' || textAlign === 'start') {
    x = rect.left - window.innerWidth * 0.5;
  } else if (textAlign === 'right' || textAlign === 'end') {
    x = rect.right - window.innerWidth * 0.5;
  } else {
    x = rect.left + rect.width * 0.5 - window.innerWidth * 0.5;
  }

  const y = window.innerHeight * 0.5 - (rect.top + rect.height * 0.5);
  mesh.position.set(x, y, 190);
  mesh.sync(() => {
    console.log('[troika] text synced:', mesh.text.slice(0, 30), mesh.textRenderInfo ? 'OK' : 'EMPTY');
    if (sourceEl) sourceEl.classList.add('troika-hidden');
  });
  overlayScene.add(mesh);

  return { mesh, sourceEl, key: opts.key || '', baseY: y };
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

// ── Main webgl init/destroy ──

export function webgl() {
  console.log('[three.js] webgl() called, isRunning:', isRunning);
  if (isRunning) {
    console.log('[three.js] already running, returning existing scene');
    return { scene, camera, renderer };
  }
  isRunning = true;
  console.log('[three.js] initializing WebGL scene');
  const quality = getQualitySettings();

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const needsAA = (window.devicePixelRatio || 1) < 1.5;
  renderer = new THREE.WebGLRenderer({ antialias: needsAA, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.pixelRatioCap));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = quality.toneMappingExposure;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  containerEl = document.querySelector('#background');
  console.log('[three.js] background container found:', !!containerEl);
  if (!containerEl) {
    console.warn('[three.js] #background element not found, creating one');
    containerEl = document.createElement('div');
    containerEl.id = 'background';
    const firstChild = document.body.firstChild;
    document.body.insertBefore(containerEl, firstChild);
  }
  containerEl.appendChild(renderer.domElement);
  console.log('[three.js] canvas appended to container');

  ambientLight = new THREE.AmbientLight(0xffffff, 0.18);
  scene.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xffffff, 3.25);
  keyLight.position.set(4.2, 7.5, 6.2);
  scene.add(keyLight);
  applyLightTuning();
  setupEnvironmentLighting(scene, renderer, QUALITY_CONFIG.hdriUrl);
  setupShadows(renderer, scene, quality);
  applyShadowTuning();

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
      introUniforms.uResolution.value.set(width, height);
      if (overlayCamera) {
        overlayCamera.left = -width / 2;
        overlayCamera.right = width / 2;
        overlayCamera.top = height / 2;
        overlayCamera.bottom = -height / 2;
        overlayCamera.updateProjectionMatrix();
      }
      repositionTextMeshes();
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
    const radius = parallaxConfig.orbitRadius + introRadiusOffset;

    camera.position.x = cx + Math.cos(cameraCurrent.angle) * radius;
    camera.position.z = cz + Math.sin(cameraCurrent.angle) * radius;
    camera.position.y = cy + cameraCurrent.y + 1;

    // Handheld camera drift
    const driftTime = now * 0.001;
    camera.position.x += Math.sin(driftTime * 0.7) * 0.012 + Math.sin(driftTime * 1.3) * 0.008;
    camera.position.y += Math.sin(driftTime * 0.5) * 0.012 + Math.cos(driftTime * 1.1) * 0.008;
    camera.position.z += Math.cos(driftTime * 0.6) * 0.008;

    // Extra vertical drift during intro push-in
    if (introRadiusOffset > 0.01) {
      camera.position.y += Math.sin(driftTime * 0.3) * 0.05 * (introRadiusOffset / 2);
    }

    camera.lookAt(cx, cy, cz);
    camera.rotation.z += cameraCurrent.tilt;

    // Keep intro uTime ticking for vertex wave
    if (introStartTime > 0) {
      introUniforms.uTime.value = (now - introStartTime) * 0.001;
    }

    // Animate text wave displacement during reveal
    if (textEntries.length > 0 && introUniforms.uReveal.value < 1) {
      const t = introUniforms.uTime.value;
      const wave = 1 - introUniforms.uReveal.value;
      textEntries.forEach(({ mesh, baseY }) => {
        if (baseY !== undefined) {
          mesh.position.y = baseY + Math.sin(mesh.position.x * 0.03 + t * 1.8) * 4.5 * wave;
        }
      });
    } else if (textEntries.length > 0) {
      textEntries.forEach(({ mesh, baseY }) => {
        if (baseY !== undefined) mesh.position.y = baseY;
      });
    }

    // 1. Render 3D scene via composer (post-processing)
    composer.render();

    // 2. Render gallery overlay (work page wheel) if registered
    if (galleryScene && galleryCamera) {
      const prevAutoClear = renderer.autoClear;
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(galleryScene, galleryCamera);
      renderer.autoClear = prevAutoClear;
    }

    // 3. Render text overlay: text → render target, then composite with reveal shader
    if (overlayScene && overlayCamera && overlayRT && revealQuadScene && textEntries.length > 0) {
      renderer.setRenderTarget(overlayRT);
      renderer.setClearColor(0x000000, 0);
      renderer.clear(true, true, false);
      renderer.render(overlayScene, overlayCamera);

      renderer.setRenderTarget(null);
      const prevAutoClear = renderer.autoClear;
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(revealQuadScene, revealQuadCamera);
      renderer.autoClear = prevAutoClear;
    }

    rafId = requestAnimationFrame(render);
  };

  // Set initial intro camera offset
  if (!introPlayed) {
    introRadiusOffset = 2;
  }

  render();

  // Start cinematic intro on first load
  if (!introPlayed) {
    startIntroReveal();
  }

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

  // ── Intro reveal cleanup ──
  if (introTimeline) {
    introTimeline.kill();
    introTimeline = null;
  }
  introProgress.value = 0;
  introRadiusOffset = 0;
  introUniforms.uReveal.value = 0;
  introUniforms.uTime.value = 0;
  introUniforms.uAberration.value = 0;
  introStartTime = 0;
  if (textRevealTween) {
    textRevealTween.kill();
    textRevealTween = null;
  }
  chromaticPass = null;
  vignettePass = null;
  bloomPass = null;

  destroyOverlay();

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

// ── Intro reveal ─────────────────────────────────────────────────

function startIntroReveal() {
  if (introPlayed) return;
  introPlayed = true;
  introStartTime = performance.now();
  introProgress.value = 0;
  introRadiusOffset = 2;

  introTimeline = gsap.timeline({
    onUpdate: () => {
      const p = introProgress.value;

      introRadiusOffset = 2 * (1 - p);
      introUniforms.uReveal.value = THREE.MathUtils.smoothstep(p, 0.1, 0.7);

      const abPeak = Math.exp(-Math.pow((p - 0.45) / 0.18, 2)) * 1.2;
      const abSettle = p > 0.6 ? 0.15 : 0;
      introUniforms.uAberration.value = Math.max(abPeak, abSettle);

      if (chromaticPass) {
        chromaticPass.uniforms.uAberration.value = introUniforms.uAberration.value;
      }
    },
    onComplete: () => {
      introUniforms.uReveal.value = 1;
      introRadiusOffset = 0;

      gsap.to(introUniforms.uAberration, {
        value: 0,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          if (chromaticPass) {
            chromaticPass.uniforms.uAberration.value = introUniforms.uAberration.value;
          }
        },
      });
    },
  });

  introTimeline.to(introProgress, {
    value: 1,
    duration: 3.6,
    ease: 'power3.out',
  }, 0);
}

// ── Text reveal helpers ──────────────────────────────────────────

function playTextReveal() {
  if (textRevealTween) {
    textRevealTween.kill();
    textRevealTween = null;
  }
  if (introTimeline && introTimeline.isActive()) return;

  introUniforms.uReveal.value = 0;
  if (!introStartTime) introStartTime = performance.now();

  textRevealTween = gsap.to(introUniforms.uReveal, {
    value: 1,
    duration: 2.0,
    ease: 'power2.out',
  });
}

function animateTextOut() {
  if (textRevealTween) {
    textRevealTween.kill();
    textRevealTween = null;
  }
  if (textEntries.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    textRevealTween = gsap.to(introUniforms.uReveal, {
      value: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: resolve,
    });
  });
}

// ── Scene text API ────────────────────────────────────────────────

export async function mountSceneText(namespace) {
  await fontsReady;
  await document.fonts.ready;
  if (!isRunning) return;
  if (!overlayScene) initOverlay();
  clearTextMeshes();

  introUniforms.uReveal.value = 0;

  const selectors =
    namespace === 'home'
      ? [
        { sel: '.hero-logo-top h1', opts: { stagger: 0.012, direction: 1, key: 'home-logo' } },
        { sel: '.hero-text-reveal', opts: { stagger: 0.008, direction: 1, key: 'home-text' }, all: true },
      ]
      : namespace === 'contact'
        ? [
          { sel: '.contact-header', opts: { stagger: 0.02, direction: -1, key: 'contact-header' } },
          { sel: '.text-reveal-header:not(.contact-header)', opts: { stagger: 0.01, direction: -1, key: 'contact-text' }, all: true },
        ]
        : [];

  selectors.forEach(({ sel, opts, all }) => {
    const els = all ? document.querySelectorAll(sel) : [document.querySelector(sel)];
    els.forEach((el, i) => {
      if (!el) return;
      const entry = createTextEntry(el, { ...opts, key: `${opts.key}-${i}` });
      if (entry) textEntries.push(entry);
    });
  });

  playTextReveal();
}

export async function unmountSceneText() {
  await animateTextOut();
  clearTextMeshes();
}

function clearTextMeshes() {
  textEntries.forEach(({ mesh, sourceEl }) => {
    if (mesh.parent) mesh.parent.remove(mesh);
    if (mesh.material && typeof mesh.material.dispose === 'function') mesh.material.dispose();
    if (typeof mesh.dispose === 'function') mesh.dispose();
    if (sourceEl) sourceEl.classList.remove('troika-hidden');
  });
  textEntries = [];
}

function repositionTextMeshes() {
  if (overlayRT) {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    overlayRT.setSize(window.innerWidth * dpr, window.innerHeight * dpr);
  }

  textEntries.forEach((entry) => {
    const { mesh, sourceEl } = entry;
    if (!sourceEl || !mesh) return;
    const style = window.getComputedStyle(sourceEl);
    const rect = sourceEl.getBoundingClientRect();
    const textAlign = style.textAlign || 'center';
    const fontSizePx = parseFloat(style.fontSize) || 16;

    let x = 0;
    if (textAlign === 'left' || textAlign === 'start') {
      x = rect.left - window.innerWidth * 0.5;
    } else if (textAlign === 'right' || textAlign === 'end') {
      x = rect.right - window.innerWidth * 0.5;
    } else {
      x = rect.left + rect.width * 0.5 - window.innerWidth * 0.5;
    }
    const y = window.innerHeight * 0.5 - (rect.top + rect.height * 0.5);
    mesh.position.set(x, y, 190);
    entry.baseY = y;

    if (mesh.whiteSpace !== 'nowrap') {
      const padL = parseFloat(style.paddingLeft) || 0;
      const padR = parseFloat(style.paddingRight) || 0;
      mesh.maxWidth = Math.max(rect.width - padL - padR, fontSizePx);
    }
    mesh.fontSize = fontSizePx;
    mesh.sync();
  });
}

export default webgl;
