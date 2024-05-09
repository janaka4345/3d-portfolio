import { CameraControls } from "@react-three/drei"
import { Ref } from "react"
import { create } from "zustand"
type State = {
    camera: Ref<CameraControls> | null
    page: string
}

type Action = {
    setCameraRef: (cameraRef: State["camera"]) => void
    setPage: (page: State["page"]) => void
}

export const useStateEngine = create<State & Action>((set) => ({
    camera: null,
    page: "home",

    setCameraRef: (cameraRef) => set(() => ({ camera: cameraRef })),
    setPage: (page) => set(() => ({ page: page })),
}))
