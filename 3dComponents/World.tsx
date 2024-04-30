'use client'
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { OrbitControls } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import { Physics } from "@react-three/rapier"

const World = () => {
    return (
        <Canvas shadows style={{ width: '100svw', height: '100svh' }}>
            <Physics >
                <Perf position="top-left" />
                <OrbitControls />
                <directionalLight intensity={2} castShadow position={[2, 2, 2]} />
                <ambientLight />
                <Experience />
            </Physics>
        </Canvas>
    )
}
export default World