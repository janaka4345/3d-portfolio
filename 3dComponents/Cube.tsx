
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime"
import { forwardRef } from "react"
import { type Mesh } from 'three'
const CubeComp = (props: HtmlProps, ref) => {
    return (
        <mesh ref={ref} rotation-y={Math.PI * 0.25} scale={1.5} position={[2, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    )
}

const Cube = forwardRef(CubeComp)
export default Cube