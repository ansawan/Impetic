'use client'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import { CameraRig, type CameraKeyframe } from './CameraRig'
import { prefersLightProfile } from './performanceProfile'

export function ScrollScene({
  keyframes,
  children,
}: {
  keyframes: CameraKeyframe[]
  children?: React.ReactNode
}) {
  const [light, setLight] = useState(prefersLightProfile)

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-[#000000]">
      <Canvas
        camera={{ position: keyframes[0]?.pos || [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={light ? 1 : [1, 1.5]}
      >
        <PerformanceMonitor onDecline={() => setLight(true)} />
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.15} />
        <pointLight position={[4, 4, 4]} intensity={1} color="#4DE8DC" />

        <CameraRig keyframes={keyframes} dwell={0.05} />

        {children}

        <EffectComposer multisampling={light ? 0 : 4}>
          <Bloom intensity={0.5} luminanceThreshold={0.35} mipmapBlur />
          {!light ? <ChromaticAberration offset={new Vector2(0.0002, 0.0002)} /> : <></>}
          <Vignette darkness={0.9} offset={0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
export default ScrollScene
