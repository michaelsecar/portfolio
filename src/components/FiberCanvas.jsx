import { Canvas, useFrame, useLoader} from "@react-three/fiber"
import { Color, TextureLoader } from "three"
import { useRef } from 'react'

import './FiberCanvas.css'

const FiberCanvas = () => {
    return (
        <div className="container canvas-container">
            <Canvas>
                <ambientLight intensity={0.1}/>
                <directionalLight intensity={0.5} lookAt={[0,0,0]} position={[-5,2,1]}/>
                <Moon/>
                <Earth/>
           </Canvas>
        </div>
    )
}

const Moon = () => {
    const moonTexture = useLoader(TextureLoader, 'moon.jpg') 
    const moonRef = useRef()
    useFrame(({clock})=> {
        moonRef.current.rotation.y += 0.001
    })
    return (
        <mesh ref={moonRef} position={[4,2,0]}>
            <sphereGeometry/>
            <meshStandardMaterial map={moonTexture}/>
        </mesh>
    )
}

const Earth = ()=> {
    const earthTexture = useLoader(TextureLoader, 'earth.jpg')
    const earthRef = useRef()
    useFrame(({clock})=> {
        earthRef.current.rotation.y += 0.001
    })
    return (
        <mesh ref={earthRef} position={[3,-4,3]} scale={4}>
            <sphereGeometry/>
            <meshStandardMaterial map={earthTexture}/>
        </mesh>
    )
}

export default FiberCanvas