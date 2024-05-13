import { useStateEngine } from "@/store/statEngine";
import { useAnimations, useGLTF } from "@react-three/drei";
import { type MeshProps } from "@react-three/fiber";

import { Ref, forwardRef, useEffect, useLayoutEffect } from "react";
import { type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";

const playerModel = (props: MeshProps, playerRef: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {

    let random = Math.floor(Math.random() * 5)
    console.log('player ran');

    const playerAvatar = useGLTF('./characterCompresed.glb')
    const animation1 = useGLTF('./F_Standing_Idle_Variations_003.glb')
    const animation2 = useGLTF('./M_Standing_Expressions_001.glb')
    const animation3 = useGLTF('./M_Standing_Expressions_013.glb')
    const animation4 = useGLTF("./Walking.glb")
    const animation5 = useGLTF("./test4.glb")
    let animation;
    switch (random) {
        case 0:
            animation = useAnimations(animation1.animations, playerAvatar.scene)
            break;
        case 1:
            animation = useAnimations(animation2.animations, playerAvatar.scene)
            break;
        case 2:
            animation = useAnimations(animation3.animations, playerAvatar.scene)
            break;
        case 3:
            animation = useAnimations(animation4.animations, playerAvatar.scene)
            break;
        case 4:
            animation = useAnimations(animation5.animations, playerAvatar.scene)
            break;

        default:
            break;
    }



    const page = useStateEngine((state) => state.page)

    useLayoutEffect(() => {
        playerAvatar.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
    }, [playerAvatar.scene]);

    console.log(animation);
    useEffect(() => {

        console.log(random);

        const anima = animation?.actions?.[animation.clips[0].name]
        anima?.play()
    }, [page])


    return (
        <mesh ref={playerRef}>
            <primitive object={playerAvatar.scene}  {...props} />
        </mesh>
    )
}
const PlayerAvatar = forwardRef(playerModel)
export default PlayerAvatar;
useGLTF.preload(['./characterCompresed.glb', './F_Standing_Idle_Variations_003.glb', './M_Standing_Expressions_001.glb', './M_Standing_Expressions_013.glb', './M_Walk_001.glb',
    './M_Jog_003.glb'])
