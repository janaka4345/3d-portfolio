"use client"
import { Page, useStateEngine } from "@/store/statEngine"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
    const setPage = useStateEngine((state) => state.setPage)
    const setState = useStateEngine.getState().setState
    const setPrevState = useStateEngine.getState().setPrevState

    const handleClick = (page: Page) => {
        setPage(page)
        switch (page) {
            case "home":
                break
            case "skills":
                setState("walk")
                setPrevState("idle")
                break

            default:
                break
        }
    }

    return (
        <>

            {/* <nav className="fixed left-0 top-0 z-30 flex flex-row gap-4">
                <Button onClick={() => handleClick("home")}>home</Button>
                <Button onClick={() => handleClick("skills")}>skill town</Button>
                <Button onClick={() => handleClick("projects")}>
                    project space
                </Button>
            </nav> */}




            <nav className="  w-full fixed left-0 top-0 z-30 bg-transparent">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Button onClick={() => handleClick("home")} className={cn(buttonVariants({ variant: 'ghost' }), "flex items-center space-x-3 rtl:space-x-reverse")}>
                        {/* <img src="" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">JANAKA</span>
                    </Button>

                    <div className=" w-auto  " >
                        <ul className="font-medium flex   p-0 mt-0  items-center  rounded-lg  flex-row space-x-8 rtl:space-x-reverse ">
                            <li>
                                <a onClick={() => handleClick("home")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 ">Home</a>
                            </li>
                            <li>
                                <a onClick={() => handleClick("skills")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 ">Skill Town</a>
                            </li>
                            <li>
                                <a onClick={() => handleClick("projects")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0 ">Project Space</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={buttonVariants({
                                        variant: "cta",
                                        size: "none",
                                    })}
                                >
                                    Leave a Message
                                </a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
