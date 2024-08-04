import { useCarouselStore } from "@/store/carasoulStore"
import { Button } from "../ui/button"

const CarouselButtons = () => {
    const setCarasoulInc = useCarouselStore((state) => state.setCarouselInc)
    const setCarasoulDec = useCarouselStore((state) => state.setCarouselDec)

    const setCarouselWebsiteLoading = useCarouselStore((state) => state.setCarouselWebsiteLoading)
    const setCarouselGithubLoading = useCarouselStore((state) => state.setCarouselGithubLoading)

    const handleClick = (mode: string) => {
        setCarouselWebsiteLoading(true)
        setCarouselGithubLoading(true)
        if (mode === 'inc') {
            setCarasoulInc()
        }
        if (mode === 'dec') {
            setCarasoulDec()
        }
    }

    return (
        <>
            <Button onClick={() => handleClick('dec')} className="touch-none  w-28 py-2  z-40 cursor-pointer text-4xl absolute   h-fit left-6 top-1/2" >&lt;<span className="ml-3 text-sm text-wrap w-10">Prev Project</span></Button>

            <Button onClick={() => handleClick('inc')} className="touch-none w-28 py-2 z-40 cursor-pointer text-4xl absolute  h-fit right-6 top-1/2" ><span className="mr-3 text-sm text-wrap w-10">Next Project</span>&gt;</Button>

        </>
    )
}
export default CarouselButtons