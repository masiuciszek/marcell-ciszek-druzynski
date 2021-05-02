import { useState } from "react"

interface Toggle {
  state: boolean
  toggle: () => void
  setTorTrue: () => void
  setTorFalse: () => void
}

const useToggle = (initialState = false): Toggle => {
  const [state, setState] = useState(initialState)

  const setTorTrue = (): void => {
    setState(true)
  }
  const setTorFalse = (): void => {
    setState(false)
  }
  const toggle = (): void => {
    setState((prev) => !prev)
  }

  return { state, toggle, setTorTrue, setTorFalse }
}

export default useToggle
