import { useStateEngine } from "@/store/statEngine"
import { useFrame } from "@react-three/fiber"
import {
    CapsuleCollider,
    RigidBody,
    type RapierRigidBody,
} from "@react-three/rapier"
import { Suspense, useEffect, useRef, useState } from "react"
import {
    BufferGeometry,
    Euler,
    Material,
    NormalBufferAttributes,
    Object3DEventMap,
    Vector3,
    type Mesh,
} from "three"
import Plane from "./Plane"
// import PlayerAvatar from './PlayerAvatar'  //replace it with player2
import { useCharacterAction } from "@/store/characterActionStore"
import { Html, Preload, useKeyboardControls } from "@react-three/drei"
import { isMobile } from "react-device-detect"
// import BillBoard from "./BillBoard"
import Map from "./Map"
import PlayerAvatar from "./PlayerAvatar2"
import characterAnimationController from "./characterAnimationController"
import characterController from "./characterController"
// import { BillboardSet } from "./BillboardSet"
// import { BillboardSet2 } from "./BillboardSet2"
// import { BillboardSet3 } from "./BillboardSet3"
// import { BillBoardSet4 } from "./BillBoardSet4"
// import { BillBoardSet5 } from "./BillBoardSet5"
// import { BillBoardSet6 } from "./BillBoardSet6"
// import { BillBoardSetMultiple } from "./BillBoardSetMultiple"
// import { BillBoardSetMultiple2 } from "./BillBoardSetMultiple2"
import { BillBoardSet6 } from "./BillBoardSet6"
// import { BillBoardSet5 } from "./BillBoardSet5"
// import { BillBoardSetMultiple3 } from "./BillBoardSetMultiple3"
const Experience = () => {
    const characterRigidbodyRef = useRef<RapierRigidBody>(null)
    // const billboardRef = useRef<RapierRigidBody>(null)
    const [caroasoul, setCaroasoul] = useState(1)
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
    // console.log("experience  renderd")

    // console.log("experience ran")

    const handleClick = () => {
        setCaroasoul(prev => prev + 1)
    }

    useEffect(() => {
        // console.log("experience use effect ran")
        characterRigidbodyRef.current?.setEnabled(false)
        characterRigidbodyRef.current?.setTranslation(
            new Vector3(0.4, 0, 1),
            true
        )
        // console.log(page, characterRigidbodyRef.current?.translation());
        // console.log(billboardRef);

        // console.log(page, playerMeshRef.current);

        return () => { }
    }, [page])

    useFrame((state, delta) => {
        //controlle the animation of the character with state changes
        characterAnimationController(state)

        // console.log(animation);
        if (!characterRigidbodyRef.current?.isEnabled() && page === "skills") {
            characterRigidbodyRef.current?.setEnabled(true)
        }
        if (page === "home") {
            // page === "home" &&
            playerMeshRef.current?.setRotationFromAxisAngle(
                new Vector3(0, 1, 0),
                //@ts-ignore
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
                characterController({
                    state,
                    delta,
                    characterRigidbodyRef,
                    //@ts-ignore
                    playerMeshRef,
                }) //TODO typescript rrors
            }

            // state.camera.position.copy(new Vector3(characterRigidbodyRef.current?.translation().x - 2, characterRigidbodyRef.current?.translation().y + 1, characterRigidbodyRef.current?.translation().z + 2))
        }
        if (page === "projects" && characterRigidbodyRef.current) {
            characterRigidbodyRef.current?.setEnabled(true)
            if (playerMeshRef.current) {
                characterController({
                    state,
                    delta,
                    characterRigidbodyRef,
                    //@ts-ignore
                    playerMeshRef,
                }) //TODO typescript rrors
            }

        }
    })
    return (
        <>
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
                <>
                    <RigidBody type="fixed" position={[0, -5, 0]}>
                        <Plane />
                    </RigidBody>
                    {/* <BillBoardSet4 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} scale={7} /> */}
                    {/* <BillBoardSet5 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} /> */}
                    |
                    {caroasoul === 1 && <Suspense >
                        <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense>}
                    {caroasoul === 2 && <Suspense >
                        <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense>}
                    {caroasoul === 3 && <Suspense >
                        <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense>}
                    {caroasoul === 4 && <Suspense >
                        <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense>}
                    {caroasoul === 5 && <Suspense >
                        <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense>}
                    <Html position={[3, -6, 10]}>
                        <button onClick={handleClick}>Clcic</button>
                    </Html>

                    {/* <BillBoardSetMultiple2 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} /> */}
                    {/* <Suspense >
                        <BillBoardSetMultiple3 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                    </Suspense> */}

                </>

            )}

            <Preload all />
        </>
    )
}
export default Experience
