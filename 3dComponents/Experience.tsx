import { useStateEngine } from "@/store/statEngine"
import { useFrame } from "@react-three/fiber"
import {
    CapsuleCollider,
    RigidBody,
    type RapierRigidBody,
} from "@react-three/rapier"
import { useEffect, useRef } from "react"
import {
    BufferGeometry,
    Material,
    NormalBufferAttributes,
    Object3DEventMap,
    Vector3,
    type Mesh,
} from "three"
import Plane from "./Plane"
// import PlayerAvatar from './PlayerAvatar'  //replace it with player2
import { useCharacterAction } from "@/store/characterActionStore"
import { Preload, useKeyboardControls } from "@react-three/drei"
import { isMobile } from "react-device-detect"
import Map from "./Map"
import PlayerAvatar from "./PlayerAvatar2"
import characterAnimationController from "./characterAnimationController"
import characterController from "./characterController"
const Experience = () => {
    const characterRigidbodyRef = useRef<RapierRigidBody>(null)
    const playerMeshRef =
        useRef<
            Mesh<
                BufferGeometry<NormalBufferAttributes>,
                Material | Material[],
                Object3DEventMap
            >
        >(null)
    const [_, getKeys] = useKeyboardControls()

    const page = useStateEngine((state) => state.page)
    const setActiveAction = useCharacterAction((state) => state.setAction)
    // const action = useCharacterAction()
    console.log("experience  renderd")

    console.log("experience ran")

    useEffect(() => {
        console.log("experience use effect ran")
        characterRigidbodyRef.current?.setEnabled(false)
        characterRigidbodyRef.current?.setTranslation(
            new Vector3(0.4, 0, 1),
            true
        )

        return () => {}
    }, [page])

    useFrame((state, delta) => {
        //controlle the animation of the character with state changes
        characterAnimationController(state)

        // console.log(animation);
        if (!characterRigidbodyRef.current?.isEnabled() && page === "skills") {
            characterRigidbodyRef.current?.setEnabled(true)
        }
        if (page === "home") {
            //@ts-ignore
            page === "home" &&
                playerMeshRef.current?.setRotationFromAxisAngle(
                    new Vector3(0, 1, 0),
                    state?.controls?.azimuthAngle * 1.5 - 0.5
                )
        }
        if (page != "home" && !isMobile) {
            setActiveAction({
                forward: getKeys().forward,
                back: getKeys().back,
                left: getKeys().left,
                right: getKeys().right,
                jump: getKeys().jump,
            }) //TODO typescript error fix
        }

        if (page === "skills" && characterRigidbodyRef.current) {
            // characterRigidbodyRef.current?.setEnabled(true)
            if (playerMeshRef.current) {
                //@ts-ignore
                characterController({
                    state,
                    delta,
                    characterRigidbodyRef,
                    playerMeshRef,
                }) //TODO typescript rrors
            }

            // state.camera.position.copy(new Vector3(characterRigidbodyRef.current?.translation().x - 2, characterRigidbodyRef.current?.translation().y + 1, characterRigidbodyRef.current?.translation().z + 2))
        }
        if (page === "projects") {
            characterRigidbodyRef.current?.setEnabled(true)
            //@ts-ignore
            characterController({
                state,
                delta,
                characterRigidbodyRef,
                playerMeshRef,
            }) //TODO typescript rrors
        }
    })
    return (
        <>
            {page === "skills" && (
                <RigidBody
                    type="fixed"
                    position={[-12, -5, 33]}
                    rotation={[0, Math.PI * 0.85, 0]}
                >
                    <Map />
                </RigidBody>
            )}
            {page === "projects" && (
                <RigidBody type="fixed" position={[0, -5, 0]}>
                    <Plane />
                </RigidBody>
            )}

            <RigidBody
                type="dynamic"
                ref={characterRigidbodyRef}
                colliders={false}
                lockRotations
            >
                <PlayerAvatar
                    ref={playerMeshRef}
                    position={[0, -0.99, 0]}
                    scale={[1, 0.9, 1]}
                />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody>
            <Preload all />
        </>
    )
}
export default Experience
