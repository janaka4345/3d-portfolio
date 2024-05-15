import { CameraControls } from "@react-three/drei"
import { Ref } from "react"
import { create } from "zustand"

export type Page = "load" | "home" | "skills" | "projects" | null

type State = {
    camera: Ref<CameraControls> | null
    page: Page
    prevPage: Page
    state: "idle" | "walk" | "run" | "fly" | "flyIdle"
    prevState: State["state"] | null
    prevAction: string | null
    currAction: string | null
}

type Action = {
    setCameraRef: (cameraRef: State["camera"]) => void
    setPage: (page: Page) => void
    setPrevPage: (page: Page) => void
    setState: (newState: State["state"]) => void
    setPrevState: (prevNewState: State["state"]) => void
    setPrevAction: (action: State["prevAction"]) => void
    setCurrAction: (action: State["currAction"]) => void
}

export const useStateEngine = create<State & Action>((set) => ({
    camera: null,

    page: "home",
    prevPage: null,

    state: "idle",
    prevState: null,

    prevAction: null,
    currAction: null,

    setCameraRef: (cameraRef) => set(() => ({ camera: cameraRef })),
    setPage: (page) => set((state) => ({ prevPage: state.page, page: page })),
    setPrevPage: (page) => set(() => ({ prevPage: page })),
    setState: (newState) => set(() => ({ state: newState })),
    setPrevState: (prevNewState) => set(() => ({ prevState: prevNewState })),

    setPrevAction: (action) => set(() => ({ prevAction: action })),
    setCurrAction: (action) => set(() => ({ currAction: action })),
}))
