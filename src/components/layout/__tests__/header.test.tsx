import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "../header"
import * as Gatsby from "gatsby"
import MatchMediaMock from "../../../../test/match-media-mock"
import { above, below } from "@/styles/media-query"

beforeEach(() => {
  jest.clearAllMocks()
})

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      routes: [
        { name: "About", route: "/about" },
        { name: "Blog", route: "/blog" },
        { name: "Bites", route: "/bites" },
        { name: "Contact", route: "/contact" },
      ],
    },
  },
  contactList: {
    edges: [
      {
        node: {
          id: "id1",
          name: "name",
          path: "path",
        },
      },
    ],
  },
}))

describe("header", () => {
  let matchMedia: MatchMediaMock
  beforeAll(() => {
    matchMedia = new MatchMediaMock()
  })
  afterEach(() => {
    matchMedia.clear()
  })

  test("renders correctly when is above tablet", () => {
    const mediaQuery = above.tabletL
    matchMedia.useMediaQuery(mediaQuery)

    render(<Header />)

    // menu icon should not be present in the DOM
    expect(screen.queryByTestId("header-menu-icon")).not.toBeInTheDocument()
    // Main icon exists
    expect(screen.getByTestId("marcell-icon")).toBeInTheDocument()
    // Main nav list exists in the DOM
    expect(screen.getByTestId("main-nav-list-NavList")).toBeInTheDocument()

    // all the links exists
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute("href", "/blog")
    expect(screen.getByRole("link", { name: /bites/i })).toHaveAttribute("href", "/bites")
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact")
  })

  test("renders correctly when is below tablet", () => {
    const mediaQuery = below.tabletL
    matchMedia.useMediaQuery(mediaQuery)

    render(<Header />)

    // menu icon should be present in the DOM
    expect(screen.getByTestId("header-menu-icon")).toBeInTheDocument()
    // Main icon exists
    expect(screen.getByTestId("marcell-icon")).toBeInTheDocument()
    // Main nav list does NOT exists in the DOM,
    expect(screen.queryByTestId("main-nav-list-NavList")).not.toBeInTheDocument()

    // We fire a event on the menu button
    fireEvent.click(screen.getByTestId("header-menu-icon"))
    // Main nav list exists in the DOM
    expect(screen.getByTestId("main-nav-list-NavList")).toBeInTheDocument()
    // all the links exists
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute("href", "/blog")
    expect(screen.getByRole("link", { name: /bites/i })).toHaveAttribute("href", "/bites")
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact")
  })
})
