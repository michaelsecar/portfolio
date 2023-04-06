import { Elements } from "./components/FiberCanvas"
import { Particles } from "./components/Particles"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
import Html from "./pages/Html"
import { Suspense } from "react"

function App() {
    return (
        <Canvas camera={[0, 0, -10]}>
            <ambientLight intensity={0.1} />
            <directionalLight
                intensity={0.5}
                lookAt={[0, 0, 0]}
                position={[-5, 2, 1]}
            />
            <OrbitControls enableZoom={false} enableRotate={false} />
            <Suspense fallback={null}>
                <ScrollControls pages={5} damping={0.1}>
                    <Scroll>
                        <Particles />
                        <Elements />
                    </Scroll>
                    <Scroll html>
                        <Html />
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}

export default App
