'use client'

import { useCharacterAction } from "@/store/characterActionStore";

const TouchInput = () => {
    const setAction = useCharacterAction((state) => state.setAction)
    const handleTouchDown = (e: TouchEvent, action: string) => {
        // e.stopPropagation()
        console.log(e);

        e.preventDefault();
        switch (action) {
            case "up":
                console.log('up');
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

    const handleTouchUp = (e: TouchEvent, action: string) => {
        // e.stopPropagation()
        e.preventDefault();

        switch (action) {
            case "up":
                console.log('up');
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
            <div onTouchStart={(e) => handleTouchDown(e, "up")} onTouchEnd={(e) => handleTouchUp(e, "up")} className="w-52 select-none pointer-events-auto cursor-pointer   h-52 bg-slate-500">up</div>
            <div onTouchStart={(e) => handleTouchDown(e, "down")} onTouchEnd={(e) => handleTouchUp(e, "down")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">down</div>
            <div onTouchStart={(e) => handleTouchDown(e, "left")} onTouchEnd={(e) => handleTouchUp(e, "left")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">left</div>
            <div onTouchStart={(e) => handleTouchDown(e, "right")} onTouchEnd={(e) => handleTouchUp(e, "right")} className="w-52 select-none pointer-events-auto cursor-pointer  h-52 bg-slate-500">right</div>
        </div>
    )
}
export default TouchInput