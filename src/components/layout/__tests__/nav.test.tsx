import React from "react"
import { render, screen } from "@testing-library/react"
import { Nav } from "../nav"
import * as Gatsby from "gatsby"
import MatchMediaMock from "../../../../test/match-media-mock"
import { above } from "@/styles/media-query"

beforeEach(() => {
  jest.clearAllMocks()
})

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      routes: [
        { name: "about", path: "path1" },
        { name: "contact", path: "path2" },
      ],
    },
  },
}))

let matchMedia = null as any
describe("nav", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock()
  })

  afterEach(() => {
    matchMedia.clear()
  })
  test("renders correctly", () => {
    const mediaQuery = above.tabletL
    const firstListener = jest.fn()
    const secondListener = jest.fn()
    const mql = window.matchMedia(mediaQuery)

    mql.addListener((ev) => ev.matches && firstListener())
    mql.addListener((ev) => ev.matches && secondListener())

    matchMedia.useMediaQuery(mediaQuery)

    expect(firstListener).toHaveBeenCalledTimes(1)
    expect(secondListener).toHaveBeenCalledTimes(1)

    const isOpen = false
    render(<Nav isOpen={isOpen} />)

    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })
})
