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
            <div>
                <Button onClick={() => handleClick('dec')} className="z-50 cursor-pointer text-9xl absolute w-fit h-fit left-0 top-1/2" >-1</Button>
            </div>
            <div>
                <Button onClick={() => handleClick('inc')} className="z-50 cursor-pointer text-9xl absolute w-fit h-fit right-0 top-1/2" >+1</Button>
            </div>
        </>
    )
}
export default CarouselButtons