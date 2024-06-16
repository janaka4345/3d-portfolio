// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import * as THREE from 'three'
// import React, { useRef, useMemo, useContext, createContext } from 'react'
// import { useGLTF, Merged } from '@react-three/drei'
// import { GLTF } from 'three-stdlib'

// type GLTFResult = GLTF & {
//     nodes: {
//         Props_Base_1: THREE.Mesh
//         Props_Base_2: THREE.Mesh
//         Props_Base_3: THREE.Mesh
//         // ['Node-Mesh001']: THREE.Mesh
//         // ['Node-Mesh001_1']: THREE.Mesh
//         // ['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen003: THREE.Mesh
//         billboard010: THREE.Mesh
//         billboard011: THREE.Mesh
//         // Props_Base_1: THREE.Mesh
//         // Props_Base_2: THREE.Mesh
//         // Props_Base_3: THREE.Mesh
//         //['Node-Mesh001']: THREE.Mesh
//         //['Node-Mesh001_1']: THREE.Mesh
//         //['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen004: THREE.Mesh
//         billboard013: THREE.Mesh
//         billboard014: THREE.Mesh
//         // Props_Base_1: THREE.Mesh
//         // Props_Base_2: THREE.Mesh
//         // Props_Base_3: THREE.Mesh
//         //['Node-Mesh001']: THREE.Mesh
//         //['Node-Mesh001_1']: THREE.Mesh
//         //['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen: THREE.Mesh
//         billboard001: THREE.Mesh
//         billboard002: THREE.Mesh
//         // Props_Base_1: THREE.Mesh
//         // Props_Base_2: THREE.Mesh
//         // Props_Base_3: THREE.Mesh
//         //['Node-Mesh001']: THREE.Mesh
//         //['Node-Mesh001_1']: THREE.Mesh
//         //['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen005: THREE.Mesh
//         billboard016: THREE.Mesh
//         billboard017: THREE.Mesh
//         // Props_Base_1: THREE.Mesh
//         // Props_Base_2: THREE.Mesh
//         // Props_Base_3: THREE.Mesh
//         //['Node-Mesh001']: THREE.Mesh
//         //['Node-Mesh001_1']: THREE.Mesh
//         //['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen001: THREE.Mesh
//         billboard004: THREE.Mesh
//         billboard005: THREE.Mesh
//         // Props_Base_1: THREE.Mesh
//         // Props_Base_2: THREE.Mesh
//         // Props_Base_3: THREE.Mesh
//         //['Node-Mesh001']: THREE.Mesh
//         //['Node-Mesh001_1']: THREE.Mesh
//         //['Node-Mesh001_2']: THREE.Mesh
//         sidescreenScreen002: THREE.Mesh
//         billboard007: THREE.Mesh
//         billboard008: THREE.Mesh
//     }
//     materials: {
//         DarkGrey: THREE.MeshStandardMaterial
//         Main: THREE.MeshStandardMaterial
//         Accent: THREE.MeshStandardMaterial
//         mat17: THREE.MeshStandardMaterial
//         mat18: THREE.MeshStandardMaterial
//         mat22: THREE.MeshStandardMaterial
//         mat23: THREE.MeshStandardMaterial
//         billbordScrren: THREE.MeshStandardMaterial
//     }
// }

// const context = createContext()
// export function Instances({ children, ...props }) {
//     const { nodes } = useGLTF('/billboardSetmultiple.glb') as GLTFResult
//     const instances = useMemo(
//         () => ({
//             PropsBase: nodes.Props_Base_1,
//             PropsBase1: nodes.Props_Base_2,
//             PropsBase2: nodes.Props_Base_3,
//             NodeMesh: nodes['Node-Mesh001'],
//             NodeMesh1: nodes['Node-Mesh001_1'],
//             NodeMesh2: nodes['Node-Mesh001_2'],
//             SidescreenScreen: nodes.sidescreenScreen003,
//             Billboard: nodes.billboard010,
//             Billboard1: nodes.billboard011,
//         }),
//         [nodes]
//     )
//     return (
//         <Merged meshes={instances} {...props}>
//             {(instances) => <context.Provider value={instances} children={children} />}
//         </Merged>
//     )
// }

// export function BillBoardSetMultiple(props: JSX.IntrinsicElements['group']) {
//     const instances = useContext(context)
//     return (
//         <group {...props} dispose={null}>
//             <group name="Scene">
//                 <group name="telepad003" position={[17.088, 0, 7.898]} rotation={[0, -1.571, 0]}>
//                     <group name="Props_Base003" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group name="billboard009" position={[18.494, 2.164, 9.71]} scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen003"
//                     position={[17.212, 3.652, 6.108]}
//                     rotation={[-Math.PI, 0.781, -Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard010"
//                     position={[18.33, 3.375, 9.731]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard011"
//                     position={[17.238, 3.65, 6.075]}
//                     rotation={[0, Math.PI / 4, 0]}
//                     scale={5.532}
//                 />
//                 <group name="telepad004" position={[18.27, 0, 16.299]} rotation={[0, -1.571, 0]}>
//                     <group name="Props_Base004" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group name="billboard012" position={[19.676, 2.164, 18.111]} scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen004"
//                     position={[18.394, 3.652, 14.509]}
//                     rotation={[-Math.PI, 0.781, -Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard013"
//                     position={[19.512, 3.375, 18.133]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard014"
//                     position={[18.42, 3.65, 14.476]}
//                     rotation={[0, Math.PI / 4, 0]}
//                     scale={5.532}
//                 />
//                 <group name="telepad" position={[-0.067, 0, -0.063]}>
//                     <group name="Props_Base" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group
//                     name="billboard"
//                     position={[1.746, 2.164, -1.469]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen"
//                     position={[-1.857, 3.652, -0.187]}
//                     rotation={[Math.PI, -0.79, Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard001"
//                     position={[1.767, 3.375, -1.305]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard002"
//                     position={[-1.89, 3.65, -0.213]}
//                     rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
//                     scale={5.532}
//                 />
//                 <group name="telepad005" position={[-7.952, 0, 1.823]}>
//                     <group name="Props_Base005" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group
//                     name="billboard015"
//                     position={[-6.139, 2.164, 0.417]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen005"
//                     position={[-9.742, 3.652, 1.699]}
//                     rotation={[Math.PI, -0.79, Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard016"
//                     position={[-6.118, 3.375, 0.581]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard017"
//                     position={[-9.775, 3.65, 1.673]}
//                     rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
//                     scale={5.532}
//                 />
//                 <group name="telepad001" position={[8.045, 0, -2.328]}>
//                     <group name="Props_Base001" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group
//                     name="billboard003"
//                     position={[9.857, 2.164, -3.734]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen001"
//                     position={[6.255, 3.652, -2.452]}
//                     rotation={[Math.PI, -0.79, Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard004"
//                     position={[9.879, 3.375, -3.57]}
//                     rotation={[0, 1.571, 0]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard005"
//                     position={[6.222, 3.65, -2.478]}
//                     rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
//                     scale={5.532}
//                 />
//                 <group name="telepad002" position={[14.955, 0, -0.654]} rotation={[0, -1.571, 0]}>
//                     <group name="Props_Base002" position={[0.537, 0.101, 0.821]} scale={98.291}>
//                         <instances.PropsBase name="Props_Base_1" />
//                         <instances.PropsBase1 name="Props_Base_2" />
//                         <instances.PropsBase2 name="Props_Base_3" />
//                     </group>
//                 </group>
//                 <group name="billboard006" position={[16.361, 2.164, 1.159]} scale={[5.627, 5.627, 5.948]}>
//                     <instances.NodeMesh name="Node-Mesh001" />
//                     <instances.NodeMesh1 name="Node-Mesh001_1" />
//                     <instances.NodeMesh2 name="Node-Mesh001_2" />
//                 </group>
//                 <instances.SidescreenScreen
//                     name="sidescreenScreen002"
//                     position={[15.079, 3.652, -2.444]}
//                     rotation={[-Math.PI, 0.781, -Math.PI]}
//                     scale={[4.904, 4.311, 3.377]}
//                 />
//                 <instances.Billboard
//                     name="billboard007"
//                     position={[16.197, 3.375, 1.18]}
//                     scale={[5.627, 5.627, 5.948]}
//                 />
//                 <instances.Billboard1
//                     name="billboard008"
//                     position={[15.106, 3.65, -2.477]}
//                     rotation={[0, Math.PI / 4, 0]}
//                     scale={5.532}
//                 />
//             </group>
//         </group>
//     )
// }

// useGLTF.preload('/billboardSetmultiple.glb')
