import { useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect } from "react";
const PlayerAvatar = () => {
    const playerAvatar = useGLTF('./MyAvatar01.glb')
    // const animations = useAnimations(playerAvatar.animations, playerAvatar.scene)
    useLayoutEffect(() => {
        playerAvatar.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
    }, [playerAvatar.scene]);


    useEffect(() => {
        // console.log(animations);
        // playerAvatar.scene.traverse((object) => {
        //     if (object.isObject3D) {
        //         object.castShadow
        //     }
        // })

        // console.log(animations.actions?.['Run']);

        // const anima = animations.actions?.['Run']
        // anima?.play()
        // setTimeout(() => {
        //   const anima = animations.actions?.['Walk']
        //   anima?.play()
        //   anima?.crossFadeFrom(animations.actions?.['Run']!, 1, true)
        // }, 5000);

    }, [])


    return (
        <>
            <primitive object={playerAvatar.scene} position={[0, -0.99, 0]} />
        </>
    )
}

export default PlayerAvatar;
