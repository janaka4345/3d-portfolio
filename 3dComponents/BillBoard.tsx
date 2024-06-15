import { useGLTF } from "@react-three/drei"

const BillBoard = () => {
    // const billBoardModel = useGLTF('./billBoard.glb')
    const billBoardModel = useGLTF('/billord1.glb')
    return (
        <primitive object={billBoardModel.scene} />
    )


}
export default BillBoard