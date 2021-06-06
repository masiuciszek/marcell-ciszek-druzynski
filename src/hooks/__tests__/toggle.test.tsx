import { renderHook, act } from "@testing-library/react-hooks"
import useToggle from "../toggle"

describe("useToggle", () => {
  test("should work correctly", () => {
    const { result } = renderHook(() => useToggle())

    // when the hooks first get initialized
    expect(result.current.state).toBeFalsy()
    expect(typeof result.current.setToFalse).toBe("function")
    expect(typeof result.current.setToTrue).toBe("function")
    expect(typeof result.current.toggle).toBe("function")

    // call the setToTrue function
    act(() => {
      result.current.setToTrue()
    })
    // we should have a truthy value
    expect(result.current.state).toBeTruthy()

    // call the setToFalse function
    act(() => {
      result.current.setToFalse()
    })
    // we should have a falsy value
    expect(result.current.state).toBeFalsy()

    // call the toggle function
    act(() => {
      result.current.toggle()
    })

    // we should have a truthy value
    expect(result.current.state).toBeTruthy()

    // call the toggle function
    act(() => {
      result.current.toggle()
    })

    // we should have a falsy value
    expect(result.current.state).toBeFalsy()
  })
})
