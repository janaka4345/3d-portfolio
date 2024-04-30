const Sphere = () => {
    return (
        <mesh castShadow position={[-2, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={'orange'} />

        </mesh>
    )
}

export default Sphere