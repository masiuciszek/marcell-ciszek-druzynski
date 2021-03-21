import * as React from "react"
import { render, screen } from "@testing-library/react"
import Title from "../title"

describe("Title", () => {
  test("renders as expected", () => {
    expect(2 + 2).toBe(4)
    const mainTitle = "mainTitle"
    render(<Title mainTitle={mainTitle} />)
    screen.debug()
  })
})
