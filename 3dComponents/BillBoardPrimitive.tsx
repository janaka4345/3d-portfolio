import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh, MeshStandardMaterial } from 'three'
import { RigidBody } from '@react-three/rapier'
import { type Billboard } from '@/lib/billBoardData'

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
    const { nodes, materials } = useGLTF('/billboardSet6.glb') as GLTFResult


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
                                {/* <Suspense fallback={<h1 className='text-9xl text-white w-fit h-fit mx-auto mt-96'>loading..</h1>}> */}
                                <iframe style={{ height: '1140px', width: '1660px' }} src={billboard.iframeUrl} />
                                {/* </Suspense> */}
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
                                    <div style={{ height: '1300px', width: '850px' }} dangerouslySetInnerHTML={{ __html: first }} /></Suspense>


                            </Html>

                        </mesh>
                    </RigidBody>
                </>
            ))}
        </>
    )
}
export default BillBoardPrimitive