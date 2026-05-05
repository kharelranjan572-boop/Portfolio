import React from 'react'
import Antigravity from './antigravity'
export const Gravity = () => {
    return (
        <>
         <Antigravity
          count={1700}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1.8}
          particleSize={1}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
        </>
    )
}