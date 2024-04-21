import { useGLTF } from "@react-three/drei"

const Player = () => {
    const character = useGLTF('./CharacterAnimated.glb')
    console.log('char', character);

    return (

        <primitive object={character.scene} position={[0, -0.99, 0]} />
    )
}
export default Player