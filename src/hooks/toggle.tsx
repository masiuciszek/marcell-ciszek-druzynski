import { useState } from "react"
import { produce } from "immer"
interface Toggle {
  state: boolean
  toggle: () => void
  setToTrue: () => void
  setToFalse: () => void
}

const useToggle = (initialState = false): Toggle => {
  const [state, setState] = useState(initialState)

  const setToTrue = (): void => {
    setState(true)
  }
  const setToFalse = (): void => {
    setState(false)
  }
  const toggle = (): void => {
    // setState((prev) => !prev)
    setState(produce((prev) => !prev))
  }

  return { state, toggle, setToTrue, setToFalse }
}

export default useToggle
