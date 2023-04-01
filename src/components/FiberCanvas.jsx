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
                <AnimatedCircle/>
           </Canvas>
        </div>
    )
}

const AnimatedCircle = () => {
    //Loading texture
    const moonTexture = useLoader(TextureLoader, 'moon.jpg') 

    // Using useRef and useFrame to animate shape
    const circleRef = useRef()
    useFrame(({clock})=> {
        circleRef.current.rotation.y += 0.001
    })
    return (
        <mesh ref={circleRef} position={[4,2,0]}>
            <sphereGeometry/>
            <meshStandardMaterial map={moonTexture}/>
        </mesh>
    )
}

export default FiberCanvas