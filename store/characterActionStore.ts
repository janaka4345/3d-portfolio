import { CameraControls, useKeyboardControls } from "@react-three/drei"
import { Ref } from "react"
import { create } from "zustand"
export type State = {
    forward?: boolean
    back?: boolean
    left?: boolean
    right?: boolean
    jump?: boolean
}
type Action = {
    setAction: (action: State) => void
}

export const useCharacterAction = create<State & Action>((set) => ({
    forward: false,
    back: false,
    left: false,
    right: false,
    jump: false,

    setAction: (newAction) => {
        set(() => ({
            forward: newAction.forward,
            back: newAction.back,
            left: newAction.left,
            right: newAction.right,
            jump: newAction.jump,
        }))
    },
}))
