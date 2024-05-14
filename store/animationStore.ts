import { AnimationClip, AnimationMixer } from "three"
import { create } from "zustand"
type State = {
    animations: AnimationClip | AnimationMixer | null
}

type Action = {
    setAnimations: (animation: State["animations"]) => void
}

const useAnimationStore = create<State & Action>((set) => ({
    animations: null,
    setAnimations: (animation) => set(() => ({ animations: animation })),
}))
export { useAnimationStore }
