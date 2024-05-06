import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect } from "react";
const PlayerAvatar = () => {
    const playerAvatar = useGLTF('./MyAvatar01.glb')
    const animation = useGLTF('./idle.glb')
    const animations = useAnimations(animation.animations, playerAvatar.scene)
    useLayoutEffect(() => {
        playerAvatar.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
    }, [playerAvatar.scene]);


    useEffect(() => {
        console.log(animation);
        // playerAvatar.scene.traverse((object) => {
        //     if (object.isObject3D) {
        //         object.castShadow
        //     }
        // })

        // console.log(animations.actions?.["F_Standing_Idle_Variations_007"]);

        const anima = animations.actions?.["F_Standing_Idle_Variations_007"]
        anima?.play()
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
