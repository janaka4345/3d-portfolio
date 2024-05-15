'use client'

import { useCharacterAction } from "@/store/characterActionStore";

const TouchInput = () => {
    const setAction = useCharacterAction((state) => state.setAction)
    const handleTouchDown = (action: string) => {
        // e.stopPropagation()
        // e.preventDefault();
        // console.log();
        switch (action) {
            case "up":

                setAction({ forward: true })
                break;

            case "down":
                setAction({ back: true })
                break;
            case "left":
                setAction({ left: true })
                break;
            case "right":
                console.log('right');
                setAction({ right: true })
                break;

            default:
                break;
        }
    }

    const handleTouchUp = (action: string) => {
        // e.stopPropagation()
        // e.preventDefault();

        switch (action) {
            case "up":

                setAction({ forward: false })
                break;

            case "down":
                setAction({ back: false })
                break;
            case "left":
                setAction({ left: false })
                break;
            case "right":
                console.log('right');
                setAction({ right: false })
                break;

            default:
                // setAction({ forward: false, back: false, left: false, right: false, jump: false })

                break;
        }
    }

    return (
        <div className="z-50 flex flex-row gap-4 fixed top-1/2 pointer-events-auto">
            <div onTouchStart={() => handleTouchDown("up")} onTouchEnd={() => handleTouchUp("up")} className="w-52 select-none pointer-events-auto cursor-pointer   h-52 bg-slate-500">up</div>
            <div onTouchStart={() => handleTouchDown("down")} onTouchEnd={() => handleTouchUp("down")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">down</div>
            <div onTouchStart={() => handleTouchDown("left")} onTouchEnd={() => handleTouchUp("left")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">left</div>
            <div onTouchStart={() => handleTouchDown("right")} onTouchEnd={() => handleTouchUp("right")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">right</div>
        </div>
    )
}
export default TouchInput