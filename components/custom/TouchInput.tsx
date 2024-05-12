'use client'

import { useCharacterAction } from "@/store/characterActionStore";

const TouchInput = () => {
    const setAction = useCharacterAction((state) => state.setAction)
    const handleTouch = (action: string) => {
        switch (action) {
            case "up":
                console.log('up');
                setAction({ forward: true, back: false, left: false, right: false, jump: false })
                break;

            case "down":
                setAction({ forward: false, back: true, left: false, right: false, jump: false })
                break;
            case "left":
                setAction({ forward: false, back: false, left: true, right: false, jump: false })
                break;
            case "right":
                console.log('right');
                setAction({ forward: false, back: false, left: false, right: true, jump: false })
                break;

            default:
                break;
        }
    }
    return (
        <div className="z-50 flex flex-row gap-4 fixed top-1/2 pointer-events-auto">
            <div onClick={() => handleTouch("up")} className="w-8 pointer-events-auto cursor-pointer  h-8 bg-slate-500">up</div>
            <div onClick={() => handleTouch("down")} className="w-8 pointer-events-auto cursor-pointer  h-8 bg-slate-500">down</div>
            <div onClick={() => handleTouch("left")} className="w-8 pointer-events-auto cursor-pointer  h-8 bg-slate-500">left</div>
            <div onClick={() => handleTouch("right")} className="w-8 pointer-events-auto cursor-pointer  h-8 bg-slate-500">right</div>
        </div>
    )
}
export default TouchInput