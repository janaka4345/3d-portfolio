/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { Html, MeshPortalMaterial, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

import { useControls } from 'leva'

type GLTFResult = GLTF & {
    nodes: {
        Props_Base_1: THREE.Mesh
        Props_Base_2: THREE.Mesh
        Props_Base_3: THREE.Mesh
        ['Node-Mesh001']: THREE.Mesh
        ['Node-Mesh001_1']: THREE.Mesh
        ['Node-Mesh001_2']: THREE.Mesh
        ['Node-Mesh001_3']: THREE.Mesh
        ['Node-Mesh001_4']: THREE.Mesh
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
        mat12: THREE.MeshStandardMaterial
        ['mat24.001']: THREE.MeshStandardMaterial
        mat23: THREE.MeshStandardMaterial
        billbordScrren: THREE.MeshStandardMaterial
    }
}

export function BillBoardSet4(props: JSX.IntrinsicElements['group']) {
    const geometryRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>>()

    const htmlRef = useRef()
    // const { px, py, pz, rx, ry, rz, h, w } = useControls({
    //     px: {
    //         value: 4,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     py: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     pz: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     rx: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     ry: {
    //         value: -1.5,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     rz: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.01,
    //     },
    //     w: {
    //         value: 850,
    //         min: 600,
    //         max: 2000,
    //         step: 10,
    //     },
    //     h: {
    //         value: 1124,
    //         min: 800,
    //         max: 2000,
    //         step: 10,
    //     }
    // })

    const { nodes, materials } = useGLTF('/billboardSet4.glb') as GLTFResult

    const [first, setfirst] = useState<string | TrustedHTML>("")
    const [position, setposition] = useState({ x: 0, y: 0, z: 0 })


    useEffect(() => {
        console.log('hiya');
        // console.log({ geometryRef });
        // console.log({ htmlRef });

        // if (geometryRef.current) {
        //     const positions = geometryRef?.current?.geometry?.attributes?.position?.array;
        //     let minX, minY, minZ, maxX, maxY, maxZ;

        //     for (let i = 0; i < positions.length; i += 3) {
        //         const x = positions[i];
        //         const y = positions[i + 1];
        //         const z = positions[i + 2];

        //         if (minX === undefined || x < minX) minX = x;
        //         if (maxX === undefined || x > maxX) maxX = x;
        //         if (minY === undefined || y < minY) minY = y;
        //         if (maxY === undefined || y > maxY) maxY = y;
        //         if (minZ === undefined || z < minZ) minZ = z;
        //         if (maxZ === undefined || z > maxZ) maxZ = z;
        //     }

        //     // Calculate properties (e.g., center)
        //     const centerX = (minX + maxX) / 2;
        //     const centerY = (minY + maxY) / 2;
        //     const centerZ = (minZ + maxZ) / 2;
        //     setposition({ x: centerX, y: centerY, z: centerZ })

        //     console.log({ x: centerX, y: centerY, z: centerZ });


        //     // console.log('Geometry center:', centerX, centerY, centerZ);
        // }


        const url = 'http://localhost:3000/github-web'; // Replace with the target website
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


        return () => {

        }
    }, [])

    const handleCollision = () => {
        console.log('collisiob with pad');

    }
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <RigidBody onCollisionEnter={handleCollision} type="fixed"  >
                    <group name="telepad" position={[-0.067, 0, -0.063]}>
                        <group name="Props_Base" position={[0.062, 0.017, 0.062]} scale={9.357}>
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
                    </group></RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group name="billboard" position={[0.233, 0.167, -0.262]} rotation={[0, 1.571, 0]}>
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
                        <mesh
                            name="Node-Mesh001_3"
                            castShadow
                            receiveShadow
                            geometry={nodes['Node-Mesh001_3'].geometry}
                            material={materials.mat12}
                        />
                        <mesh
                            name="Node-Mesh001_4"
                            castShadow
                            receiveShadow
                            geometry={nodes['Node-Mesh001_4'].geometry}
                            material={materials['mat24.001']}
                        />
                    </group>
                    <mesh
                        name="sidescreenScreen"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen.geometry}
                        material={materials.mat23}
                        position={[-0.419, 0.48, -0.168]}
                        rotation={[Math.PI, -0.79, Math.PI]}
                        scale={[0.872, 0.766, 0.6]}
                    />

                    <mesh
                        name="billboard001"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard001.geometry}
                        // material={materials.billbordScrren}
                        position={[0.225, 0.327, -0.367]}
                        rotation={[0, 1.571, 0]}
                    >

                        <meshStandardMaterial color='red' />

                    </mesh>


                    <mesh
                        // ref={geometryRef}
                        name="billboard002"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard002.geometry}
                        // material={materials.billbordScrren}
                        position={[-0.574, 0.528, -0.024]}
                        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                        scale={0.983}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, -0.05, 0.21]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >

                            <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />


                        </Html>
                    </mesh>

                </RigidBody>
            </group>
        </group>
    )
}

useGLTF.preload('/billboardSet4.glb')
