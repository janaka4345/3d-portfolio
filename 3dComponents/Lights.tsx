import { useStateEngine } from "@/store/statEngine"
import { Environment, Sky } from "@react-three/drei"
import ProjectsLights from "./ProjectsLights"

const Lights = () => {
    const page = useStateEngine((state) => state.page)

    return (
        <>
            {page === 'skills' && <Sky sunPosition={[100, 20, 100]} />}
            {page === 'home' && <Environment preset="apartment" background />}
            {/* {page === 'projects' && <ProjectsLights />} */}

            <ambientLight intensity={0.3} />
            <directionalLight intensity={2} position={[10, 20, 10]} />
            <directionalLight intensity={2} position={[-20, 20, -20]} />
        </>
    )
}
export default Lights
