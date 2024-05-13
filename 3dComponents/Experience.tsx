import { useStateEngine } from '@/store/statEngine'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { type Mesh, Vector3 } from 'three'
import Plane from './Plane'
import PlayerAvatar from './PlayerAvatar'
// import PlayerAvatar from './PlayerAvatar2'
import characterController from './characterController'
import { useKeyboardControls } from '@react-three/drei'
import { useCharacterAction } from '@/store/characterActionStore'
import { isMobile } from 'react-device-detect';
const Experience = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>(null)
    const playerMeshRef = useRef<Mesh>(null)
    const [_, getKeys] = useKeyboardControls()

    const page = useStateEngine((state) => state.page)
    const setActiveAction = useCharacterAction((state) => state.setAction)
    // const action = useCharacterAction()

    useEffect(() => {
        console.log('experience ran');
        characterRigidbodyRef.current?.setEnabled(false)
        characterRigidbodyRef.current?.setTranslation(new Vector3(0.4, 0, 1), true)
        return () => {

        }
    }, [page])

    useFrame((state, delta) => {
        // console.log('action', action);

        if (!characterRigidbodyRef.current?.isEnabled() && page === 'skills') {
            characterRigidbodyRef.current?.setEnabled(true)
        }
        if (page === 'home') {
            page === 'home' && playerMeshRef.current?.setRotationFromAxisAngle(new Vector3(0, 1, 0), (state?.controls?.azimuthAngle * 1.5 - 0.5))

        }
        if (page != 'home' && !isMobile) {
            setActiveAction({
                forward: getKeys().forward,
                back: getKeys().back,
                left: getKeys().left,
                right: getKeys().right,
                jump: getKeys().jump,
            })//TODO typescript error fix

        }
        if (page === 'skills' && characterRigidbodyRef.current) {


            characterController({ state, delta, characterRigidbodyRef, playerMeshRef }) //TODO typescript rrors

            // state.camera.position.copy(new Vector3(characterRigidbodyRef.current?.translation().x - 2, characterRigidbodyRef.current?.translation().y + 1, characterRigidbodyRef.current?.translation().z + 2))
        }

    })
    return (
        <>

            {page === 'skills' && <RigidBody type='fixed' position={[0, -5, 0]}><Plane /></RigidBody>}
            {/* {<RigidBody position={[0, -5, 0]}><Plane /></RigidBody>} */}
            {/* <RigidBody> <Cube ref={cubeRef} /></RigidBody> */}
            {/* <RigidBody><Sphere /> </RigidBody> */}

            <RigidBody type='dynamic' ref={characterRigidbodyRef} colliders={false} lockRotations>
                <PlayerAvatar ref={playerMeshRef} position={[0, -0.99, 0]} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody>


        </>
    )
}
export default Experience