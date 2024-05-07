'use client'
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { CameraControls, Environment, } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import { Physics } from "@react-three/rapier"
import { StrictMode, useEffect, useRef } from "react"
import { useControls } from 'leva'

const World = () => {
    const cameraControlsRef = useRef<CameraControls>(null)
    useEffect(() => {

        return () => {

        }
    },)


    return (
        // <StrictMode>//TODO
        <Canvas shadows style={{ width: '100svw', height: '100svh' }}
            camera={{ fov: 50, near: 0.1, far: 20, position: [0, 0.8, 2.1] }}
        >

            <CameraControls
                ref={cameraControlsRef}
                makeDefault
                minDistance={2}
                maxDistance={2.5}
                minZoom={1}
                maxZoom={2}
                minPolarAngle={1.1}
                maxPolarAngle={1.2}
                minAzimuthAngle={0}
                maxAzimuthAngle={0.3}
                enabled={true}

            />
            <Physics >
                {/* <Perf position="top-left" /> //TODO*/}
                {/* <OrbitControls /> //TODO */}
                {/* <directionalLight intensity={2} castShadow position={[2, 2, 2]} /> */}
                <Environment preset="apartment" background />
                <ambientLight />
                <Experience />


            </Physics>
        </Canvas>
        // </StrictMode>
    )
}
export default World