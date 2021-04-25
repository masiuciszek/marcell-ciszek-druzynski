import * as React from "react"
import { render, screen } from "@testing-library/react"
import StrokeWrapper from "../stroke-wrapper"

describe("StrokeWrapper", () => {
  test("renders as expected", () => {
    const helloWorld = "Hello world"
    const className = "className"
    render(
      <StrokeWrapper className={className}>
        <p>{helloWorld}</p>
      </StrokeWrapper>,
    )
    expect(screen.getByText(helloWorld)).toBeInTheDocument()
    expect(screen.getByTestId(/components-common-strokeWrapper/i)).toHaveClass(className)
  })
})
