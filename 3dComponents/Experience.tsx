import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { type Mesh } from 'three'
import Cube from './Cube'
import Plane from './Plane'
import Sphere from './Sphere'
import Player from './Player'
const Experience = () => {
    const cubeRef = useRef<Mesh>(null!)
    const three = useThree()
    useEffect(() => {
        // console.log(cubeRef.current);
        // console.log({ three });



        return () => {

        }
    }, [])

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
    })
    return (
        <>
            <Plane />
            <Cube ref={cubeRef} />
            <Sphere />
            <Player />

        </>
    )
}
export default Experience