'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// ─── 4-Point Star Flare Mesh ──────────────────────────────────────
function StarFlare({
  position,
  scale = 1,
  color = '#FFFFFF',
  phase = 0,
}: {
  position: [number, number, number]
  scale?: number
  color?: string
  phase?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uIntensity: { value: 1.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        varying vec2 vUv;

        void main() {
          vec2 p = vUv - 0.5;
          float d = length(p);

          // Central brilliant core
          float core = 0.025 / (d + 0.01);

          // 4-point star spikes
          float hSpike = 0.003 / (abs(p.y) * 8.0 + abs(p.x) * 0.4 + 0.01) * smoothstep(0.45, 0.0, abs(p.x));
          float vSpike = 0.003 / (abs(p.x) * 8.0 + abs(p.y) * 0.4 + 0.01) * smoothstep(0.45, 0.0, abs(p.y));

          // Diagonal micro-spikes
          vec2 rot = mat2(0.707, -0.707, 0.707, 0.707) * p;
          float d1 = 0.0015 / (abs(rot.y) * 12.0 + abs(rot.x) * 0.8 + 0.01) * smoothstep(0.35, 0.0, abs(rot.x));
          float d2 = 0.0015 / (abs(rot.x) * 12.0 + abs(rot.y) * 0.8 + 0.01) * smoothstep(0.35, 0.0, abs(rot.y));

          float star = core + hSpike + vSpike + d1 + d2;
          star *= uIntensity;

          gl_FragColor = vec4(uColor * star, clamp(star, 0.0, 1.0));
        }
      `,
    })
  }, [color])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime() * 2.5 + phase
    const pulse = 0.5 + 0.5 * Math.sin(t)
    // Twinkle flare
    material.uniforms.uIntensity.value = 0.3 + 0.9 * Math.pow(pulse, 3.0)
    meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
  })

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, 1]} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  )
}

// ─── Pavé Gemstone Channel Surface Shader ────────────────────────
function PaveChannelSurface() {
  const meshRef = useRef<THREE.Mesh>(null)

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uLightPos1: { value: new THREE.Vector3(2.5, 3.0, 3.5) },
        uLightPos2: { value: new THREE.Vector3(-3.0, -2.5, 2.5) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uLightPos1;
        uniform vec3 uLightPos2;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        // Hash helper for pseudo-random facet directions
        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        vec2 hash2(vec2 p) {
          return vec2(hash(p), hash(p + 19.19));
        }

        void main() {
          vec3 viewDir = normalize(vViewPosition);
          float r = length(vPosition.xy);
          float angle = atan(vPosition.y, vPosition.x);
          if (angle < 0.0) angle += 6.2831853; // Normalize to 0 .. 2*PI

          // Normalized track span: inner 1.15 to outer 1.82
          float rNorm = clamp((r - 1.15) / (1.82 - 1.15), 0.0, 1.0);

          // ─── TOP-RIGHT QUADRANT: Amethyst & Violet Sapphires (0 rad to PI/2 rad) ───
          bool isPurpleSector = (angle >= 0.03 && angle <= 1.54);

          // Divider bars at 12 o'clock and 3 o'clock (angle ≈ 0 and angle ≈ PI/2)
          bool isDivider = (angle < 0.035 || (angle > 1.535 && angle < 1.605));

          vec3 baseColor;
          vec3 facetNormal = vNormal;
          float specPower = 64.0;
          float specMultiplier = 1.0;
          float sparkle = 0.0;

          if (isDivider) {
            // Polished platinum partition wall
            baseColor = vec3(0.92, 0.94, 0.98);
            specPower = 32.0;
            specMultiplier = 1.8;
          } else if (isPurpleSector) {
            // ─── AMETHYST / SAPPHIRE CLUSTER ───
            // Prominent large center amethyst at angle ~0.785, rNorm ~0.55
            vec2 gemCenter1 = vec2(0.785, 0.55);
            float distCenter1 = length(vec2((angle - gemCenter1.x) * 1.5, (rNorm - gemCenter1.y) * 2.0));

            // Voronoi-like stone clustering
            vec2 grid = vec2(angle * 14.0, rNorm * 7.0);
            vec2 iGrid = floor(grid);
            vec2 fGrid = fract(grid);
            float stoneId = hash(iGrid);

            // Gem facet normal perturbation
            vec2 facetOffset = (hash2(iGrid * 3.7 + floor(uTime * 0.05)) - 0.5) * 0.8;
            facetNormal = normalize(vNormal + vec3(facetOffset * 0.5, 0.2));

            // Deep jewel tones: Royal Amethyst, Violet Sapphire, Tanzanite, Lavender
            if (distCenter1 < 0.35) {
              // Large center statement amethyst
              baseColor = mix(vec3(0.42, 0.12, 0.72), vec3(0.68, 0.28, 0.96), stoneId);
              specMultiplier = 2.4;
            } else {
              // Mixed violet sapphires, tanzanites, and lavender gems
              if (stoneId > 0.7) {
                baseColor = vec3(0.32, 0.20, 0.80); // Blue-violet tanzanite
              } else if (stoneId > 0.4) {
                baseColor = vec3(0.55, 0.18, 0.88); // Royal purple sapphire
              } else if (stoneId > 0.2) {
                baseColor = vec3(0.72, 0.38, 0.96); // Bright lavender amethyst
              } else {
                baseColor = vec3(0.38, 0.10, 0.65); // Deep imperial amethyst
              }
              specMultiplier = 2.0;
            }

            // Facet edge shadow
            float edgeDist = min(min(fGrid.x, 1.0 - fGrid.x), min(fGrid.y, 1.0 - fGrid.y));
            baseColor *= smoothstep(0.04, 0.2, edgeDist) * 0.65 + 0.35;

            // Shimmering facet sparkle
            sparkle = pow(max(dot(facetNormal, normalize(vec3(0.6, 0.8, 1.0) + viewDir)), 0.0), 40.0) * 1.8;

          } else {
            // ─── MICRO-PAVÉ WHITE DIAMONDS (Remaining 270°) ───
            // 5 concentric rows of circular pavé stones
            float numRows = 5.0;
            float row = floor(rNorm * numRows);
            float stonesInRow = 42.0 + row * 12.0;
            float col = floor((angle / 6.2831853) * stonesInRow);

            vec2 stoneUV = vec2(fract(rNorm * numRows) - 0.5, fract((angle / 6.2831853) * stonesInRow) - 0.5);
            float stoneDist = length(stoneUV);

            // Circular stone dome shape
            float dome = sqrt(max(0.0, 0.25 - stoneDist * stoneDist));

            // Multi-facet micro-reflections
            vec2 facet = hash2(vec2(row, col));
            vec3 microNormal = normalize(vec3(stoneUV * 1.5, dome * 0.8 + 0.3));
            microNormal += vec3((facet - 0.5) * 0.4, 0.0);
            facetNormal = normalize(vNormal + microNormal * 0.6);

            // Brilliant white diamond with icy platinum base
            baseColor = vec3(0.96, 0.98, 1.0);

            // Prong cup shadows between circular stones
            float stoneMask = smoothstep(0.48, 0.38, stoneDist);
            baseColor = mix(vec3(0.45, 0.48, 0.55), baseColor, stoneMask);

            // Diamond fire: intense specular sparkle + chromatic rainbow dispersion
            specPower = 90.0;
            specMultiplier = 2.8;

            vec3 halfDir = normalize(uLightPos1 + viewDir);
            float diamondGlint = pow(max(dot(facetNormal, halfDir), 0.0), specPower);

            // Chromatic prismatic dispersion flash
            vec3 fire = vec3(
              pow(max(dot(facetNormal, normalize(uLightPos1 + viewDir + vec3(0.05, 0.0, 0.0))), 0.0), specPower),
              diamondGlint,
              pow(max(dot(facetNormal, normalize(uLightPos1 + viewDir - vec3(0.05, 0.0, 0.0))), 0.0), specPower)
            );
            sparkle = (fire.r * 0.9 + fire.g * 1.2 + fire.b * 1.1);
          }

          // Lighting calculations
          vec3 l1 = normalize(uLightPos1);
          vec3 l2 = normalize(uLightPos2);

          float diff1 = max(dot(facetNormal, l1), 0.0);
          float diff2 = max(dot(facetNormal, l2), 0.0);

          vec3 h1 = normalize(l1 + viewDir);
          float spec1 = pow(max(dot(facetNormal, h1), 0.0), specPower) * specMultiplier;

          // Platinum / diamond Fresnel rim
          float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
          vec3 rimColor = isPurpleSector ? vec3(0.85, 0.5, 1.0) : vec3(0.9, 0.95, 1.0);

          // Composite color
          vec3 finalColor = baseColor * (0.28 + diff1 * 0.55 + diff2 * 0.25)
                          + vec3(1.0, 0.98, 1.0) * spec1
                          + vec3(1.0, 1.0, 1.0) * sparkle * 1.5
                          + rimColor * fresnel * 0.8;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    })
  }, [])

  useFrame(({ clock }) => {
    if (shaderMaterial) {
      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0.12]} material={shaderMaterial}>
      <ringGeometry args={[1.15, 1.82, 128, 8]} />
    </mesh>
  )
}

// ─── Polished Platinum Rims, Dividers & Metal Body ────────────────
function LuxuryRingBody() {
  const platinumMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F8FAFC'),
      metalness: 0.96,
      roughness: 0.1,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide,
    })
  }, [])

  return (
    <group>
      {/* Outer Polished Platinum Rim */}
      <mesh position={[0, 0, 0.05]} material={platinumMaterial}>
        <ringGeometry args={[1.82, 1.94, 128, 1]} />
      </mesh>

      {/* Outer Rim Bevel Edge */}
      <mesh position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} material={platinumMaterial}>
        <cylinderGeometry args={[1.94, 1.94, 0.22, 128, 1, true]} />
      </mesh>

      {/* Inner Polished Platinum Rim */}
      <mesh position={[0, 0, 0.05]} material={platinumMaterial}>
        <ringGeometry args={[1.05, 1.15, 128, 1]} />
      </mesh>

      {/* Inner Hole Bevel Edge */}
      <mesh position={[0, 0, 0.02]} rotation={[Math.PI / 2, 0, 0]} material={platinumMaterial}>
        <cylinderGeometry args={[1.05, 1.05, 0.22, 128, 1, true]} />
      </mesh>

      {/* Solid Backing Plate */}
      <mesh position={[0, 0, -0.09]} material={platinumMaterial}>
        <ringGeometry args={[1.05, 1.94, 128, 1]} />
      </mesh>

      {/* Partition Bar 1 at 3 o'clock (angle = 0, along +X axis) */}
      <mesh position={[1.485, 0.005, 0.14]} material={platinumMaterial}>
        <boxGeometry args={[0.67, 0.035, 0.04]} />
      </mesh>

      {/* Partition Bar 2 at 12 o'clock (angle = PI/2, along +Y axis) */}
      <mesh position={[0.005, 1.485, 0.14]} material={platinumMaterial}>
        <boxGeometry args={[0.035, 0.67, 0.04]} />
      </mesh>
    </group>
  )
}

// ─── Main Assembly with Stars & Interactive Rotation ──────────────
function OriginDiamondRing() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return

    const time = clock.getElapsedTime()

    // Smooth continuous majestic rotation
    const baseRotZ = time * 0.15
    const baseRotX = 0.25 + Math.sin(time * 0.4) * 0.06
    const baseRotY = Math.cos(time * 0.35) * 0.08

    // Interactive pointer parallax tilt (subtle and luxurious)
    const targetRotX = baseRotX - pointer.y * 0.35
    const targetRotY = baseRotY + pointer.x * 0.45

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06)
    groupRef.current.rotation.z = baseRotZ
  })

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.15}
      floatIntensity={0.35}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={groupRef} scale={[1.15, 1.15, 1.15]}>
        {/* Polished Platinum Chassis */}
        <LuxuryRingBody />

        {/* Front Pavé Gemstone Channel (Diamonds + Amethyst) */}
        <PaveChannelSurface />

        {/* Back Pavé Gemstone Channel */}
        <group rotation={[0, Math.PI, 0]}>
          <PaveChannelSurface />
        </group>

        {/* Twinkling Star Glints (Matching Image 2 Signature Glints) */}
        {/* Star Glint on Purple Amethyst Cluster */}
        <StarFlare position={[1.1, 1.1, 0.18]} scale={0.55} color="#E9D5FF" phase={0} />

        {/* Star Glint on Top Outer Platinum Rim */}
        <StarFlare position={[-0.2, 1.9, 0.16]} scale={0.5} color="#FFFFFF" phase={1.6} />

        {/* Star Glint on White Diamonds (Left Arc) */}
        <StarFlare position={[-1.45, 0.4, 0.18]} scale={0.65} color="#FFFFFF" phase={2.8} />

        {/* Star Glint on Bottom White Diamonds */}
        <StarFlare position={[0.4, -1.5, 0.18]} scale={0.5} color="#E0F2FE" phase={4.2} />

        {/* Star Glint on Inner Platinum Rim */}
        <StarFlare position={[-0.75, -0.75, 0.16]} scale={0.45} color="#F8FAFC" phase={5.1} />
      </group>
    </Float>
  )
}

export default function TorusScene() {
  return (
    <div
      className="w-full h-full relative flex items-center justify-center select-none pointer-events-auto"
      style={{
        filter:
          'drop-shadow(0 0 30px rgba(168, 85, 247, 0.45)) drop-shadow(0 0 70px rgba(124, 58, 237, 0.25))',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        {/* High-Key Jewelry Studio 3-Point Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} color="#FFFFFF" />
        <directionalLight position={[-4, -4, 3]} intensity={1.4} color="#7C3AED" />
        <pointLight position={[1.5, 2.0, 3.0]} intensity={2.0} color="#E9D5FF" />
        <pointLight position={[-2.0, 1.0, 2.0]} intensity={1.5} color="#C084FC" />
        <pointLight position={[0, -3.0, 2.0]} intensity={1.2} color="#FFFFFF" />

        {/* Ambient floating diamond dust particles against velvet background */}
        <Sparkles
          count={45}
          scale={5.8}
          size={2.2}
          speed={0.3}
          opacity={0.5}
          color="#F1F5F9"
        />

        <OriginDiamondRing />
      </Canvas>
    </div>
  )
}
