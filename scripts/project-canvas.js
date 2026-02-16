import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// Module-level state
let renderer, scene, camera, composer;
let simMaterial, simScene, simQuad;
let backgroundMesh; // New background for fluid
let rtA, rtB; // Ping-pong buffers for wave simulation
let mouse = new THREE.Vector2(-1000, -1000);
let lastMouseTime = 0;
let imagePlanes = [];
let rafId = null;
let container;
let imageTextureCache = new Map();
let isRunning = false;
let frame = 0;

const postFXUniforms = {
  uTime: { value: 0 },
  uGrain: { value: 0.03 },
};

// Configuration
const CONFIG = {
  distortionStrength: 0.3, // Ripple distortion intensity
  fluidResolutionScale: 0.5, // Performance: use half-res for fluid buffer
  waveDamping: 0.98, // Wave decay rate
  impulseStrength: 0.05, // Mouse ripple strength
  mouseIdleThreshold: 100, // ms before freezing animation
};

// Post-processing shaders (copied from three.js)
const GrainShader = {
  name: 'GrainShader',
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.015 },
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
        23.14069263277926,
        2.665144142690225
      );
      return fract(cos(dot(p, k1)) * 12345.6789);
    }

    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uvRandom = vUv;
      uvRandom.y *= random(vec2(uvRandom.y, uTime));
      float grain = random(uvRandom);
      
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
      
      // Use the alpha from the original pixel (green channel sample)
      // to keep transparency for the background
      gl_FragColor = vec4(r.r, g.g, b.b, g.a);
    }
  `,
};

// Named event handlers for cleanup
function onResizeHandler() {
  if (!renderer || !isRunning) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  const fluidW = Math.floor(w * CONFIG.fluidResolutionScale);
  const fluidH = Math.floor(h * CONFIG.fluidResolutionScale);

  renderer.setSize(w, h);
  composer.setSize(w, h);

  camera.left = -w / 2;
  camera.right = w / 2;
  camera.top = h / 2;
  camera.bottom = -h / 2;
  camera.updateProjectionMatrix();

  if (rtA && rtB) {
    rtA.setSize(fluidW, fluidH);
    rtB.setSize(fluidW, fluidH);
  }

  if (simMaterial) {
    simMaterial.uniforms.resolution.value.set(fluidW, fluidH);
  }

  // Update image plane uniforms
  imagePlanes.forEach(({ material }) => {
    material.uniforms.uResolution.value.set(w, h);
    material.uniforms.uFluidResolution.value.set(fluidW, fluidH);
  });

  if (backgroundMesh) {
    backgroundMesh.material.uniforms.uResolution.value.set(w, h);
    backgroundMesh.material.uniforms.uFluidResolution.value.set(fluidW, fluidH);
  }
}

function onMouseMoveHandler(e) {
  if (!isRunning) return;
  const scale = CONFIG.fluidResolutionScale;
  mouse.set(e.clientX * scale, (window.innerHeight - e.clientY) * scale);
  lastMouseTime = performance.now();
}

function onScrollHandler() {
  if (!isRunning) return;
  updateImages();
}

// Debounced resize
let resizeTimeout;
function debouncedResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(onResizeHandler, 150);
}

export function initFilm(domContainer) {
  if (isRunning) {
    console.warn('Film canvas already running');
    return;
  }

  container = domContainer || document.getElementById('background');
  if (!container) {
    console.warn('[project-canvas] #background not found, creating one');
    container = document.createElement('div');
    container.id = 'background';
    const firstChild = document.body.firstChild;
    document.body.insertBefore(container, firstChild);
  }

  isRunning = true;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const fluidWidth = Math.floor(width * CONFIG.fluidResolutionScale);
  const fluidHeight = Math.floor(height * CONFIG.fluidResolutionScale);

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    1000
  );
  camera.position.z = 10;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.domElement.style.pointerEvents = 'none';
  container.appendChild(renderer.domElement);

  // Post-processing setup
  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const grainPass = new ShaderPass(GrainShader);
  grainPass.uniforms.uTime = postFXUniforms.uTime;
  grainPass.uniforms.uGrain = postFXUniforms.uGrain;
  composer.addPass(grainPass);

  const chromaticPass = new ShaderPass(EdgeDistortionShader);
  composer.addPass(chromaticPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // Fluid simulation setup
  setupFluidSimulation(fluidWidth, fluidHeight);

  // Image plane setup
  const targets = document.querySelectorAll('.project-img img');
  targets.forEach((img) => {
    createImagePlane(img);
  });

  // Create Background Plane
  createBackgroundPlane(fluidWidth, fluidHeight);

  // Events
  window.addEventListener('resize', debouncedResize);
  window.addEventListener('mousemove', onMouseMoveHandler, { passive: true });
  window.addEventListener('scroll', onScrollHandler, { passive: true });

  // Start animation
  lastMouseTime = performance.now();
  animate();
}

export function destroyFilm() {
  if (!isRunning) return;

  isRunning = false;

  // Cancel animation
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Remove event listeners
  window.removeEventListener('resize', debouncedResize);
  window.removeEventListener('mousemove', onMouseMoveHandler);
  window.removeEventListener('scroll', onScrollHandler);
  clearTimeout(resizeTimeout);

  // Dispose Three.js resources
  if (renderer) {
    renderer.dispose();
    if (container && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  }

  if (composer) {
    composer.dispose();
  }

  if (rtA) rtA.dispose();
  if (rtB) rtB.dispose();

  if (backgroundMesh) {
    backgroundMesh.geometry.dispose();
    backgroundMesh.material.dispose();
    backgroundMesh = null;
  }

  imagePlanes.forEach((plane) => {
    plane.mesh.geometry.dispose();
    plane.mesh.material.dispose();
    const texture = imageTextureCache.get(plane.img);
    if (texture) texture.dispose();
    // Restore image visibility
    plane.img.style.opacity = '';
  });

  imagePlanes = [];
  imageTextureCache.clear();

  if (simMaterial) {
    simMaterial.dispose();
  }

  if (simScene) {
    simScene.clear();
  }

  // Nullify references
  renderer = null;
  scene = null;
  camera = null;
  composer = null;
  postFXUniforms.uTime.value = 0;
  simMaterial = null;
  simScene = null;
  simQuad = null;
  rtA = null;
  rtB = null;
  container = null;
  frame = 0;
}

function setupFluidSimulation(width, height) {
  // Render targets for ping-pong wave simulation
  const rtParams = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  };
  rtA = new THREE.WebGLRenderTarget(width, height, rtParams);
  rtB = new THREE.WebGLRenderTarget(width, height, rtParams);

  // Enhanced pressure-velocity simulation shader
  const simulationShader = /* glsl */ `
    uniform sampler2D textureA;
    uniform vec2 mouse;
    uniform vec2 resolution;
    uniform float time;
    uniform int frame;
    varying vec2 vUv;

    const float delta = 1.4;

    void main() {
      vec2 uv = vUv;
      if (frame == 0) {
        gl_FragColor = vec4(0.0);
        return;
      }
      
      vec4 data = texture2D(textureA, uv);
      float pressure = data.x;
      float pVel = data.y;
      
      vec2 texelSize = 1.0 / resolution;
      float p_right = texture2D(textureA, uv + vec2(texelSize.x, 0.0)).x;
      float p_left = texture2D(textureA, uv + vec2(-texelSize.x, 0.0)).x;
      float p_up = texture2D(textureA, uv + vec2(0.0, texelSize.y)).x;
      float p_down = texture2D(textureA, uv + vec2(0.0, -texelSize.y)).x;
      
      // Boundary conditions
      if (uv.x <= texelSize.x) p_left = p_right;
      if (uv.x >= 1.0 - texelSize.x) p_right = p_left;
      if (uv.y <= texelSize.y) p_down = p_up;
      if (uv.y >= 1.0 - texelSize.y) p_up = p_down;
      
      // Enhanced wave equation
      pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
      pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;
      
      pressure += delta * pVel;
      
      // Restoring force
      pVel -= 0.005 * delta * pressure;
      
      // Damping
      pVel *= 1.0 - 0.002 * delta;
      pressure *= 0.999;
      
      // Mouse impulse
      vec2 mouseUV = mouse / resolution;
      if (mouse.x > 0.0) {
        float dist = distance(uv, mouseUV);
        if (dist <= 0.02) {
          pressure += 2.0 * (1.0 - dist / 0.02);
        }
      }
      
      // Store pressure, velocity, and gradients
      gl_FragColor = vec4(
        pressure, 
        pVel, 
        (p_right - p_left) / 2.0, 
        (p_up - p_down) / 2.0
      );
    }
  `;

  simMaterial = new THREE.ShaderMaterial({
    uniforms: {
      textureA: { value: null },
      mouse: { value: new THREE.Vector2(0, 0) },
      resolution: { value: new THREE.Vector2(width, height) },
      time: { value: 0 },
      frame: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: simulationShader,
  });

  // Fullscreen quad for simulation
  const geometry = new THREE.PlaneGeometry(2, 2);
  simQuad = new THREE.Mesh(geometry, simMaterial);
  simScene = new THREE.Scene();
  simScene.add(simQuad);
}

function createImagePlane(imgElement) {
  // Hide original DOM image
  imgElement.style.opacity = '0';

  // Load texture
  const loader = new THREE.TextureLoader();
  const texture = loader.load(imgElement.src);
  imageTextureCache.set(imgElement, texture);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const fluidWidth = Math.floor(width * CONFIG.fluidResolutionScale);
  const fluidHeight = Math.floor(height * CONFIG.fluidResolutionScale);

  // Image material with gradient-based distortion
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTexture: { value: texture },
      uFluid: { value: null },
      uResolution: { value: new THREE.Vector2(width, height) },
      uFluidResolution: { value: new THREE.Vector2(fluidWidth, fluidHeight) },
      uDistortionStrength: { value: CONFIG.distortionStrength },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uTexture;
      uniform sampler2D uFluid;
      uniform vec2 uResolution;
      uniform vec2 uFluidResolution;
      uniform float uDistortionStrength;
      varying vec2 vUv;
      
      void main() {
        // Sample fluid buffer at screen position
        vec2 fluidUv = gl_FragCoord.xy / uResolution;
        
        // Sample fluid data (pressure, velocity, gradX, gradY)
        vec4 fluidData = texture2D(uFluid, fluidUv);
        
        // Use pre-computed gradients from .zw
        vec2 gradient = fluidData.zw;
        vec2 distortedUv = vUv + gradient * uDistortionStrength;
        
        vec4 color = texture2D(uTexture, distortedUv);
        gl_FragColor = color;
      }
    `,
    transparent: true,
  });

  // Create mesh
  const geometry = new THREE.PlaneGeometry(1, 1);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  imagePlanes.push({ mesh, img: imgElement, material });
}

function updateImages() {
  if (!isRunning) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  imagePlanes.forEach(({ mesh, img, material }) => {
    const rect = img.getBoundingClientRect();

    // Map DOM rect to orthographic camera space
    const x = rect.left - width / 2 + rect.width / 2;
    const y = -rect.top + height / 2 - rect.height / 2;

    mesh.position.set(x, y, 0);
    mesh.scale.set(rect.width, rect.height, 1);

    // Update fluid texture reference
    const currentFluid = frame % 2 === 0 ? rtB : rtA;
    if (material.uniforms.uFluid.value !== currentFluid.texture) {
      material.uniforms.uFluid.value = currentFluid.texture;
    }
  });
}

function animate() {
  if (!isRunning) return;

  rafId = requestAnimationFrame(animate);

  const now = performance.now();

  // Run simulation every frame
  if (simMaterial && rtA && rtB) {
    // Ping-pong buffers
    const src = frame % 2 === 0 ? rtA : rtB;
    const dst = frame % 2 === 0 ? rtB : rtA;

    simMaterial.uniforms.textureA.value = src.texture;
    simMaterial.uniforms.mouse.value.set(mouse.x, mouse.y);
    simMaterial.uniforms.time.value = now * 0.001;
    simMaterial.uniforms.frame.value = frame;

    // Render to destination buffer
    renderer.setRenderTarget(dst);
    renderer.render(simScene, camera);
    renderer.setRenderTarget(null);

    frame++;
  }

  // Update grain time
  postFXUniforms.uTime.value = now * 0.001;


  // Update image positions and render
  updateImages();

  if (backgroundMesh && rtB) {
    // Use the current fluid buffer (or the one used for read)
    // frame % 2 === 0 ? rtB is dst, rtA is src.
    // But updateImages sets uFluid to src or dst? 
    // updateImages logic: const currentFluid = frame % 2 === 0 ? rtB : rtA; <--- This is actually DST?
    // Wait, if frame%2==0, we write to rtB. We should READ from rtA in simulation.
    // But for rendering, we can read from rtB (newest) or rtA.
    // updateImages uses: frame % 2 === 0 ? rtB : rtA.

    const currentFluid = frame % 2 === 0 ? rtB : rtA;
    if (backgroundMesh.material.uniforms.uFluid.value !== currentFluid.texture) {
      backgroundMesh.material.uniforms.uFluid.value = currentFluid.texture;
    }
  }

  composer.render();
}

function createBackgroundPlane(fluidW, fluidH) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uFluid: { value: null },
      uResolution: { value: new THREE.Vector2(width, height) },
      uFluidResolution: { value: new THREE.Vector2(fluidW, fluidH) },
      uColorLight: { value: new THREE.Color('#e2e2e2') }, // Light Base
      uColorDark: { value: new THREE.Color('#d0d0d0') },  // Darker Ripple
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0); // Fill screen
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uFluid;
      uniform vec2 uResolution;
      uniform vec2 uFluidResolution;
      uniform vec3 uColorLight;
      uniform vec3 uColorDark;
      varying vec2 vUv;

      void main() {
        vec2 fluidUv = vUv;
        vec4 fluidData = texture2D(uFluid, fluidUv);
        float pressure = fluidData.x;
        
        // Enhance contrast of ripple using pressure
        float ripple = smoothstep(0.001, 0.05, abs(pressure));
        
        vec3 color = mix(uColorLight, uColorDark, ripple);
        
        // Optional: Add specular highlights from gradients
        vec3 normal = normalize(vec3(-fluidData.z * 2.0, 0.5, -fluidData.w * 2.0));
        vec3 lightDir = normalize(vec3(-3.0, 10.0, 3.0));
        float specular = pow(max(0.0, dot(normal, lightDir)), 60.0) * 0.15;
        
        gl_FragColor = vec4(color + specular, 1.0);
      }
    `,
    depthWrite: false,
    depthTest: false,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  backgroundMesh = new THREE.Mesh(geometry, material);
  // Put background at the back
  backgroundMesh.renderOrder = -1;
  scene.add(backgroundMesh);
}

// Legacy exports for backwards compatibility
export const init = initFilm;
export const destroy = destroyFilm;
