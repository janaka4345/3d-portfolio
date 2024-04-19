import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { type Mesh } from 'three'
import Cube from './Cube'
import Plane from './Plane'
import Sphere from './Sphere'
const Experience = () => {
    const box = useRef<Mesh>(null!)
    useEffect(() => {
        // console.log(box.current);


        return () => {

        }
    }, [])

    useFrame((state, delta) => {
        // box.current.rotation.y += delta


    })
    return (
        <>
            <Plane />
            <Cube />
            <Sphere />

        </>
    )
}
export default Experience