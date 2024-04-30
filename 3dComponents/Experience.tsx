import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import Plane from './Plane'
import PlayerAvatar from './PlayerAvatar'
import { RigidBody } from '@react-three/rapier'
const Experience = () => {

    useEffect(() => {

        return () => {

        }
    }, [])

    useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta
    })
    return (
        <>
            <RigidBody><Plane /></RigidBody>
            {/* <RigidBody> <Cube ref={cubeRef} /></RigidBody> */}
            {/* <RigidBody><Sphere /> </RigidBody> */}
            <RigidBody><PlayerAvatar /></RigidBody>


        </>
    )
}
export default Experience