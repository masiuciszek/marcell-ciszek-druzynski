import React from "react"
import { render, screen } from "@testing-library/react"
import { Nav } from "../nav"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          routes: [{ name: "name", path: "path" }],
        },
      },
    }),
  )
})

describe("nav", () => {
  test("renders correctly", () => {
    const isOpen = false
    render(<Nav isOpen={isOpen} />)

    screen.debug()
  })
})
