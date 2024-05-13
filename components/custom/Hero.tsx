
import { LazyMotion, domAnimation, m } from "framer-motion"
const Hero = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ x: "-200%", opacity: 0 }}
                animate={{ x: '0', opacity: 1, transition: { duration: 3, } }}
                exit={{ opacity: 0, x: '200%', transition: { duration: 1.5 } }}
                className="absolute mt-16  z-30 bg-transparent pointer-events-none w-[60svw] h-[60svh] px-16 py-8 lg:py-16  mx-auto  ">
                <div className="  ">
                    <div className="mr-auto place-self-center ">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">I bring ideas to life, from DESIGN to DATABASE!</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I'm a full-stack web developer passionate about creating beautiful and functional web experiences. Dive into my projects and let's chat about how I can help you build yours!</p>
                        <a href="#" className="pointer-events-auto cursor-pointer inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Email Me
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="pointer-events-auto cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Leave a Message
                        </a>
                    </div>

                </div>
            </m.section>
        </LazyMotion>
    )
}

export default Hero