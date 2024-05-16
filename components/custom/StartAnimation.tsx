"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"

const StartAnimation = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.h1
                initial={{ y: "0" }}
                animate={{ y: "-60dvh", transition: { duration: 3 } }}
                className="absolute bottom-0 left-0 right-0 top-0 z-50 m-auto  h-fit w-fit text-center text-4xl uppercase "
            >
                Janaka Kariyawasam
            </m.h1>
            <m.div
                initial={{ x: "0" }}
                animate={{ x: "-100%", transition: { duration: 3 } }}
                className="absolute inset-0  z-40 flex h-[100svh] w-[100svw] items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
            ></m.div>
        </LazyMotion>
    )
}

export default StartAnimation
