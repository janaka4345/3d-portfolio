"use client"
import { useStateEngine } from "@/store/statEngine"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
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
                            x: "200%",
                            transition: { duration: 1.5 },
                        }}
                        className=" pointer-events-none absolute  z-30   mx-auto mt-8 h-[100svh] w-[100svw] bg-transparent  px-8 py-8 lg:mt-16 lg:h-[60svh] lg:w-[60svw] lg:px-16  lg:py-16  "
                    >
                        <div className="  ">
                            <div className="mr-auto place-self-center ">
                                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                                    I bring ideas to life, from DESIGN to
                                    DATABASE!
                                </h1>
                                <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                                    I'm a full-stack web developer passionate
                                    about creating beautiful and functional web
                                    experiences. Dive into my projects and let's
                                    chat about how I can help you build yours!
                                </p>
                                <a
                                    href="#"
                                    className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 pointer-events-auto mr-3 inline-flex cursor-pointer items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
                                >
                                    Email Me
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="pointer-events-auto inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                >
                                    Leave a Message
                                </a>
                            </div>
                        </div>
                    </m.section>
                </LazyMotion>
            )}
        </AnimatePresence>
    )
}

export default Hero
