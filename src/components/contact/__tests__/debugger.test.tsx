import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Debugger from "../debugger"

describe("debugger", () => {
  test("renders as expected", () => {
    const data = {
      values: {
        name: "name",
        email: "email",
      },
    }
    render(<Debugger data={data} />)

    // Initial state
    // state is set to false and we don't show any values
    expect(screen.queryByTestId("pre-debug")).not.toBeInTheDocument()
    expect(screen.queryByText(/name/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/email/i)).not.toBeInTheDocument()

    // we now click the button and values should be displayed
    fireEvent.click(screen.getByRole("button", { name: /show debug/i }))
    expect(screen.getByTestId("pre-debug")).toBeInTheDocument()
    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/email/i)).toBeInTheDocument()

    // We click again and we are back to initialState
    fireEvent.click(screen.getByRole("button", { name: /hide debug/i }))
    expect(screen.queryByTestId("pre-debug")).not.toBeInTheDocument()
    expect(screen.queryByText(/name/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/email/i)).not.toBeInTheDocument()
  })
})
