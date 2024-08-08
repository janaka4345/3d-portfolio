'use client'
import World from "@/3dComponents/World"
import Hero from "@/components/custom/Hero"
import StartAnimation from "@/components/custom/StartAnimation"
import Loading from "@/components/skeletons/Loading"
// import { useStateEngine } from "@/store/statEngine";
// import { AnimatePresence } from "framer-motion";

import { Suspense, useEffect, useState } from "react"

export default function Home() {
    const [cue, setCue] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCue(true)
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <main className="relative h-[100dvh] w-[100svw] overflow-hidden bg-[url('http://localhost:3000/lebombo_placeholder.jpg')] bg-cover bg-blend-lighten">
            <StartAnimation />
            {cue && <Suspense
                fallback={
                    <Loading className='w-16 h-16 absolute left-1/2 top-1/2' />
                }
            >
                <Hero />
                <World />
            </Suspense>}
        </main>
    )
}
