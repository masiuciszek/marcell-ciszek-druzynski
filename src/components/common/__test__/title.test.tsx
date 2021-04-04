import * as React from "react"
import { render, screen } from "@testing-library/react"
import Title from "../title"

describe("Title", () => {
  test("renders as expected", () => {
    const mainTitle = "mainTitle"
    const secondaryTitle = "secondayTitle"
    const className = "className"
    render(<Title mainTitle={mainTitle} secondaryTitle={secondaryTitle} className={className} />)
    expect(screen.getByText(mainTitle)).toBeInTheDocument()
    expect(screen.getByText(secondaryTitle)).toBeInTheDocument()
    expect(screen.getByTestId("page-title-component")).toHaveClass(className)
    // screen.debug()
  })
})
