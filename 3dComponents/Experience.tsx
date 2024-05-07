import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import Plane from './Plane'
import PlayerAvatar from './PlayerAvatar'
import { type RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import { Mesh, Vector3 } from 'three'
const Experience = () => {
    const playerRigidBody = useRef<RapierRigidBody>(null)
    const playerMeshRef = useRef<Mesh>(null)


    useEffect(() => {
        console.log(playerRigidBody);
        playerRigidBody.current?.setEnabled(false)

        return () => {

        }
    }, [])

    useFrame((state) => {

        playerMeshRef.current?.setRotationFromAxisAngle(new Vector3(0, 1, 0), (state?.controls?.azimuthAngle * 2 - 0.5))
    })
    return (
        <>
            {/* <RigidBody><Plane /></RigidBody> */}
            {/* <RigidBody> <Cube ref={cubeRef} /></RigidBody> */}
            {/* <RigidBody><Sphere /> </RigidBody> */}
            {/* <mesh>
                <planeGeometry args={[2, 2]} />
                <meshStandardMaterial color={'red'} />
            </mesh> */}
            <RigidBody ref={playerRigidBody} position={[0.4, 0, 1]}>
                <PlayerAvatar ref={playerMeshRef} position={[0, -0.99, 0]} />
            </RigidBody>


        </>
    )
}
export default Experience