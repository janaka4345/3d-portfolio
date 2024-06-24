/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Canvas } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        Props_Base_1: THREE.Mesh
        Props_Base_2: THREE.Mesh
        Props_Base_3: THREE.Mesh
        ['Node-Mesh001']: THREE.Mesh
        ['Node-Mesh001_1']: THREE.Mesh
        ['Node-Mesh001_2']: THREE.Mesh
        sidescreenScreen: THREE.Mesh
        billboard001: THREE.Mesh
        billboard002: THREE.Mesh
    }
    materials: {
        DarkGrey: THREE.MeshStandardMaterial
        Main: THREE.MeshStandardMaterial
        Accent: THREE.MeshStandardMaterial
        mat17: THREE.MeshStandardMaterial
        mat18: THREE.MeshStandardMaterial
        mat22: THREE.MeshStandardMaterial
        mat23: THREE.MeshStandardMaterial
        billbordScrren: THREE.MeshStandardMaterial
    }
}

export function BillBoardSet6Canvas(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/billboardSet6.glb') as GLTFResult

    const [first, setfirst] = useState<string | TrustedHTML>("")
    const canvasRef = useRef(null);

    useEffect(() => {

        const url = '/github-web'; // Replace with the target website
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const html = await response.text();

                // const cleanHtml = DOMPurify.sanitize(html);
                // const parser = new DOMParser();
                // const doc = parser.parseFromString(html, 'text/html');

                // console.log({ cleanHtml });
                setfirst(html)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Draw your desired content on the canvas context (ctx) here
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Custom Canvas Content', 10, 30);


        return () => {

        }
    }, [])

    const handleCollision = (padName: string) => {
        console.log('collisiob with pad :', padName);

    }

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group name="telepad" position={[-0.067, 0, -0.063]}>
                    <group name="Props_Base" position={[0.537, 0.101, 0.821]} scale={98.291}>
                        <mesh
                            name="Props_Base_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_1.geometry}
                            material={materials.DarkGrey}
                        />
                        <mesh
                            name="Props_Base_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_2.geometry}
                            material={materials.Main}
                        />
                        <mesh
                            name="Props_Base_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_3.geometry}
                            material={materials.Accent}
                        />
                    </group>
                </group>
                <group
                    name="billboard"
                    position={[1.746, 2.164, -1.469]}
                    rotation={[0, 1.571, 0]}
                    scale={[5.627, 5.627, 5.948]}>
                    <mesh
                        name="Node-Mesh001"
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001'].geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        name="Node-Mesh001_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_1'].geometry}
                        material={materials.mat18}
                    />
                    <mesh
                        name="Node-Mesh001_2"
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_2'].geometry}
                        material={materials.mat22}
                    />
                </group>
                <mesh
                    name="sidescreenScreen"
                    castShadow
                    receiveShadow
                    geometry={nodes.sidescreenScreen.geometry}
                    material={materials.mat23}
                    position={[-1.857, 3.652, -0.187]}
                    rotation={[Math.PI, -0.79, Math.PI]}
                    scale={[4.904, 4.311, 3.377]}
                />
                <mesh
                    // ref={geometryRef}
                    name="billboard001"
                    castShadow
                    receiveShadow
                    geometry={nodes.billboard001.geometry}
                    // material={materials.billbordScrren}
                    position={[1.767, 3.375, -1.305]}
                    rotation={[0, 1.571, 0]}
                    scale={[5.627, 5.627, 5.948]}
                >
                    <meshStandardMaterial color='black' />
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshBasicMaterial color="blue" />
                        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                                <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
                                <h1>loading</h1>
                            </div>
                        </div>
                    </Canvas>

                    {/* <Html
                        distanceFactor={0.2}
                        transform
                        center
                        position={[0, 0, 0]}
                        rotation={[0, -Math.PI / 2, 0]}
                    // occlude
                    >
                        <Suspense fallback={<h1 className='text-9xl text-white w-fit h-fit mx-auto mt-96'>loading..</h1>}>
                            <iframe style={{ height: '1140px', width: '1660px' }} src="https://basicdesign-nine.vercel.app/" />
                        </Suspense>
                    </Html> */}

                </mesh>
                <mesh
                    name="billboard002"
                    castShadow
                    receiveShadow
                    geometry={nodes.billboard002.geometry}
                    // material={materials.billbordScrren}
                    position={[-1.89, 3.65, -0.213]}
                    rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                    scale={5.532}
                >
                    <meshStandardMaterial color='black' />

                    {/* <Html
                        wrapperClass='htmll'
                        className='border-none overflow-y-scroll overflow-hidden'
                        transform
                        center
                        distanceFactor={0.2}
                        position={[0, 0, 0]}
                        rotation={[0, -1.5, 0]}
                    // occlude
                    >
                        <Suspense fallback={<h1 className='text-9xl text-white w-fit h-fit mx-auto mt-96'>loading..</h1>}>
                            <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} /></Suspense>

ks
                    </Html> */}

                </mesh>
            </group>
        </group>
    )
}

useGLTF.preload('/billboardSet6.glb')
