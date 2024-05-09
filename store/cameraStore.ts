import { create } from "zustand"
type State = {
    camera: string | null
}

type Action = {
    setCameraRef: (cameraRef: State["camera"]) => void
}

const useCameraStore = create<State & Action>((set) => ({
    camera: null,
    setCameraRef: (cameraRef) => set(() => ({ camera: cameraRef })),
}))
export { useCameraStore }
