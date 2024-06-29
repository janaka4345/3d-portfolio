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
import MobileNav from "./MobileNav"

export type MenuItem = {
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
            case "projects":
                setState("walk")
                setPrevState("idle")
                break

            default:
                break
        }
    }

    return (
        <nav className="fixed  left-0 top-0 z-50 w-full bg-transparent">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
                <Button
                    onClick={() => handleClick("home")}
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "flex items-center space-x-3 focus:left-0  touch-none"
                    )}
                >
                    <span className="self-center whitespace-nowrap text-base font-semibold lg:text-2xl ">
                        J
                    </span>
                </Button>

                <div className=" hidden w-auto md:block ">
                    <ul className="mt-0  flex   flex-row items-center  space-x-4  rounded-lg  p-0 font-medium lg:space-x-8  ">
                        {menuItems.map((item) => (
                            <li key={item.triggerName}>
                                <Button
                                    variant="default"
                                    onClick={() =>
                                        handleClick(item.triggerName)
                                    }
                                    className="focus:left-0 touch-none cursor-pointer rounded border-0 p-0 px-3 py-2 text-sm lg:text-lg"
                                >
                                    {item.name}
                                </Button>
                            </li>
                        ))}
                        <li className="flex flex-row">
                            <Email />
                            <Message />
                        </li>
                        <Socials />
                    </ul>
                </div>
                <MobileNav menuItems={menuItems} handleClick={handleClick} />
            </div>
        </nav>
    )
}
