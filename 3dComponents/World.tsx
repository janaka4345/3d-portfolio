'use client'
import { CameraControls, KeyboardControls, KeyboardControlsEntry } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
// import { Perf } from 'r3f-perf'
import TouchInput from "@/components/custom/TouchInput"
import { useStateEngine } from "@/store/statEngine"
import { Physics } from "@react-three/rapier"
import { Suspense, useEffect, useMemo, useRef } from "react"
import { isMobile } from "react-device-detect"
import Lights from "./Lights"



const World = () => {
    console.log('world renderd');

    enum Controls {
        forward = 'forward',
        back = 'back',
        left = 'left',
        right = 'right',
        jump = 'jump',
    }

    const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], [])

    const cameraControlsRef = useRef<CameraControls>(null)
    const page = useStateEngine((state) => state.page)

    useEffect(() => {
        cameraControlsRef.current?.reset()
        return () => {

        }
    },)


    return (
        // <StrictMode>//TODO
        <>
            {(page != 'home' && isMobile) && <TouchInput />}
            <KeyboardControls map={map}>
                <Suspense fallback={<div className="w-[100svw] h-[100svh] absolute bg-black">loading canvas ...</div>}>



                    <Canvas style={{ width: '100svw', height: '100svh' }}
                        camera={{ fov: 50, near: 0.1, far: 90, position: [0, 0.8, 2.1] }}
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
                            mouseButtons={
                                {
                                    left: 1,
                                    wheel: 16,
                                    middle: 0,
                                    right: 0
                                }
                            }
                            touches={{
                                one: 32,
                                two: 512,
                                three: 0
                            }}
                            enabled={page === 'home'}
                        />
                        {/* <OrbitControls /> */}


                        <Physics
                        //  debug 
                        >
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