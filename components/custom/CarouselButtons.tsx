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
            <Button onClick={() => handleClick('dec')} className="touch-none   z-40 cursor-pointer text-4xl absolute w-fit h-fit left-6 top-1/2" >&lt;</Button>

            <Button onClick={() => handleClick('inc')} className="touch-none  z-40 cursor-pointer text-4xl absolute w-fit h-fit right-6 top-1/2" >&gt;</Button>

        </>
    )
}
export default CarouselButtons