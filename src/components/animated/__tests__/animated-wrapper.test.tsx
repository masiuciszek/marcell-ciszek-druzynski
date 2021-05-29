import React from "react"
import { screen } from "@test-utils"
import { render } from "@testing-library/react"
import AnimatedWrapper from "../animated-wrapper"

describe("animated wrapper", () => {
  test("when isAnimated is set to true", () => {
    const className = "className"
    const options = {}
    render(
      <AnimatedWrapper isAnimated className={className} options={options}>
        <h1>content</h1>
      </AnimatedWrapper>,
    )

    expect(screen.getByText(/content/i)).toBeInTheDocument()
    expect(screen.getByTestId("animated-animatedWrapper")).toHaveClass(className)
  })

  test("when isAnimated is set to false", () => {
    const className = "className"
    const options = {}
    render(
      <AnimatedWrapper isAnimated={false} options={options} className={className}>
        <h1>content</h1>
      </AnimatedWrapper>,
    )

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
    expect(screen.queryByTestId("animated-animatedWrapper")).not.toBeInTheDocument()
  })
})
