import { create } from "zustand"
type State = {
    page: string
}

type Action = {
    setPage: (page: State["page"]) => void
}

const usePageStore = create<State & Action>((set) => ({
    page: "home",
    setPage: (page) => set(() => ({ page: page })),
}))
export { usePageStore }
