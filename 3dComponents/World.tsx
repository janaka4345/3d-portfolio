"use client"
import TouchInput from "@/components/custom/TouchInput"
import { useStateEngine } from "@/store/statEngine"
import {
    CameraControls,
    KeyboardControls,
    KeyboardControlsEntry
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useMemo, useRef } from "react"
import { isMobile } from "react-device-detect"
import { MathUtils } from "three"
import Experience from "./Experience"
import Lights from "./Lights"

const World = () => {

    enum Controls {
        forward = "forward",
        back = "back",
        left = "left",
        right = "right",
        jump = "jump",
    }

    const map = useMemo<KeyboardControlsEntry<Controls>[]>(
        () => [
            { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
            { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
            { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
            { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
            { name: Controls.jump, keys: ["Space"] },
        ],
        []
    )

    const cameraControlsRef = useRef<CameraControls>(null)
    const page = useStateEngine((state) => state.page)

    useEffect(() => {
        cameraControlsRef.current?.reset()

        return () => { }
    }, [])

    return (
        // <StrictMode>//TODO
        <>

            {page != "home" && <TouchInput />}
            <KeyboardControls map={map}>
                <Suspense
                    fallback={
                        <div className="absolute left-1/2 top-1/2">
                            loading canvas ...
                        </div>
                    }
                >
                    <Canvas
                        style={{ touchAction: 'none', width: "100svw", height: "100svh" }}
                        camera={{
                            fov: 50,
                            near: 0.1,
                            far: 90,
                            position: [0, 0.8, 2.1],
                        }}
                    >
                        <CameraControls
                            ref={cameraControlsRef}
                            makeDefault
                            minDistance={2}
                            maxDistance={2.5}
                            minZoom={1}
                            maxZoom={2}
                            minPolarAngle={1.1}
                            maxPolarAngle={1.2}
                            minAzimuthAngle={0}
                            maxAzimuthAngle={0.3}
                            azimuthAngle={
                                isMobile ? 23 * MathUtils.DEG2RAD : undefined
                            }
                            distance={isMobile ? 3 : undefined}
                            mouseButtons={{
                                left: 1,
                                wheel: 16,
                                middle: 0,
                                right: 0,
                            }}
                            touches={{
                                one: 32,
                                two: 512,
                                three: 0,
                            }}
                            enabled={page === "home"}
                        />

                        <Physics
                        // debug
                        >
                            {/* <OrbitControls /> */}
                            {/* <Perf position="top-right" /> */}
                            <Lights />
                            <Experience />
                        </Physics>
                    </Canvas>
                </Suspense>
            </KeyboardControls>
        </>
        // </StrictMode>
    )
}
export default World
