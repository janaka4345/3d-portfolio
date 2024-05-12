'use client'
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { CameraControls, Environment, KeyboardControls, KeyboardControlsEntry, } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import { Physics } from "@react-three/rapier"
import { StrictMode, useEffect, useMemo, useRef, useState } from "react"
import { usePageStore } from "@/store/pageStore"
import { useStateEngine } from "@/store/statEngine"


const World = () => {
    enum Controls {
        forward = 'forward',
        back = 'back',
        left = 'left',
        right = 'right',
        jump = 'jump',
    }

    const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], [])

    const cameraControlsRef = useRef<CameraControls>(null)
    const page = useStateEngine((state) => state.page)
    const isPageHome = (page === 'home')

    useEffect(() => {
        cameraControlsRef.current?.reset()
        return () => {

        }
    },)


    return (
        // <StrictMode>//TODO
        <>
            <KeyboardControls map={map}>

                <Canvas shadows style={{ width: '100svw', height: '100svh' }}
                    camera={{ fov: 50, near: 0.1, far: 20, position: [0, 0.8, 2.1] }}
                >
                    {/* <CameraControls
                    makeDefault
                    // minDistance={2}
                    // maxDistance={2.5}
                    // minZoom={1}
                    // maxZoom={2}
                    // minPolarAngle={1.1}
                    // maxPolarAngle={1.2}
                    // minAzimuthAngle={0}
                    // maxAzimuthAngle={0.3}
                    enabled={!(page === 'home')}

                /> */}
                    <CameraControls
                        ref={cameraControlsRef}
                        makeDefault
                        minDistance={isPageHome ? 2 : Number.EPSILON}
                        maxDistance={isPageHome ? 2.5 : Infinity}
                        minZoom={1}
                        maxZoom={2}
                        minPolarAngle={isPageHome ? 1.1 : 0}
                        maxPolarAngle={isPageHome ? 1.2 : Math.PI}
                        minAzimuthAngle={isPageHome ? 0 : -Infinity}
                        maxAzimuthAngle={isPageHome ? 0.3 : Infinity}
                    // enabled={page === 'home'}

                    />

                    <Physics debug>
                        {/* <Perf position="top-left" /> //TODO*/}
                        {/* <OrbitControls /> //TODO */}
                        {/* <directionalLight intensity={2} castShadow position={[2, 2, 2]} /> */}
                        <Environment preset="apartment" background />
                        <ambientLight />
                        <Experience />


                    </Physics>
                </Canvas>
            </KeyboardControls>
        </>
        // </StrictMode>
    )
}
export default World