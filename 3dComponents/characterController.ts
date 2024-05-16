import { useCharacterAction } from "@/store/characterActionStore"
import { RootState } from "@react-three/fiber"
import { type RapierRigidBody } from "@react-three/rapier"
import { MutableRefObject, RefObject } from "react"
import { AnimationAction, Camera, Mesh, Quaternion, Vector3 } from "three"

let playerMesh: MutableRefObject<Mesh>
let characterRigidbody:
    | RefObject<RapierRigidBody>
    | MutableRefObject<RapierRigidBody>
console.log("character controller ran")

let activeAnimation = useCharacterAction.getState()

const currentPosition = new Vector3()
const currentLookAt = new Vector3()
const deceleration = new Vector3(-0.0005, -0.0001, -5.0)
const acceleration = new Vector3(1, 0.125, 10.0)
const velocity = new Vector3(0, 0, 0)

let currAction: AnimationAction

let prevAction: AnimationAction

const calculateIdealOffset = () => {
    const idealOffset = new Vector3(-1, 0.6, -3)
    idealOffset.applyQuaternion(playerMesh?.current?.quaternion!)
    idealOffset.add(characterRigidbody?.current?.translation()!)
    return idealOffset
}

const calculateIdealLookat = () => {
    const idealLookat = new Vector3(0, 2, 5)
    idealLookat.applyQuaternion(playerMesh?.current?.quaternion!)
    idealLookat.add(characterRigidbody?.current?.translation()!)
    return idealLookat
}

function updateCameraTarget(delta: number, camera: Camera) {
    const idealOffset = calculateIdealOffset()
    const idealLookat = calculateIdealLookat()

    const t = 1.0 - Math.pow(0.001, delta)

    currentPosition.lerp(idealOffset, t)
    currentLookAt.lerp(idealLookat, t)

    camera.position.copy(currentPosition)
}

// movement
const characterState = ({
    delta,
    camera,
}: {
    delta: number
    camera: Camera
}) => {
    const newVelocity = velocity
    const frameDeceleration = new Vector3(
        newVelocity.x * deceleration.x,
        newVelocity.y * deceleration.y,
        newVelocity.z * deceleration.z
    )
    frameDeceleration.multiplyScalar(delta)
    frameDeceleration.z =
        Math.sign(frameDeceleration.z) *
        Math.min(Math.abs(frameDeceleration.z), Math.abs(newVelocity.z))

    newVelocity.add(frameDeceleration)

    const controlObjectBody = characterRigidbody.current //check TODO
    const controlObjectMesh = playerMesh.current
    const _Q = new Quaternion()
    const _A = new Vector3()
    const _R = controlObjectMesh?.quaternion.clone()!

    const acc = acceleration.clone()
    // if (activeAnimation.run) {
    //     acc.multiplyScalar(2.0);
    // }

    // if (currAction === animations["dance"].clip) {
    //     acc.multiplyScalar(0.0);
    // }

    if (activeAnimation.forward) {
        newVelocity.z += acc.z * delta
    }
    if (activeAnimation.back) {
        newVelocity.z -= acc.z * delta
    }
    if (activeAnimation.left) {
        _A.set(0, 1, 0)
        _Q.setFromAxisAngle(_A, 4.0 * Math.PI * delta * acceleration.y)
        _R.multiply(_Q)
    }
    if (activeAnimation.right) {
        _A.set(0, 1, 0)
        _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * delta * acceleration.y)
        _R.multiply(_Q)
    }

    controlObjectMesh?.quaternion.copy(_R)

    const oldPosition = new Vector3()
    const newPosition = new Vector3()
    oldPosition.copy(controlObjectBody?.translation()!)

    // console.log(oldPosition);//DELETE

    const mforward = new Vector3(0, 0, 1)
    mforward.applyQuaternion(controlObjectMesh?.quaternion!)
    mforward.normalize()
    // console.log(mforward);//DELETE
    // console.log(newVelocity);//DELETE

    const sideways = new Vector3(1, 0, 0)
    sideways.applyQuaternion(controlObjectMesh?.quaternion!)
    sideways.normalize()

    sideways.multiplyScalar(newVelocity.x * delta)
    mforward.multiplyScalar(newVelocity.z * delta)

    newPosition.add(oldPosition)
    newPosition.add(mforward)
    newPosition.add(sideways)

    characterRigidbody?.current?.setTranslation(newPosition, true)
    updateCameraTarget(delta, camera)
}

export default function characterController({
    state,
    characterRigidbodyRef,
    playerMeshRef,
    delta,
}: {
    state: RootState
    delta: number
    characterRigidbodyRef:
        | RefObject<RapierRigidBody>
        | MutableRefObject<RapierRigidBody>
    playerMeshRef: MutableRefObject<Mesh>
}) {
    // prevAction = currAction;    //UNDO
    // console.log(state);
    // let [x, y, z] = [0, 0, 0]
    characterRigidbody = characterRigidbodyRef
    playerMesh = playerMeshRef
    activeAnimation = useCharacterAction.getState()

    // console.log(playerMesh)

    characterState({ delta, camera: state.camera })
    const idealLookat = calculateIdealLookat()

    state.camera.lookAt(idealLookat)
    state.camera.updateProjectionMatrix()
}
