import { CameraControls } from "@react-three/drei"
import { Ref } from "react"
import { create } from "zustand"

type State = {
    camera: Ref<CameraControls> | null
    page: string
    state: "idle" | "walk" | "run" | "fly" | "flyIdle"
    prevState: State["state"] | null
    prevAction: string | null
    currAction: string | null
}

type Action = {
    setCameraRef: (cameraRef: State["camera"]) => void
    setPage: (page: State["page"]) => void
    setState: (newState: State["state"]) => void
    setPrevState: (prevNewState: State["state"]) => void
    setPrevAction: (action: State["prevAction"]) => void
    setCurrAction: (action: State["currAction"]) => void
}

export const useStateEngine = create<State & Action>((set) => ({
    camera: null,
    page: "home",
    state: "idle",
    prevState: null,

    prevAction: null,
    currAction: null,

    setCameraRef: (cameraRef) => set(() => ({ camera: cameraRef })),
    setPage: (page) => set(() => ({ page: page })),
    setState: (newState) => set(() => ({ state: newState })),
    setPrevState: (prevNewState) => set(() => ({ prevState: prevNewState })),

    setPrevAction: (action) => set(() => ({ prevAction: action })),
    setCurrAction: (action) => set(() => ({ currAction: action })),
}))
