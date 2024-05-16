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

            <nav className="  fixed left-0 top-0 z-30 w-full bg-transparent">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <Button
                        onClick={() => handleClick("home")}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "flex items-center space-x-3 rtl:space-x-reverse"
                        )}
                    >
                        {/* <img src="" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center whitespace-nowrap text-base font-semibold lg:text-2xl ">
                            J
                        </span>
                    </Button>

                    <div className=" hidden w-auto md:block ">
                        <ul className="mt-0  flex   flex-row items-center  space-x-4  rounded-lg  p-0 font-medium lg:space-x-8 rtl:space-x-reverse ">
                            <li>
                                <a
                                    onClick={() => handleClick("home")}
                                    className="cursor-pointer rounded border-0 p-0 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 lg:text-lg "
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleClick("skills")}
                                    className=" cursor-pointer rounded border-0 p-0 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 lg:text-lg "
                                >
                                    Skill Town
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleClick("projects")}
                                    className=" cursor-pointer rounded border-0 p-0 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 lg:text-lg "
                                >
                                    Project Space
                                </a>
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
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
