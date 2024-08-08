"use client"
import { cn } from "@/lib/utils"
import { useStateEngine, type Page } from "@/store/statEngine"
import { Button, buttonVariants } from "../ui/button"
import Email from "./Email"
import Message from "./Message"
import MobileNav from "./MobileNav"
import Socials from "./Socials"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { toast } from "sonner"

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
                toast.info('Use Keyboard to move', { duration: 2500, position: 'bottom-center', })
                break
            case "projects":
                setState("walk")
                setPrevState("idle")
                toast.info('Use Keyboard to move', { duration: 2500, position: 'bottom-center' })

                break

            default:
                break
        }
    }

    return (
        <LazyMotion features={domAnimation}>
            <m.nav
                initial={{ y: "-20dvh" }}
                animate={{ y: "0", transition: { duration: 3, delay: 2 } }} className="fixed  left-0 top-0 z-50 w-full bg-transparent">
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

                    <div className=" hidden w-auto lg:block ">
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

                        </ul>
                    </div>
                    <div className="hidden w-auto lg:flex justify-center items-center">
                        <li className="flex flex-row">
                            <Email />
                            <Message />
                        </li>
                        <Socials />
                    </div>

                    <MobileNav menuItems={menuItems} handleClick={handleClick} />

                </div>
            </m.nav>
        </LazyMotion>
    )
}
