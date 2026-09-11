'use client'
import World from "@/3dComponents/World"
import Hero from "@/components/custom/Hero"
import StartAnimation from "@/components/custom/StartAnimation"
import Loading from "@/components/skeletons/Loading"
import { Suspense, useEffect, useState } from "react"

export default function HomeClient() {
    const [cue, setCue] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCue(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <main className="relative h-[100dvh] w-[100svw] overflow-hidden bg-[url('http://localhost:3000/lebombo_placeholder.jpg')] bg-cover bg-blend-lighten">
            <StartAnimation />
            {cue && (
                <Suspense
                    fallback={
                        <Loading className="absolute left-1/2 top-1/2 h-16 w-16" />
                    }
                >
                    <Hero />
                    <World />
                </Suspense>
            )}
        </main>
    )
}
