"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useStateEngine, type Page } from "@/store/statEngine"
import { Button, buttonVariants } from "../ui/button"
import Email from "./Email"
import Message from "./Message"
import Socials from "./Socials"

type MenuItem = {
    name: string
    triggerName: Page
}

const menuItems: MenuItem[] = [
    {
        name: "Home",
        triggerName: "home",
    },
    {
        name: "Skill City",
        triggerName: "skills",
    },
    {
        name: "Project Space",
        triggerName: "projects",
    },
]

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
        <nav className="  fixed left-0 top-0 z-30 w-full bg-transparent">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <Button
                    onClick={() => handleClick("home")}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "flex items-center space-x-3 rtl:space-x-reverse"
                    )}
                >
                    <span className="self-center whitespace-nowrap text-base font-semibold lg:text-2xl ">
                        J
                    </span>
                </Button>

                <div className=" hidden w-auto md:block ">
                    <ul className="mt-0  flex   flex-row items-center  space-x-4  rounded-lg  p-0 font-medium lg:space-x-8 rtl:space-x-reverse ">
                        {menuItems.map((item) => (
                            <li key={item.triggerName}>
                                <Button
                                    variant="none"
                                    onClick={() =>
                                        handleClick(item.triggerName)
                                    }
                                    className=" cursor-pointer rounded border-0 p-0 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 lg:text-lg "
                                >
                                    {item.name}
                                </Button>
                            </li>
                        ))}
                        <li>
                            <Message />
                        </li>
                        <Socials />
                    </ul>
                </div>
                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="none">
                                <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                            <div className="flex flex-col gap-4 py-4">
                                {menuItems.map((item) => (
                                    <SheetClose key={item.name} asChild>
                                        <Button
                                            onClick={() =>
                                                handleClick(item.triggerName)
                                            }
                                            className="text-right"
                                        >
                                            {item.name}
                                        </Button>
                                    </SheetClose>
                                ))}
                            </div>
                            <SheetClose asChild>
                                <Socials />
                            </SheetClose>
                            <SheetFooter className="mt-auto">

                                <SheetClose asChild>
                                    <Email />
                                </SheetClose>
                                <SheetClose asChild>
                                    <Message />
                                </SheetClose>


                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
