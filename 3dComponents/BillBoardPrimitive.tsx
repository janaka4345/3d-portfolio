import { Html, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'
import { Mesh, MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'
import { type Billboard } from './BillBoardSetMultiple3'

type GLTFResult = GLTF & {
    nodes: {
        Props_Base_1: Mesh
        Props_Base_2: Mesh
        Props_Base_3: Mesh
        ['Node-Mesh001']: Mesh
        ['Node-Mesh001_1']: Mesh
        ['Node-Mesh001_2']: Mesh
        sidescreenScreen: Mesh
        billboard001: Mesh
        billboard002: Mesh

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

const BillBoardPrimitive = ({ first, billboards }: { first: string | TrustedHTML, billboards: Billboard[] }) => {
    console.log('primitive ran');
    const { nodes, materials } = useGLTF('/billboardSet6.glb') as GLTFResult

    // useEffect(() => {
    //     console.log('hiya');
    //     // console.log({ geometryRef });
    //     // console.log({ htmlRef });

    //     // TO Find the position of the bill board

    //     // if (geometryRef.current) {
    //     //     const positions = geometryRef?.current?.geometry?.attributes?.position?.array;
    //     //     let minX, minY, minZ, maxX, maxY, maxZ;

    //     //     for (let i = 0; i < positions.length; i += 3) {
    //     //         const x = positions[i];
    //     //         const y = positions[i + 1];
    //     //         const z = positions[i + 2];

    //     //         if (minX === undefined || x < minX) minX = x;
    //     //         if (maxX === undefined || x > maxX) maxX = x;
    //     //         if (minY === undefined || y < minY) minY = y;
    //     //         if (maxY === undefined || y > maxY) maxY = y;
    //     //         if (minZ === undefined || z < minZ) minZ = z;
    //     //         if (maxZ === undefined || z > maxZ) maxZ = z;
    //     //     }

    //     //     // Calculate properties (e.g., center)
    //     //     const centerX = (minX + maxX) / 2;
    //     //     const centerY = (minY + maxY) / 2;
    //     //     const centerZ = (minZ + maxZ) / 2;
    //     //     // setposition({ x: centerX, y: centerY, z: centerZ })

    //     //     console.log({ x: centerX, y: centerY, z: centerZ });


    //     //     // console.log('Geometry center:', centerX, centerY, centerZ);
    //     // }


    //     const url = 'http://localhost:3000/github-web'; // Replace with the target website
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const html = await response.text();

    //             // const cleanHtml = DOMPurify.sanitize(html);
    //             // const parser = new DOMParser();
    //             // const doc = parser.parseFromString(html, 'text/html');

    //             // console.log({ cleanHtml });
    //             setfirst(html)

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData()


    //     return () => {

    //     }
    // }, [])

    const handleCollision = (padName: string) => {
        console.log('collisiob with pad :', padName);

    }
    return (
        <>
            {billboards.map(billboard => (
                <>
                    <RigidBody onCollisionEnter={() => handleCollision(billboard.telepadName)} type="fixed"  >
                        <group name={billboard.telepadName} position={billboard.telepadPosition} rotation={billboard.telepadRotation}>
                            <group name="Props_Base003" position={billboard.base3position} scale={billboard.base3Scale}>
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
                        <group name="billboard009" position={billboard.board9position} rotation={billboard.board9Rotation} scale={billboard.board9Scale}>
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
                            position={billboard.sidescreenPosition}
                            rotation={billboard.sidescreenRotation}
                            scale={billboard.sidescreenScale}
                        />
                        <mesh
                            name="billboard001"
                            castShadow
                            receiveShadow
                            geometry={nodes.billboard001.geometry}
                            // material={materials.billbordScrren}
                            position={billboard.board001position}
                            scale={billboard.board001Scale}
                            rotation={billboard.board001Rotation}
                        >

                            <meshStandardMaterial color='black' />
                            <Html
                                distanceFactor={0.2}
                                transform
                                center
                                position={[0, 0, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            // occlude
                            >

                                <Suspense fallback={<h1 className='text-9xl text-white w-fit h-fit mx-auto mt-96'>loading..</h1>}>
                                    <iframe style={{ height: '1140px', width: '1660px' }} src={billboard.iframeUrl} />  </Suspense>
                            </Html>

                        </mesh>
                        <mesh
                            name="billboard002"
                            castShadow
                            receiveShadow
                            geometry={nodes.billboard002.geometry}
                            // material={materials.billbordScrren}
                            position={billboard.board002position}
                            rotation={billboard.board002Rotation}
                            scale={billboard.board002Scale}
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

                                <Suspense fallback={<h1 className='text-9xl text-white w-fit h-fit mx-auto mt-96'>loading..</h1>}>

                                    <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} />
                                </Suspense>


                            </Html>

                        </mesh>
                    </RigidBody>
                </>
            ))}
        </>
    )
}
export default BillBoardPrimitive