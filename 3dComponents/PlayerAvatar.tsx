import { useAnimations, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { Ref, forwardRef, useEffect, useLayoutEffect } from "react";
import { type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";
const playerModel = (props: MeshProps, playerRef: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
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
        <mesh ref={playerRef}>
            <primitive object={playerAvatar.scene}  {...props} />
        </mesh>
    )
}
const PlayerAvatar = forwardRef(playerModel)
export default PlayerAvatar;
