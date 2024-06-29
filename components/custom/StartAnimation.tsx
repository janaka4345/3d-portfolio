"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"

const StartAnimation = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.h1
                initial={{ y: "0" }}
                animate={{ y: "-60dvh", transition: { duration: 3 } }}
                className="absolute bottom-0 left-0 right-0 top-0 z-[60] m-auto  h-fit w-fit text-center text-4xl uppercase "
            >
                Janaka Kariyawasam
            </m.h1>
            <m.div
                initial={{
                    x: "0",
                    opacity: 1
                }}
                animate={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 3 }
                }}

                className="absolute inset-0  z-50 flex h-[100svh] w-[100svw] items-center justify-center"
                style={{
                    background: "radial-gradient(circle at 0px 0px, rgb(99, 102, 241, 1) 20%, rgba(14, 165, 233, 1) 50%, rgba(16, 185, 129, 1) 80%)"
                }}
            ></m.div>
        </LazyMotion >
    )
}

export default StartAnimation
