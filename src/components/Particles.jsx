import { Point, Points } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

const particleColors = ['#67dae7', '#f4b677', 'white', '#ffeeff']

export function Particles({ size = 1000 }) {
  const { width, height } = useThree((state) => state.viewport)

  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[(0.5 - Math.random()) * width * 2,  height + Math.random() ** 0.85 * height * -5, (-Math.random()) * 25]}
          color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
        />
      ))}
    </Points>
  )
}