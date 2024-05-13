import { useStateEngine } from "@/store/statEngine";
import { useAnimations, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

import { Ref, forwardRef, useEffect, useLayoutEffect } from "react";
import { type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";
const playerModel = (props: MeshProps, playerRef: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
    // const playerAvatar = useGLTF('./myAvatar2v1.glb')
    const playerAvatar = useGLTF('./characterCompresed.glb')
    const animation = useGLTF('./F_Standing_Idle_Variations_003.glb')
    const animations = useAnimations(animation.animations, playerAvatar.scene)
    const page = useStateEngine((state) => state.page)
    // console.log(animation);

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

        // console.log(animations.actions?.["F_Standing_Idle_Variations_007"]);

        const anima = animations?.actions?.["F_Standing_Idle_Variations_003"]
        anima?.play()
        // if (animation.nodes && animation.animations) {
        //     const anima = animations.actions?.["Action"]
        //     anima?.play()
        // }

        // setTimeout(() => {
        //   const anima = animations.actions?.['Walk']
        //   anima?.play()
        //   anima?.crossFadeFrom(animations.actions?.['Run']!, 1, true)
        // }, 5000);

    }, [])


    return (
        <mesh ref={playerRef}>
            <primitive object={playerAvatar.scene}  {...props} />
        </mesh>
    )
}
const PlayerAvatar = forwardRef(playerModel)
export default PlayerAvatar;
