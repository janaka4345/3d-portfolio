"use client"
import { useStateEngine } from "@/store/statEngine"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Email from "./Email"
import Message from "./Message"
const Hero = () => {
    const page = useStateEngine((state) => state.page)
    //animate presence?

    return (
        <AnimatePresence>
            {page === "home" && (
                <LazyMotion features={domAnimation}>
                    <m.section
                        initial={{ x: "-200%", opacity: 0 }}
                        animate={{
                            x: "0",
                            opacity: 1,
                            transition: { duration: 3 },
                        }}
                        exit={{
                            opacity: 0,
                            x: "300%",
                            transition: { duration: 3 },
                        }}
                        className=" pointer-events-none absolute  z-30   mx-auto mt-8 h-[100svh] w-[100svw] bg-transparent  px-8 py-8 lg:mt-16 lg:h-[60svh] lg:w-[60svw] lg:px-16  lg:py-16  "
                    >
                        <div className="mr-auto place-self-center ">
                            <h1 className="mb-4 max-w-2xl text-center text-4xl font-extrabold leading-none tracking-tight whitespace-normal  md:text-left md:text-5xl xl:text-6xl">
                                I bring IDEAS to LIFE
                                <br />
                                from
                                <br />
                                DESIGN to DATABASE!
                            </h1>
                            <p className="mb-6 max-w-[80dvw] text-center text-sm font-light text-secondary-foreground md:max-w-[60dvw] md:text-left md:text-lg lg:mb-8 lg:text-xl">
                                I'm a full-stack web developer passionate about
                                creating beautiful and functional web
                                experiences. Dive into my projects and let's
                                chat about how I can help you build yours!
                            </p>
                            <div className="flex flex-row justify-start  ">
                                <Email />
                                <Message />
                            </div>
                        </div>
                    </m.section>
                </LazyMotion>
            )}
        </AnimatePresence>
    )
}

export default Hero
