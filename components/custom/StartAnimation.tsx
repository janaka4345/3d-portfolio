'use client'
import { LazyMotion, domAnimation, m } from "framer-motion"

const StartAnimation = () => {
    return (
        <>

            <LazyMotion features={domAnimation}>
                <m.h1 initial={{ y: "0" }} animate={{ y: "-600px", transition: { duration: 2 } }} className='absolute top-0 left-0 right-0 bottom-0 m-auto  w-fit h-fit z-50 text-4xl uppercase '>Janaka Kariyawasam</m.h1>
                <m.div
                    initial={{ x: "0" }}
                    animate={{ x: "-100%", transition: { duration: 3 } }}
                    className='absolute z-40  inset-0 w-[100svw] h-[100svh] bg-red-500 flex justify-center items-center'
                >
                </m.div>
            </LazyMotion></>

    )
}

export default StartAnimation