import { Environment, Sky } from "@react-three/drei"

const Lights = () => {
    return (
        <>
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.3} />
            <directionalLight intensity={2} position={[10, 20, 10]} />
            <directionalLight intensity={2} position={[-20, 20, -20]} />

            {/* <Environment preset="apartment" background /> */}
        </>
    )
}
export default Lights
