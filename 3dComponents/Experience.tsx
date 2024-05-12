import { useStateEngine } from '@/store/statEngine'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import Plane from './Plane'
import PlayerAvatar from './PlayerAvatar'
import characterController from './characterController'
import { useKeyboardControls } from '@react-three/drei'
const Experience = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>(null)
    const planeRigidBody = useRef<RapierRigidBody>(null)
    const playerMeshRef = useRef<Mesh>(null)
    const [_, getKeys] = useKeyboardControls()

    const page = useStateEngine((state) => state.page)

    useEffect(() => {
        characterRigidbodyRef.current?.setEnabled(false)
        return () => {

        }
    }, [])

    useFrame((state, delta) => {
        if (!characterRigidbodyRef.current?.isEnabled() && page === 'skills') {
            characterRigidbodyRef.current?.setEnabled(true)
        }
        if (page === 'home') {
            page === 'home' && playerMeshRef.current?.setRotationFromAxisAngle(new Vector3(0, 1, 0), (state?.controls?.azimuthAngle * 1.5 - 0.5))

        }
        if (page === 'skills' && characterRigidbodyRef.current) {


            characterController({ state, delta, characterRigidbodyRef, playerMeshRef, getKeys })

            // state.camera.position.copy(new Vector3(characterRigidbodyRef.current?.translation().x - 2, characterRigidbodyRef.current?.translation().y + 1, characterRigidbodyRef.current?.translation().z + 2))
        }

    })
    return (
        <>

            {<RigidBody type='fixed' position={[0, -5, 0]}><Plane /></RigidBody>}
            {/* {<RigidBody position={[0, -5, 0]}><Plane /></RigidBody>} */}
            {/* <RigidBody> <Cube ref={cubeRef} /></RigidBody> */}
            {/* <RigidBody><Sphere /> </RigidBody> */}

            <RigidBody type='dynamic' ref={characterRigidbodyRef} position={[0.4, 0, 1]} colliders={false} lockRotations>
                <PlayerAvatar ref={playerMeshRef} position={[0, -0.99, 0]} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody>


        </>
    )
}
export default Experience