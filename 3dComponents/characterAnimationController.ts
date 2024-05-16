import { useAnimationStore } from "@/store/animationStore"
import { useCharacterAction } from "@/store/characterActionStore"
import { useStateEngine } from "@/store/statEngine"
import { RootState } from "@react-three/fiber"

const setState = useStateEngine.getState().setState
const setPrevState = useStateEngine.getState().setPrevState
const setPrevPage = useStateEngine.getState().setPrevPage

//variable declaration only once
let characterMove
let page
let prevPage
let animation
let currentState
let previousState
let prevAction

let idleAnimationNumber = 0
let prevIdleAnimationNumber = -1

const characterAnimationController = (state: RootState) => {
    // get the  character moves with key presses
    characterMove = useCharacterAction.getState()
    //get the current page state
    page = useStateEngine.getState().page
    prevPage = useStateEngine.getState().prevPage
    //get the animations from store
    animation = useAnimationStore.getState().animations

    //get the set animation and animation current /previous state from store

    currentState = useStateEngine.getState().state
    previousState = useStateEngine.getState().prevState

    prevAction = useStateEngine.getState().prevAction

    idleAnimationNumber = Math.floor((state.clock.getElapsedTime() * 0.1) % 3)

    // change the character state based on player input
    if (
        (characterMove.forward ||
            characterMove.back ||
            characterMove.left ||
            characterMove.right) &&
        currentState != "walk"
    ) {
        console.log("state walk set")
        setState("walk")
        setPrevState("idle")
    }
    if (
        !characterMove.forward &&
        !characterMove.back &&
        !characterMove.left &&
        !characterMove.right &&
        currentState != "idle"
    ) {
        console.log("state idle set")

        setState("idle")
        setPrevState("walk")
    }

    // changing the character animations
    if (page === "home" && prevPage != null) {
        idleAnimationNumber = 0
        prevIdleAnimationNumber = -1
        setPrevPage(null)
    }

    if (page === "home" && idleAnimationNumber != prevIdleAnimationNumber) {
        console.log("animation controller run**********")

        // rotate  three idle animations
        prevIdleAnimationNumber != -1
            ? // @ts-ignore
              animation?.actions?.[
                  animation.clips[prevIdleAnimationNumber].name
              ].fadeOut(2)
            : null

        // @ts-ignore
        animation?.actions?.[animation.clips[idleAnimationNumber].name]
            .reset()
            .fadeIn(2)
            .play()

        currentState != "idle" ? setState("idle") : null
        prevIdleAnimationNumber = idleAnimationNumber
    }

    if (
        page === "skills" &&
        currentState != previousState &&
        currentState === "walk"
    ) {
        // @ts-ignore
        animation?.actions?.[animation.clips[0].name].fadeOut(1)

        // @ts-ignore
        animation?.actions?.[animation.clips[4].name].reset().fadeIn(1).play()
        // setPrevAction(animation.clips[0].name)
        setPrevState("walk")
        prevIdleAnimationNumber = idleAnimationNumber
    }

    if (
        page === "skills" &&
        currentState != previousState &&
        currentState === "idle"
    ) {
        // @ts-ignore
        animation?.actions?.[animation.clips[4].name].fadeOut(1)

        // @ts-ignore
        animation?.actions?.[animation.clips[0].name].reset().fadeIn(1).play()
        // setPrevAction(animation.clips[5].name)
        setPrevState("idle")
        prevIdleAnimationNumber = idleAnimationNumber
    }
}
export default characterAnimationController
