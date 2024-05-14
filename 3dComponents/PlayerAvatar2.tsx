// import { useStateEngine } from "@/store/statEngine";
import { useAnimationStore } from "@/store/animationStore";
import { useStateEngine } from "@/store/statEngine";
import { useAnimations, useGLTF } from "@react-three/drei";
import { type MeshProps } from "@react-three/fiber";

import { Ref, forwardRef, useEffect, useLayoutEffect } from "react";
import { AnimationClip, type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";

const playerModel = (props: MeshProps, playerRef: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {

    //get the setAnimation Action from animation store

    const setAnimation = useAnimationStore(state => state.setAnimations)


    console.log('player model renderd');
    // const num = Math.floor(Math.random() * 5)
    // // const num = 6

    const animationArray: AnimationClip[] = [];

    //Character loadedAP
    const playerAvatar = useGLTF('./characterCompresed.glb')

    //character animations loaded
    const glbAnimation1 = useGLTF('./F_Standing_Idle_Variations_003.glb')
    const glbAnimation2 = useGLTF('./M_Standing_Expressions_001.glb')
    const glbAnimation3 = useGLTF('./M_Standing_Expressions_013.glb')
    const glbAnimation10 = useGLTF('./idle.glb')
    const glbAnimation4 = useGLTF('./happy-board.glb')
    const glbAnimation5 = useGLTF('./walking2.glb')
    const glbAnimation6 = useGLTF('./running.glb')
    const glbAnimation7 = useGLTF('./flying.glb')
    const glbAnimation8 = useGLTF('./swimend.glb')
    const glbAnimation9 = useGLTF('./swimming.glb')

    //added to animation array
    animationArray.push(glbAnimation1.animations[0])
    animationArray.push(glbAnimation2.animations[0])
    animationArray.push(glbAnimation3.animations[0])
    animationArray.push(glbAnimation10.animations[0])
    animationArray.push(glbAnimation4.animations[0])
    animationArray.push(glbAnimation5.animations[0])
    animationArray.push(glbAnimation6.animations[0])
    animationArray.push(glbAnimation7.animations[0])
    animationArray.push(glbAnimation8.animations[0])
    animationArray.push(glbAnimation9.animations[0])

    //provide the animation array to use animation
    const animation = useAnimations(animationArray, playerAvatar.scene)

    console.log(animationArray);


    const page = useStateEngine((state) => state.page)// cause re render

    useLayoutEffect(() => {
        playerAvatar.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
    }, [playerAvatar.scene]);

    console.log(animation);
    useEffect(() => {
        setAnimation(animation)
        // const anima = animation?.actions?.[animation.clips[num].name]
        // anima?.play()
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
