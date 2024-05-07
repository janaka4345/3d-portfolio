'use client'
import { usePageStore } from "@/store/pageStore"
import { Button } from "../ui/button"

export const Navbar = () => {


    const setPage = usePageStore((state) => state.setPage)


    return (
        <nav className="fixed z-30 top-0 left-0 flex gap-4 flex-row">
            <Button onClick={() => setPage('home')} >home</Button >
            <Button onClick={() => setPage('skills')} >skills</Button >
        </nav>
    )
}