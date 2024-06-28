import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const Map = () => {
    // const map = useGLTF("./skillCity4new3Final.glb")
    const map = useGLTF("./dfdf.glb")
    const animation = useAnimations(map.animations, map.scene)
    useEffect(() => {
        // console.log('map', animation);


        if (animation != null) {
            //@ts-ignore
            animation?.actions?.['Animation'].reset().play()
        }

        return () => {

        }
    }, [])

    return <primitive object={map.scene} />
}
export default Map
