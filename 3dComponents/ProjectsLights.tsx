import { Environment, Lightformer, Sphere, useTexture } from "@react-three/drei"
import { BackSide } from "three"

function ProjectsLights() {
    // const map = useTexture('/backgrounds/www.jpg')
    return (
        <>
            {/* <color attach="background" args={["#ffffff"]} /> */}
            <ambientLight intensity={0.1} color="pink" />
            <Environment >
                <Sphere scale={15}>
                    <meshBasicMaterial color={'green'} side={BackSide} />
                    {/* <meshBasicMaterial map={map} side={BackSide} /> */}
                </Sphere>
                <Lightformer
                    position={[5, 0, -5]}
                    form="rect" // circle | ring | rect (optional, default = rect)
                    intensity={1} // power level (optional = 1)
                    color="red" // (optional = white)
                    scale={[3, 5, 0]} // Scale it any way you prefer (optional = [1, 1])
                    target={[0, 0, 0]}
                />

                <Lightformer
                    position={[-5, 0, 1]}
                    form="circle" // circle | ring | rect (optional, default = rect)
                    intensity={1} // power level (optional = 1)
                    color="green" // (optional = white)
                    scale={[2, 5, 0]} // Scale it any way you prefer (optional = [1, 1])
                    target={[0, 0, 0]}
                />

                <Lightformer
                    position={[0, 5, -2]}
                    form="ring" // circle | ring | rect (optional, default = rect)
                    intensity={0.5} // power level (optional = 1)
                    color="orange" // (optional = white)
                    scale={[10, 5, 0]} // Scale it any way you prefer (optional = [1, 1])
                    target={[0, 0, 0]}
                />

                <Lightformer
                    position={[0, 0, 5]}
                    form="rect" // circle | ring | rect (optional, default = rect)
                    intensity={1} // power level (optional = 1)
                    color="purple" // (optional = white)
                    scale={[10, 5, 0]} // Scale it any way you prefer (optional = [1, 1])
                    target={[0, 0, 0]}
                />
            </Environment>
        </>
    )
}
export default ProjectsLights