'use client'
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { OrbitControls } from "@react-three/drei"

const World = () => {
    return (
        <Canvas style={{ width: '100svw', height: '100svh' }}>
            <OrbitControls />
            <directionalLight position={[2, 2, 2]} />
            <ambientLight />
            <Experience />
        </Canvas>
    )
}
export default World