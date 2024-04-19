import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { type Mesh } from 'three'
import Cube from './Cube'
import Plane from './Plane'
import Sphere from './Sphere'
const Experience = () => {
    const cubeRef = useRef<Mesh>(null!)
    useEffect(() => {
        console.log(cubeRef.current);


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

        </>
    )
}
export default Experience