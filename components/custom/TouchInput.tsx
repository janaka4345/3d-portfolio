"use client"

import { useCharacterAction } from "@/store/characterActionStore"

const TouchInput = () => {
    const setAction = useCharacterAction((state) => state.setAction)
    const handleTouchDown = (action: string) => {
        // e.stopPropagation()
        // e.preventDefault();
        // console.log();
        switch (action) {
            case "up":
                setAction({ forward: true })
                break

            case "down":
                setAction({ back: true })
                break
            case "left":
                setAction({ left: true })
                break
            case "right":
                console.log("right")
                setAction({ right: true })
                break

            default:
                break
        }
    }

    const handleTouchUp = (action: string) => {
        // e.stopPropagation()
        // e.preventDefault();

        switch (action) {
            case "up":
                setAction({ forward: false })
                break

            case "down":
                setAction({ back: false })
                break
            case "left":
                setAction({ left: false })
                break
            case "right":
                console.log("right")
                setAction({ right: false })
                break

            default:
                // setAction({ forward: false, back: false, left: false, right: false, jump: false })

                break
        }
    }

    return (
        <div className="pointer-events-auto touch-none fixed bottom-0 right-0 z-50 grid grid-cols-3 grid-rows-2 gap-4">
            <div
                onTouchStart={() => handleTouchDown("up")}
                onTouchEnd={() => handleTouchUp("up")}
                className="pointer-events-auto h-10 w-10   col-start-2 col-end-3 row-start-1 row-end-2     bg-white"
            >
                <svg className="w-full h-full text-gray-800 mx-auto  " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                </svg>

            </div>
            <div
                onTouchStart={() => handleTouchDown("down")}
                onTouchEnd={() => handleTouchUp("down")}
                className="pointer-events-auto h-10 w-10 mx-auto  col-start-2 col-end-3 row-start-2 row-end-3   bg-white"
            >
                <svg className="w-full h-full text-gray-800 " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>

            </div>
            <div
                onTouchStart={() => handleTouchDown("left")}
                onTouchEnd={() => handleTouchUp("left")}
                className="pointer-events-auto h-10 w-10 mx-auto  col-start-1 col-end-2 row-start-2 row-end-3   bg-white"
            >
                <svg className="w-full h-full text-gray-800 " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>

            </div>
            <div
                onTouchStart={() => handleTouchDown("right")}
                onTouchEnd={() => handleTouchUp("right")}
                className="pointer-events-auto h-10 w-10 mx-auto    bg-white col-start-3 col-end-4 row-start-2 row-end-3"
            >
                <svg className="w-full h-full text-gray-800 " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>

            </div>
        </div>
    )
}
export default TouchInput
