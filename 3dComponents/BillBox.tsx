/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useCarouselStore } from '@/store/carasoulStore'
import { Html, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useState } from 'react'
import { Mesh, MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

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
        floor: Mesh
        leftwall: Mesh
        rightwall: Mesh
        frontwall: Mesh
        backwall: Mesh
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
        Material: MeshStandardMaterial
    }
}

export type Data = {
    githubUrl: string,
    websiteUrl: string
}

export default function BillBox(props: JSX.IntrinsicElements['group'] & Data) {
    const { nodes, materials } = useGLTF('/billBox.glb') as GLTFResult

    const [html, setHtml] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const carouselGithubLoading = useCarouselStore((state) => state.carouselGithubLoading)
    const carouselWebsiteLoading = useCarouselStore((state) => state.carouselWebsiteLoading)
    const setCarouselWebsiteLoading = useCarouselStore((state) => state.setCarouselWebsiteLoading)
    const setCarouselGithubLoading = useCarouselStore((state) => state.setCarouselGithubLoading)

    console.log({ carouselGithubLoading, carouselWebsiteLoading });

    useEffect(() => {

        const url = props.githubUrl;
        // console.log(url);
        // Replace with the target website
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const html = await response.text();
                console.log(typeof html);
                setHtml(html)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
        return () => {

        }
    }, [props.githubUrl])

    const handleCollision = (collisionType: string) => {
        console.log('collisiob with pad :', collisionType);
        if (collisionType === 'in') {
            setOpen(true)
        }
        if (collisionType === 'out') {
            setOpen(false)
        }
    }

    const handleClick = () => {

        window.open('https://basicdesign-nine.vercel.app/', '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <Html>
                <Dialog open={open} >
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </Html>


            <group {...props} dispose={null}>
                <group name="Scene">
                    <RigidBody type='fixed' colliders='hull' onCollisionEnter={() => handleCollision('in')} >
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
                        // material={materials.billbordScrren}
                        position={[1.767, 3.375, -1.305]}
                        rotation={[0, 1.571, 0]}
                        scale={[5.627, 5.627, 5.948]}
                    >
                        <meshStandardMaterial color='black' />
                        <Html
                            zIndexRange={[0 - 10]}
                            wrapperClass='html2'
                            className='border-none overflow-y-scroll overflow-hidden relative '
                            distanceFactor={0.2}
                            transform
                            center
                            position={[0, 0, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                        // occlude
                        >
                            {carouselWebsiteLoading && <h1 style={{ height: '500px', width: '1660px' }} className='absolute z-50 text-6xl bg-white text-black '>Loading...</h1>}
                            <iframe style={{ height: '1140px', width: '1660px', border: 'none', overflow: 'auto' }}
                                onLoad={() => setCarouselWebsiteLoading(false)}
                                sandbox='allow-scripts allow-same-origin'
                                loading='lazy'
                                src={props.websiteUrl} ></iframe>

                        </Html>

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

                        <Html
                            zIndexRange={[0 - 10]}
                            wrapperClass='html1'
                            className='border-none overflow-y-scroll overflow-hidden relative '
                            transform
                            center
                            distanceFactor={0.2}
                            position={[0, 0, 0]}
                            rotation={[0, -1.55, 0]}
                        // occlude
                        >
                            {carouselGithubLoading && <h1 style={{ height: '500px', width: '850px' }} className='absolute z-50 text-6xl bg-white text-black '>Loading...</h1>}
                            <iframe style={{ height: '1300px', width: '850px', border: 'none' }}
                                srcDoc={html}
                                onLoad={() => setCarouselGithubLoading(false)}
                                // referrerPolicy='no-referrer'
                                // src='http://localhost:3000/github-web'

                                sandbox="allow-same-origin" //TODO fix the error of allow scripts not working
                                // sandbox='allow-scripts allow-same-origin'
                                // sandbox=''
                                loading='lazy'
                            // allow='scripts'
                            // sandbox='allow-scripts '
                            ></iframe>





                        </Html>

                    </mesh>
                    <RigidBody type="fixed" colliders='hull' onCollisionEnter={() => handleCollision('out')}>
                        <mesh
                            name="floor"
                            castShadow
                            receiveShadow
                            geometry={nodes.floor.geometry}
                            material={materials.Material}
                            position={[0, 0, 7.584]}
                            scale={-9.525}
                        />
                    </RigidBody>
                    <RigidBody type="fixed" colliders='hull'>

                        <mesh
                            name="leftwall"
                            castShadow
                            receiveShadow
                            geometry={nodes.leftwall.geometry}
                            material={materials.billbordScrren}
                            position={[-9.492, 10.965, -1.165]}
                            rotation={[0, 0, -Math.PI / 2]}
                            scale={10.964}
                        />
                        <mesh
                            name="rightwall"
                            castShadow
                            receiveShadow
                            geometry={nodes.rightwall.geometry}
                            material={materials.billbordScrren}
                            position={[9.496, -3.808, -1.165]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={10.964}
                        />
                        <mesh
                            name="frontwall"
                            castShadow
                            receiveShadow
                            geometry={nodes.frontwall.geometry}
                            material={materials.billbordScrren}
                            position={[0, 0.71, 8.36]}
                            rotation={[Math.PI / 2, 0, 0]}
                            scale={-9.525}
                        />
                        <mesh
                            name="backwall"
                            castShadow
                            receiveShadow
                            geometry={nodes.backwall.geometry}
                            material={materials.billbordScrren}
                            position={[0, 6.499, -1.883]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={-9.525}
                        />
                    </RigidBody>
                </group>
            </group></>
    )
}

useGLTF.preload('/billBox.glb')
