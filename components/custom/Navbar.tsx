'use client'
import { useStateEngine } from "@/store/statEngine"
import { Button } from "../ui/button"

export const Navbar = () => {


    const setPage = useStateEngine((state) => state.setPage)


    return (
        <nav className="fixed z-30 top-0 left-0 flex gap-4 flex-row">
            <Button onClick={() => setPage('home')} >home</Button >
            <Button onClick={() => setPage('skills')} >skills</Button >
        </nav>
    )
}