import { Moon, Earth } from './components/FiberCanvas'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import Html from './pages/Html' 
import { Suspense } from 'react'

function App() {
  return (
      <Canvas camera={[0,0,-10]}>
        <ambientLight intensity={0.1}/>
        <directionalLight intensity={0.5} lookAt={[0,0,0]} position={[-5,2,1]}/>
        <Moon/>
        <Earth/>
        <Suspense fallback={null}>
          <ScrollControls pages={4}>
            <Scroll html>
              <Html/>
            </Scroll>
          </ScrollControls>
       </Suspense>
     </Canvas>
    
  )
}

export default App
