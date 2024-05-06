'use client'
import { LazyMotion, domAnimation, m } from "framer-motion"

const StartAnimation = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
                className='absolute  inset-0 w-[100svw] h-[100svh] bg-red-500 flex justify-center items-center'
            >
                <h1 className='w-fit text-4xl mx-auto uppercase '>Janaka Kariyawasam</h1>
            </m.div>
        </LazyMotion>

    )
}

export default StartAnimation