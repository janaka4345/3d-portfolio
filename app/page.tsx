// 'use client'
import World from "@/3dComponents/World"
import Hero from "@/components/custom/Hero"
import StartAnimation from "@/components/custom/StartAnimation"
// import { useStateEngine } from "@/store/statEngine";
// import { AnimatePresence } from "framer-motion";

import { Suspense } from "react"

export default function Home() {
    console.log('project ran');

    return (
        <main className="relative h-[100dvh] w-[100svw] overflow-hidden">
            <StartAnimation />
            <Suspense
                fallback={
                    <h1 className="absolute left-1/2 top-1/2">loading...</h1>
                }
            >
                <Hero />
                <World />
            </Suspense>
        </main>
    )
}
