"use client"

import dynamic from "next/dynamic"
import Loading from "@/components/skeletons/Loading"

const HomeClient = dynamic(() => import("./HomeClient"), {
    ssr: false,
    loading: () => (
        <main className="relative flex h-[100dvh] w-[100svw] items-center justify-center overflow-hidden bg-background">
            <Loading className="h-16 w-16" />
        </main>
    ),
})

export default function HomeLoader() {
    return <HomeClient />
}
