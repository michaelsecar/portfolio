import { useFrame, useLoader } from "@react-three/fiber"
import {
    Group,
    MathUtils,
    MeshPhongMaterial,
    MeshStandardMaterial,
    TextureLoader,
} from "three"
import { useLayoutEffect, useRef } from "react"
import { useGLTF, useScroll } from "@react-three/drei"

import gsap from "gsap"

import "./FiberCanvas.css"

export const LEVEL_HEIGHT = 1
export const LEVELS = 1

export const Elements = () => {
    const ref = useRef()
    const tl = useRef()
    const moR = useRef()
    const maR = useRef()
    const teR = useRef()
    const scroll = useScroll()

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })
    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -LEVEL_HEIGHT * (LEVELS - 1),
            },
            1
        )
        tl.current.to(
            maR.current.rotation,
            {
                duration: 8,
                y: Math.PI,
            },
            0
        )
    }, [])

    return (
        <group ref={ref} dispose={null}>
            <group ref={moR}>
                <Moon />
            </group>
            <group ref={maR}>
                <Mars />
            </group>
            <group>
                <TextCard />
            </group>
            <group ref={teR}>
                <Telescope />
            </group>
        </group>
    )
}
export const Moon = (props) => {
    const moonTexture = useLoader(TextureLoader, "moon.jpg")
    const moonRef = useRef()
    useFrame(() => {
        moonRef.current.rotation.y += 0.001
    })
    return (
        <group position={[6, -8, -3]} scale={3} {...props}>
            <mesh ref={moonRef}>
                <sphereGeometry />
                <meshStandardMaterial map={moonTexture} />
            </mesh>
        </group>
    )
}

export const Mars = (props) => {
    const marsTexture = useLoader(TextureLoader, "mars.jpg")
    const earthRef = useRef()
    useFrame(() => {
        earthRef.current.rotation.y += 0.0005
    })
    return (
        <group {...props} position={[6, 6, -5]} scale={2}>
            <mesh ref={earthRef}>
                <sphereGeometry />
                <meshStandardMaterial map={marsTexture} />
            </mesh>
        </group>
    )
}

export function TextCard(props) {
    const { nodes, materials } = useGLTF("/card.glb")
    const tcR = useRef()
    useFrame(({ clock, mouse }) => {
        tcR.current.rotation.y = MathUtils.lerp(
            tcR.current.rotation.y,
            mouse.x * 0.5 - 0.2,
            0.01
        )
        tcR.current.rotation.x = MathUtils.lerp(
            tcR.current.rotation.x,
            -mouse.y * 0.7,
            0.01
        )
    })
    return (
        <group
            {...props}
            dispose={null}
            position={[2.8, -24.5, 0]}
            rotation={[0, 0, 0.1]}
            scale={1.3}
            ref={tcR}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={new MeshStandardMaterial({ color: "#2ddb83" })}
                scale={[1.31, 0.84, 0.14]}
            />
        </group>
    )
}

export function Telescope(props) {
    const { nodes, materials } = useGLTF("/telescope.glb")
    const baseRef = useRef()
    const lenRef = useRef()
    useFrame(({ clock }) => {
        baseRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2 + 0.2
        lenRef.current.rotation.y = Math.sin(clock.elapsedTime * 2) * 0.1 + 1.1
    })
    return (
        <group {...props} dispose={null} scale={0.3} position={[3, -30, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Legs.geometry}
                material={new MeshStandardMaterial({ color: "#616161" })}
                position={[0, 1.04, 0]}
                scale={1.22}
            />
            <mesh
                ref={baseRef}
                castShadow
                receiveShadow
                geometry={nodes.Base.geometry}
                material={new MeshStandardMaterial({ color: "#616161" })}
                position={[0, 1.04, 0]}
                scale={1.22}
            >
                <mesh
                    ref={lenRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Axis.geometry}
                    material={new MeshStandardMaterial({ color: "#414141" })}
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -1.19, 0]}
                    scale={[0.29, 1, 0.29]}
                >
                    <group
                        position={[0, 0.01, 7.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[1.66, 16.31, 0.49]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder001.geometry}
                            material={
                                new MeshStandardMaterial({ color: "#737373" })
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder001_1.geometry}
                            material={
                                new MeshStandardMaterial({ color: "#818181" })
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder001_2.geometry}
                            material={
                                new MeshStandardMaterial({ color: "#1f1f1f" })
                            }
                        />
                    </group>
                </mesh>
            </mesh>
        </group>
    )
}

useGLTF.preload("/telescope.glb")
useGLTF.preload("/card.glb")
