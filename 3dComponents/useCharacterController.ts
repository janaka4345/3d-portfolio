import { useKeyboardControls } from "@react-three/drei"
import { RootState } from "@react-three/fiber"
import { type RapierRigidBody } from "@react-three/rapier"
import { RefObject } from "react"
import { AnimationAction, Camera, Mesh, Quaternion, Vector3 } from "three"

type Animations = {
    [name: string]: {
        clip: AnimationAction
    }
}

export default function useCharacterController({
    state,
    characterRigidbodyRef,
    playerMeshRef,
    delta,
}: {
    state: RootState
    delta: number
    characterRigidbodyRef: RefObject<RapierRigidBody>
    playerMeshRef: RefObject<Mesh>
}) {
    const [_, getKeys] = useKeyboardControls()

    const currentPosition = new Vector3()
    const currentLookAt = new Vector3()
    const deceleration = new Vector3(-0.0005, -0.0001, -5.0)
    const acceleration = new Vector3(1, 0.125, 10.0)
    const velocity = new Vector3(0, 0, 0)

    const animations: Animations = {}

    // set current Action
    // let currAction = animations["idle"].clip;
    let currAction: AnimationAction

    let prevAction: AnimationAction

    const calculateIdealOffset = () => {
        const idealOffset = new Vector3(-1, 0.6, -3)
        idealOffset.applyQuaternion(playerMeshRef?.current?.quaternion!)
        idealOffset.add(characterRigidbodyRef?.current?.translation()!)
        return idealOffset
    }

    const calculateIdealLookat = () => {
        const idealLookat = new Vector3(0, 2, 5)
        idealLookat.applyQuaternion(playerMeshRef?.current?.quaternion!)
        idealLookat.add(characterRigidbodyRef?.current?.translation()!)
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
        forward,
        back,
        left,
        right,
        camera,
    }: {
        delta: number
        forward: boolean
        back: boolean
        left: boolean
        right: boolean
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

        const controlObjectBody = characterRigidbodyRef.current //check TODO
        const controlObjectMesh = playerMeshRef.current
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

        if (forward) {
            newVelocity.z += acc.z * delta
        }
        if (back) {
            newVelocity.z -= acc.z * delta
        }
        if (left) {
            _A.set(0, 1, 0)
            _Q.setFromAxisAngle(_A, 4.0 * Math.PI * delta * acceleration.y)
            _R.multiply(_Q)
        }
        if (right) {
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
        // console.log(mforward);//DELETE
        // console.log(sideways);//DELETE

        newPosition.add(oldPosition)
        newPosition.add(mforward)
        newPosition.add(sideways)
        // console.log(newPosition);

        // console.log(newPosition);

        // controlObjectBody.setTranslation(mforward, true);//adding the current position check
        // controlObjectBody.applyImpulse(sideways, true);//adding the current position check
        // controlObjectBody.setLinvel(mforward, true)
        // controlObjectBody.setLinvel(sideways, true);//adding the current position check

        characterRigidbodyRef?.current?.setTranslation(newPosition, true)
        updateCameraTarget(delta, camera)
    }
    // prevAction = currAction;    //UNDO
    // console.log(state);
    // let [x, y, z] = [0, 0, 0]
    const jump = getKeys().jump
    const forward = getKeys().forward
    const back = getKeys().back
    const left = getKeys().left
    const right = getKeys().right

    characterState({ delta, forward, back, left, right, camera: state.camera })
    const idealLookat = calculateIdealLookat()

    state.camera.lookAt(idealLookat)
    state.camera.updateProjectionMatrix()

    return true
}
