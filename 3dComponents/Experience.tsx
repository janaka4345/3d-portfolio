import { useFrame } from '@react-three/fiber'
import { RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import PlayerAvatar from './PlayerAvatar'
import { Mesh, Vector3 } from 'three'
import { usePageStore } from '@/store/pageStore'
import Plane from './Plane'
const Experience = () => {

    const playerRigidBody = useRef<RapierRigidBody>(null)
    const planeRigidBody = useRef<RapierRigidBody>(null)
    const playerMeshRef = useRef<Mesh>(null)

    const page = usePageStore((state) => state.page)

    useEffect(() => {
        playerRigidBody.current?.setEnabled(false)
        return () => {

        }
    }, [])

    useFrame((state) => {
        page === 'home' && playerMeshRef.current?.setRotationFromAxisAngle(new Vector3(0, 1, 0), (state?.controls?.azimuthAngle * 1.5 - 0.5))

    })
    return (
        <>

            {/* {<RigidBody  position={[0, -5, 0]}><Plane /></RigidBody>} */}
            {/* {<RigidBody position={[0, -5, 0]}><Plane /></RigidBody>} */}
            {/* <RigidBody> <Cube ref={cubeRef} /></RigidBody> */}
            {/* <RigidBody><Sphere /> </RigidBody> */}

            <RigidBody ref={playerRigidBody} position={[0.4, 0, 1]}>
                <PlayerAvatar ref={playerMeshRef} position={[0, -0.99, 0]} />
            </RigidBody>


        </>
    )
}
export default Experience