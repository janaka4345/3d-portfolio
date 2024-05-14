import { useAnimationStore } from "@/store/animationStore"
import { useCharacterAction } from "@/store/characterActionStore"
import { useStateEngine } from "@/store/statEngine"
import { RootState } from "@react-three/fiber"

const setPrevAction = useStateEngine.getState().setPrevAction
const setState = useStateEngine.getState().setState
const setPrevState = useStateEngine.getState().setPrevState

//variable declaration only once
let characterMove
let page
let animation
let currentState
let previousState
let prevAction
let currAction

let idleAnimationNumber = 0
let prevIdleAnimationNumber = -1

const characterAnimationController = (state: RootState) => {
    // get the  character moves with key presses
    characterMove = useCharacterAction.getState()
    //get the current page state
    page = useStateEngine.getState().page
    //get the animations from store
    animation = useAnimationStore.getState().animations

    //get the set animation and animation current /previous state from store

    currentState = useStateEngine.getState().state
    previousState = useStateEngine.getState().prevState

    prevAction = useStateEngine.getState().prevAction

    idleAnimationNumber = Math.floor((state.clock.getElapsedTime() * 0.1) % 3)

    if (page === "home" && idleAnimationNumber != prevIdleAnimationNumber) {
        // rotate  three idle animations
        prevIdleAnimationNumber != -1
            ? animation?.actions?.[
                  animation.clips[prevIdleAnimationNumber].name
              ].fadeOut(2)
            : null
        animation?.actions?.[animation.clips[idleAnimationNumber].name]
            .reset()
            .fadeIn(2)
            .play()
        setPrevAction(animation.clips[idleAnimationNumber].name)
        currentState != "idle" ? setState("idle") : null
        prevIdleAnimationNumber = idleAnimationNumber
    }

    if (
        page === "skills" &&
        currentState != previousState &&
        currentState === "walk"
    ) {
        animation?.actions?.[animation.clips[0].name].fadeOut(1)

        animation?.actions?.[animation.clips[5].name].reset().fadeIn(1).play()
        // setPrevAction(animation.clips[0].name)
        setPrevState("walk")
        prevIdleAnimationNumber = idleAnimationNumber
    }

    if (
        page === "skills" &&
        currentState != previousState &&
        currentState === "idle"
    ) {
        animation?.actions?.[animation.clips[5].name].fadeOut(1)

        animation?.actions?.[animation.clips[0].name].reset().fadeIn(1).play()
        // setPrevAction(animation.clips[5].name)
        setPrevState("idle")
        prevIdleAnimationNumber = idleAnimationNumber
    }

    // console.log({ currentState, previousState, prevAction })
    // console.log({ currentState, previousState })
    console.log(animation)
}
export default characterAnimationController
