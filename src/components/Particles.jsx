import { Point, Points } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils} from 'three'
import React from 'react'

const particleColors = ['#67dae7', '#f4b677', 'white', '#ffeeff']

export function Particles({ size = 1000 }) {
  const { width, height } = useThree((state) => state.viewport)

  useFrame(({mouse, camera}) => {
    camera.rotation.y = MathUtils.lerp(camera.rotation.y, mouse.x*0.5, 0.002)
  })
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