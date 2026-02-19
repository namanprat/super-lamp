import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

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

/**
 * Canonical work-page signature:
 * RenderPass -> Bloom -> Vignette -> Grain -> Chromatic Edge -> Output
 */
export function applyWorkSignaturePostFX(composer, scene, camera, postFXUniforms, options = {}) {
  const {
    bloomStrength = 0.15,
    bloomRadius = 0.5,
    bloomThreshold = 0.5,
    vignetteDarkness = 0.65,
    vignetteOffset = 0.68,
    includeBloom = true,
  } = options;

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  if (includeBloom) {
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomStrength,
      bloomRadius,
      bloomThreshold
    );
    composer.addPass(bloomPass);
  }

  const vignettePass = new ShaderPass(VignetteShader);
  vignettePass.uniforms.uDarkness.value = vignetteDarkness;
  vignettePass.uniforms.uOffset.value = vignetteOffset;
  composer.addPass(vignettePass);

  const grainPass = new ShaderPass(GrainShader);
  if (postFXUniforms?.uTime) {
    grainPass.uniforms.uTime = postFXUniforms.uTime;
  }
  if (postFXUniforms?.uGrain) {
    grainPass.uniforms.uGrain = postFXUniforms.uGrain;
  }
  composer.addPass(grainPass);

  const edgeDistortionPass = new ShaderPass(EdgeDistortionShader);
  composer.addPass(edgeDistortionPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);
}
