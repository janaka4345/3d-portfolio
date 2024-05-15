import { useAnimations } from "@react-three/drei"
import { create } from "zustand"
export type State = {
    animations: ReturnType<typeof useAnimations> | null
}

type Action = {
    setAnimations: (animation: State["animations"]) => void
}

const useAnimationStore = create<State & Action>((set) => ({
    animations: null,
    setAnimations: (animation) => set(() => ({ animations: animation })),
}))
export { useAnimationStore }
