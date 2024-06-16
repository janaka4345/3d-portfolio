/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh, MeshStandardMaterial } from 'three'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
    nodes: {
        Props_Base_1: Mesh
        Props_Base_2: Mesh
        Props_Base_3: Mesh
        ['Node-Mesh001']: Mesh
        ['Node-Mesh001_1']: Mesh
        ['Node-Mesh001_2']: Mesh
        sidescreenScreen003: Mesh
        billboard010: Mesh
        billboard011: Mesh
        sidescreenScreen004: Mesh
        billboard013: Mesh
        billboard014: Mesh
        sidescreenScreen: Mesh
        billboard001: Mesh
        billboard002: Mesh
        sidescreenScreen005: Mesh
        billboard016: Mesh
        billboard017: Mesh
        sidescreenScreen001: Mesh
        billboard004: Mesh
        billboard005: Mesh
        sidescreenScreen002: Mesh
        billboard007: Mesh
        billboard008: Mesh
    }
    materials: {
        DarkGrey: MeshStandardMaterial
        Main: MeshStandardMaterial
        Accent: MeshStandardMaterial
        mat17: MeshStandardMaterial
        mat18: MeshStandardMaterial
        mat22: MeshStandardMaterial
        mat23: MeshStandardMaterial
        billbordScrren: MeshStandardMaterial
    }
}

export function BillBoardSetMultiple2(props: JSX.IntrinsicElements['group']) {

    // const geometryRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()

    // const htmlRef = useRef()
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

    const [first, setfirst] = useState<string | TrustedHTML>("")

    const { nodes, materials } = useGLTF('/billboardSetmultiple.glb') as GLTFResult

    useEffect(() => {
        console.log('hiya');
        // console.log({ geometryRef });
        // console.log({ htmlRef });

        // TO Find the position of the bill board

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
        //     // setposition({ x: centerX, y: centerY, z: centerZ })

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

    const handleCollision = (padName: string) => {
        console.log('collisiob with pad :', padName);

    }

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <RigidBody onCollisionEnter={() => handleCollision('telepad003')} type="fixed"  >
                    <group name="telepad003" position={[17.088, 0, 7.898]} rotation={[0, -1.571, 0]}>
                        <group name="Props_Base003" position={[0.537, 0.101, 0.821]} scale={98.291}>
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group name="billboard009" position={[18.494, 2.164, 9.71]} scale={[5.627, 5.627, 5.948]}>
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
                        name="sidescreenScreen003"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen003.geometry}
                        material={materials.mat23}
                        position={[17.212, 3.652, 6.108]}
                        rotation={[-Math.PI, 0.781, -Math.PI]}
                        scale={[4.904, 4.311, 3.377]}
                    />
                    <mesh
                        name="billboard010"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard010.geometry}
                        // material={materials.billbordScrren}
                        position={[18.33, 3.375, 9.731]}
                        scale={[5.627, 5.627, 5.948]}
                    >

                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>
                        </Html>

                    </mesh>
                    <mesh
                        name="billboard011"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard011.geometry}
                        // material={materials.billbordScrren}
                        position={[17.238, 3.65, 6.075]}
                        rotation={[0, Math.PI / 4, 0]}
                        scale={5.532}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} /></Suspense>


                        </Html>

                    </mesh>
                </RigidBody>
                <RigidBody onCollisionEnter={() => handleCollision('telepad004')} type="fixed"  >
                    <group name="telepad004" position={[18.27, 0, 16.299]} rotation={[0, -1.571, 0]}>
                        <group name="Props_Base004" position={[0.537, 0.101, 0.821]} scale={98.291}>
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group name="billboard012" position={[19.676, 2.164, 18.111]} scale={[5.627, 5.627, 5.948]}>
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
                        name="sidescreenScreen004"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen004.geometry}
                        material={materials.mat23}
                        position={[18.394, 3.652, 14.509]}
                        rotation={[-Math.PI, 0.781, -Math.PI]}
                        scale={[4.904, 4.311, 3.377]}
                    />
                    <mesh
                        name="billboard013"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard013.geometry}
                        material={materials.billbordScrren}
                        position={[19.512, 3.375, 18.133]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe sandbox='allow-scripts' style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>


                        </Html>
                    </mesh>
                    <mesh
                        name="billboard014"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard014.geometry}
                        material={materials.billbordScrren}
                        position={[18.42, 3.65, 14.476]}
                        rotation={[0, Math.PI / 4, 0]}
                        scale={5.532}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} /></Suspense>


                        </Html>
                    </mesh>
                </RigidBody>
                <RigidBody onCollisionEnter={() => handleCollision('telepad')} type="fixed"  >
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
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
                        name="billboard001"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard001.geometry}
                        material={materials.billbordScrren}
                        position={[1.767, 3.375, -1.305]}
                        rotation={[0, 1.571, 0]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe sandbox='allow-scripts' style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>
                        </Html>
                    </mesh>
                    <mesh
                        name="billboard002"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard002.geometry}
                        material={materials.billbordScrren}
                        position={[-1.89, 3.65, -0.213]}
                        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                        scale={5.532}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />
                            </Suspense>


                        </Html>
                    </mesh>
                </RigidBody>
                <RigidBody onCollisionEnter={() => handleCollision('telepad005')} type="fixed"  >

                    <group name="telepad005" position={[-7.952, 0, 1.823]}>
                        <group name="Props_Base005" position={[0.537, 0.101, 0.821]} scale={98.291}>
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group
                        name="billboard015"
                        position={[-6.139, 2.164, 0.417]}
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
                        name="sidescreenScreen005"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen005.geometry}
                        material={materials.mat23}
                        position={[-9.742, 3.652, 1.699]}
                        rotation={[Math.PI, -0.79, Math.PI]}
                        scale={[4.904, 4.311, 3.377]}
                    />
                    <mesh
                        name="billboard016"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard016.geometry}
                        material={materials.billbordScrren}
                        position={[-6.118, 3.375, 0.581]}
                        rotation={[0, 1.571, 0]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe sandbox='allow-scripts' style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>
                        </Html>
                    </mesh>
                    <mesh
                        name="billboard017"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard017.geometry}
                        material={materials.billbordScrren}
                        position={[-9.775, 3.65, 1.673]}
                        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                        scale={5.532}
                    ><meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />
                            </Suspense>


                        </Html></mesh>
                </RigidBody>
                <RigidBody onCollisionEnter={() => handleCollision('telepad001')} type="fixed"  >
                    <group name="telepad001" position={[8.045, 0, -2.328]}>
                        <group name="Props_Base001" position={[0.537, 0.101, 0.821]} scale={98.291}>
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group
                        name="billboard003"
                        position={[9.857, 2.164, -3.734]}
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
                        name="sidescreenScreen001"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen001.geometry}
                        material={materials.mat23}
                        position={[6.255, 3.652, -2.452]}
                        rotation={[Math.PI, -0.79, Math.PI]}
                        scale={[4.904, 4.311, 3.377]}
                    />
                    <mesh
                        name="billboard004"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard004.geometry}
                        material={materials.billbordScrren}
                        position={[9.879, 3.375, -3.57]}
                        rotation={[0, 1.571, 0]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe sandbox='allow-scripts' style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>
                        </Html>
                    </mesh>
                    <mesh
                        name="billboard005"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard005.geometry}
                        material={materials.billbordScrren}
                        position={[6.222, 3.65, -2.478]}
                        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                        scale={5.532}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />
                            </Suspense>


                        </Html>
                    </mesh>
                </RigidBody>
                <RigidBody onCollisionEnter={() => handleCollision('telepad002')} type="fixed"  >
                    <group name="telepad002" position={[14.955, 0, -0.654]} rotation={[0, -1.571, 0]}>
                        <group name="Props_Base002" position={[0.537, 0.101, 0.821]} scale={98.291}>
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
                </RigidBody>
                <RigidBody type="fixed" colliders='hull' >
                    <group name="billboard006" position={[16.361, 2.164, 1.159]} scale={[5.627, 5.627, 5.948]}>
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
                        name="sidescreenScreen002"
                        castShadow
                        receiveShadow
                        geometry={nodes.sidescreenScreen002.geometry}
                        material={materials.mat23}
                        position={[15.079, 3.652, -2.444]}
                        rotation={[-Math.PI, 0.781, -Math.PI]}
                        scale={[4.904, 4.311, 3.377]}
                    />
                    <mesh
                        name="billboard007"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard007.geometry}
                        material={materials.billbordScrren}
                        position={[16.197, 3.375, 1.18]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0.08, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <iframe sandbox='allow-scripts' style={{ height: '1080px', width: '1024px' }} src="https://basicdesign-nine.vercel.app/" />
                            </Suspense>
                        </Html>
                    </mesh>
                    <mesh
                        name="billboard008"
                        castShadow
                        receiveShadow
                        geometry={nodes.billboard008.geometry}
                        material={materials.billbordScrren}
                        position={[15.106, 3.65, -2.477]}
                        rotation={[0, Math.PI / 4, 0]}
                        scale={5.532}
                    >
                        <meshStandardMaterial color='black' />

                        <Html
                            wrapperClass='htmll'
                            className='border-none overflow-y-scroll overflow-hidden'
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.5, 0]}
                        // occlude
                        >
                            <Suspense fallback={<h1>loading..</h1>}>
                                <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />
                            </Suspense>


                        </Html>
                    </mesh>
                </RigidBody>
            </group>
        </group>
    )
}

useGLTF.preload('/billboardSetmultiple.glb')