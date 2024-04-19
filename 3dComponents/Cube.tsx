function Cube() {
    return (
        <mesh rotation-y={Math.PI * 0.25} scale={1.5} position={[2, 0, 0]}>
            <boxGeometry />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    )
}
export default Cube