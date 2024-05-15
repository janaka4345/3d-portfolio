import { useGLTF } from "@react-three/drei"

const Map = () => {
    const map = useGLTF('./skillCity2finalfinal.glb')
    return (
        <primitive object={map.scene} />
    )
}
export default Map