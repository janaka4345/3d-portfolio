import { create } from "zustand"
type State = {
    carousel: number
    carouselGithubLoading: boolean
    carouselWebsiteLoading: boolean
}

type Action = {
    setCarouselInc: () => void
    setCarouselDec: () => void
    setCarouselGithubLoading: (isLoading: boolean) => void
    setCarouselWebsiteLoading: (isLoading: boolean) => void
}

const useCarouselStore = create<State & Action>((set) => ({
    carousel: 0,
    carouselGithubLoading: true,
    carouselWebsiteLoading: true,
    setCarouselInc: () =>
        set((state) => {
            if (state.carousel >= 3) {
                return { carousel: 0 }
            }
            return { carousel: state.carousel + 1 }
        }),
    setCarouselDec: () =>
        set((state) => {
            if (state.carousel <= 0) {
                return { carousel: 3 }
            }
            return { carousel: state.carousel - 1 }
        }),
    setCarouselGithubLoading: (isLoading) =>
        set(() => ({ carouselGithubLoading: isLoading })),
    setCarouselWebsiteLoading: (isLoading) =>
        set(() => ({ carouselWebsiteLoading: isLoading })),
}))
export { useCarouselStore }
