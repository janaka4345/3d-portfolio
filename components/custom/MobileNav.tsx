import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { type MenuItem } from "./Navbar"
import Socials from "./Socials"
import Email from "./Email"
import Message from "./Message"
export default function MobileNav({ menuItems, handleClick }: { menuItems: MenuItem[], handleClick: (item: MenuItem["triggerName"]) => void }) {
    return (
        <div className="block md:hidden">
            <Sheet >
                <SheetTrigger asChild>
                    <Button className="focus:left-0 touch-none" variant="none">
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
                <SheetContent className="flex flex-col " style={{
                    background: "radial-gradient(circle at 0px 0px, rgb(99, 102, 241, 1) 20%, rgba(14, 165, 233, 1) 50%, rgba(16, 185, 129, 1) 80%)"
                }}>
                    <div className="flex flex-col gap-4 py-4">
                        {menuItems.map((item) => (
                            <SheetClose key={item.name} asChild>
                                <Button
                                    onClick={() =>
                                        handleClick(item.triggerName)
                                    }
                                    className="text-right touch-none focus:left-0"
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
    )
}
