'use client'
import { Page, useStateEngine } from "@/store/statEngine"
import { Button } from "../ui/button"

export const Navbar = () => {

    const setPage = useStateEngine((state) => state.setPage)
    const setState = useStateEngine.getState().setState
    const setPrevState = useStateEngine.getState().setPrevState

    const handleClick = (page: Page) => {
        setPage(page)
        switch (page) {
            case 'home':

                break;
            case 'skills':
                setState("walk")
                setPrevState("idle")
                break;

            default:
                break;
        }
    }

    return (
        <nav className="fixed z-30 top-0 left-0 flex gap-4 flex-row">
            <Button onClick={() => handleClick('home')} >home</Button >
            <Button onClick={() => handleClick('skills')} >skill town</Button >
            <Button onClick={() => handleClick('projects')} >project space</Button >
        </nav>
    )
}