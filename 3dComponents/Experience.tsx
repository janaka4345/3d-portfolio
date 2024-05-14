import { useStateEngine } from '@/store/statEngine'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { Vector3, type Mesh } from 'three'
import Plane from './Plane'
// import PlayerAvatar from './PlayerAvatar'  //replace it with player2
import { useCharacterAction } from '@/store/characterActionStore'
import { useKeyboardControls } from '@react-three/drei'
import { isMobile } from 'react-device-detect'
import PlayerAvatar from './PlayerAvatar2'
import characterAnimationController from './characterAnimationController'
import characterController from './characterController'
const Experience = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>(null)
    const playerMeshRef = useRef<Mesh>(null)
    const [_, getKeys] = useKeyboardControls()

    const page = useStateEngine((state) => state.page)
    const setActiveAction = useCharacterAction((state) => state.setAction)
    // const action = useCharacterAction()
    console.log('experience  renderd');
    const setState = useStateEngine.getState().setState
    const setPrevState = useStateEngine.getState().setPrevState



    useEffect(() => {
        console.log('experience use effect ran');
        characterRigidbodyRef.current?.setEnabled(false)
        characterRigidbodyRef.current?.setTranslation(new Vector3(0.4, 0, 1), true)


        return () => {

        }
    }, [page])

    // useEffect(() => {
    //     animation?.actions?.[animation.clips[0].name].play()
    // }, [])
    let prevNum = 0
    let currNum = 0
    useFrame((state, delta) => {
        // console.log('action', action);
        // if (prevNum === currNum) {
        //     animation?.actions?.[animation.clips[1].name].reset().play()

        //     // console.log(animation.mixer.stats.action);

        //     currNum = 1
        //     setPrevAction(animation?.clips[1].name)
        // }

        // if (currNum === 1 && state.clock.getElapsedTime() > 15) {
        //     animation?.actions?.[animation?.clips[1].name].fadeOut(0.2);
        //     animation?.actions?.[animation.clips[2].name].reset().play()
        //     // console.log(animation.mixer.stats.action);

        //     currNum = 2
        //     setPrevAction(animation?.clips[2].name)
        // }
        // console.log(prevAction);

        //controlle the animation of the character with state changes
        characterAnimationController(state)

        const currentState = useStateEngine.getState().state

        // console.log(animation);
        if (!characterRigidbodyRef.current?.isEnabled() && page === 'skills') {
            characterRigidbodyRef.current?.setEnabled(true)
        }
        if (page === 'home') {
            page === 'home' && playerMeshRef.current?.setRotationFromAxisAngle(new Vector3(0, 1, 0), (state?.controls?.azimuthAngle * 1.5 - 0.5))


            // if (currentState != 'idle') {
            //     setState('idle')
            // }

        }
        if (page != 'home' && !isMobile) {
            setActiveAction({
                forward: getKeys().forward,
                back: getKeys().back,
                left: getKeys().left,
                right: getKeys().right,
                jump: getKeys().jump,
            })//TODO typescript error fix

            if ((getKeys().forward || getKeys().back || getKeys().left || getKeys().right)) {
                console.log('state walk set');

                currentState != 'walk' ? setState('walk') : null
                currentState != 'walk' ? setPrevState('idle') : null
            }
            if (!getKeys().forward && !getKeys().back && !getKeys().left && !getKeys().right) {
                currentState != 'idle' ? console.log('state idle set') : null;

                currentState != 'idle' ? setState('idle') : null
                currentState != 'idle' ? setPrevState('walk') : null

            }
        }

        if (page === 'skills' && characterRigidbodyRef.current) {
            // setState('walk')

            characterController({ state, delta, characterRigidbodyRef, playerMeshRef }) //TODO typescript rrors

            // state.camera.position.copy(new Vector3(characterRigidbodyRef.current?.translation().x - 2, characterRigidbodyRef.current?.translation().y + 1, characterRigidbodyRef.current?.translation().z + 2))



        }


        // if (currNum != prevNum) {
        //     if (currNum === 4) {
        //         setState("walk")
        //     } else {
        //         setState("idle")
        //     }
        //     if (currentState === 'walk') {
        //         animation?.actions?.[animation.clips[0].name].fadeOut(0.5);
        //         animation?.actions?.[animation.clips[5].name].reset().play()
        //     }
        //     if (currentState === 'idle') {
        //         animation?.actions?.[animation.clips[5].name].fadeOut(0.2);
        //         animation?.actions?.[animation.clips[0].name].reset().play()
        //     }

        //     // console.log('lran');
        //     // setState("walk")
        //     prevNum = currNum
        // }

        // console.log(Math.floor(state.clock.getElapsedTime() * 0.1) % 7);
        // if (currentState != previousState && !prevAction) {
        // animation?.actions?.[`${prevAction}`].fadeOut(0.2);


        // if (prevAction === 'walk') {
        //     const ratio =
        //         currAction.getClip().duration / prevAction.getClip().duration;
        //     currAction.time = prevAction.time * ratio;
        // }

        // currAction.reset().play();
        // } else {
        // currAction.play();
        // }
    })
    return (
        <>

            {page === 'skills' && <RigidBody type='fixed' position={[0, -5, 0]}><Plane /></RigidBody>}

            <RigidBody type='dynamic' ref={characterRigidbodyRef} colliders={false} lockRotations>
                <PlayerAvatar ref={playerMeshRef} position={[0, -0.99, 0]} scale={[1, 0.9, 1]} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody>


        </>
    )
}
export default Experience