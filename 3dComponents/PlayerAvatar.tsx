// import { useStateEngine } from "@/store/statEngine";
import { useAnimations, useGLTF } from "@react-three/drei";
import { type MeshProps } from "@react-three/fiber";

import { Ref, forwardRef, useEffect, useLayoutEffect } from "react";
import { AnimationClip, type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";

const playerModel = (props: MeshProps, playerRef: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {


    console.log('player ran');


    //Character loaded
    const playerAvatar = useGLTF('./characterCompresed.glb')

    //character animations loaded
    const animation1 = useGLTF('./F_Standing_Idle_Variations_003.glb')
    const animation2 = useGLTF('./M_Standing_Expressions_001.glb')
    const animation3 = useGLTF('./M_Standing_Expressions_013.glb')
    // const animation4 = useGLTF("./test4.glb")
    // const animation5 = useGLTF("./testfinal3.glb")
    const animation = useAnimations(animation1.animations, playerAvatar.scene)


    // const page = useStateEngine((state) => state.page)// cause re render

    useLayoutEffect(() => {
        playerAvatar.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
    }, [playerAvatar.scene]);

    // console.log(animation);
    useEffect(() => {

        const anima = animation?.actions?.[animation.clips[0].name]
        anima?.play()
    }, [])


    return (
        <mesh ref={playerRef}>
            <primitive object={playerAvatar.scene}  {...props} />
        </mesh>
    )
}
const PlayerAvatar = forwardRef(playerModel)
export default PlayerAvatar;
// useGLTF.preload(['./characterCompresed.glb', './F_Standing_Idle_Variations_003.glb', './M_Standing_Expressions_001.glb', './M_Standing_Expressions_013.glb', './M_Walk_001.glb',
//     './M_Jog_003.glb'])
