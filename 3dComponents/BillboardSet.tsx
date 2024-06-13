/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Props_Base_1: THREE.Mesh
        Props_Base_2: THREE.Mesh
        Props_Base_3: THREE.Mesh
        ['Node-Mesh']: THREE.Mesh
        ['Node-Mesh_1']: THREE.Mesh
        ['Node-Mesh_2']: THREE.Mesh
        ['Node-Mesh_3']: THREE.Mesh
        ['Node-Mesh001']: THREE.Mesh
        ['Node-Mesh001_1']: THREE.Mesh
        ['Node-Mesh001_2']: THREE.Mesh
        ['Node-Mesh001_3']: THREE.Mesh
        ['Node-Mesh001_4']: THREE.Mesh
        ['Node-Mesh001_5']: THREE.Mesh
    }
    materials: {
        DarkGrey: THREE.MeshStandardMaterial
        Main: THREE.MeshStandardMaterial
        Accent: THREE.MeshStandardMaterial
        mat23: THREE.MeshStandardMaterial
        mat21: THREE.MeshStandardMaterial
        mat15: THREE.MeshStandardMaterial
        mat24: THREE.MeshStandardMaterial
        mat17: THREE.MeshStandardMaterial
        ['mat21.001']: THREE.MeshStandardMaterial
        mat18: THREE.MeshStandardMaterial
        mat22: THREE.MeshStandardMaterial
        mat12: THREE.MeshStandardMaterial
        ['mat24.001']: THREE.MeshStandardMaterial
    }
}

export function BillboardSet(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/billboardSet.glb') as GLTFResult
    return (
        <group {...props} dispose={null}>
            <group>
                <group position={[-0.07, 0, -0.06]}>
                    <group position={[0.06, 0, 0.06]} scale={9.36}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_1.geometry}
                            material={materials.DarkGrey}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_2.geometry}
                            material={materials.Main}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Props_Base_3.geometry}
                            material={materials.Accent}
                        />
                    </group>
                </group>
                <group
                    position={[-0.39, 0.46, -0.23]}
                    rotation={[Math.PI, -0.79, Math.PI]}
                    scale={[0.87, 0.77, 0.6]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh'].geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh_1'].geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh_2'].geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh_3'].geometry}
                        material={materials.mat24}
                    />
                </group>
                <group position={[0.23, 0.15, -0.27]} rotation={[0, 1.57, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001'].geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_1'].geometry}
                        material={materials['mat21.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_2'].geometry}
                        material={materials.mat18}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_3'].geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_4'].geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Node-Mesh001_5'].geometry}
                        material={materials['mat24.001']}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/billboardSet.glb')
