'use client'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField, Vignette } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import { prefersLightProfile } from './performanceProfile'

import { CameraRig } from './CameraRig'
import { HeroScene } from './scenes/HeroScene'
import { ServicesScene } from './scenes/ServicesScene'
import { ProcessScene } from './scenes/ProcessScene'
import { ShowcaseScene } from './scenes/ShowcaseScene'
import { StatsScene } from './scenes/StatsScene'
import { CTAScene } from './scenes/CTAScene'
import { GlassClusterScene } from './scenes/GlassClusterScene'
import { ParticleFieldScene } from './scenes/ParticleFieldScene'

export default function SceneCanvas() {
  const [light, setLight] = useState(prefersLightProfile)

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#000000]">
      {/* EffectComposer does its own anti-aliasing, so MSAA on the default buffer is wasted work */}
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={light ? 1 : [1, 1.5]}
      >
        <PerformanceMonitor onDecline={() => setLight(true)} />

        <color attach="background" args={['#000000']} />
        
        {/* Dynamic Slate & Teal Studio Lighting */}
        <ambientLight intensity={0.25} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color="#4DE8DC" />
        <pointLight position={[-6, -4, -4]} intensity={1.2} color="#2FBFB0" />
        <pointLight position={[0, 0, 10]} intensity={0.8} color="#3C4D52" />

        <CameraRig />

        <Suspense fallback={null}>
          <HeroScene />
          <ServicesScene />
          <GlassClusterScene />
          <ProcessScene />
          <ShowcaseScene />
          <ParticleFieldScene />
          <StatsScene />
          <CTAScene />
        </Suspense>

        {/* Calmed Postprocessing Pass */}
        <EffectComposer multisampling={light ? 0 : 4}>
          <Bloom
            intensity={0.4}
            luminanceThreshold={0.4}
            luminanceSmoothing={0.85}
            mipmapBlur
          />
          {/* Depth of field and chromatic aberration are the costliest passes; skip them on the light profile */}
          {!light ? <ChromaticAberration offset={new Vector2(0.0002, 0.0002)} /> : <></>}
          {!light ? (
            <DepthOfField
              focusDistance={0.02}
              focalLength={0.05}
              bokehScale={2}
              height={480}
            />
          ) : <></>}
          <Vignette
            eskil={false}
            offset={0.25}
            darkness={0.95}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
