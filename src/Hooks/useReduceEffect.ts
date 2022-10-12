import React from 'react'

type ChangeEffectDeps = ReadonlyArray<unknown>

const useUpdateEffect: typeof React.useEffect = (effect, deps) => {
    const firstMount = React.useRef(true)

    React.useEffect(() => {
        if (firstMount.current) {
            firstMount.current = false
            return
        }
        effect()
    }, deps)
}

const usePrevious = (deps: ChangeEffectDeps): ChangeEffectDeps => {
    const prevRef = React.useRef(deps)
    React.useEffect(() => {
        prevRef.current = deps
    }, deps)
    return prevRef.current
}

const useReduceEffect = (
    effect: (...prevValue: ChangeEffectDeps) => void,
    deps: ChangeEffectDeps,
): void => {
    const prevValue = usePrevious(deps)

    useUpdateEffect(() => {
        effect(...prevValue)
    }, deps)
}

export default useReduceEffect
