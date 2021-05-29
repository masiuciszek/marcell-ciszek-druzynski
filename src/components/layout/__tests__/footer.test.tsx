import React from "react"
import { render, screen } from "@testing-library/react"
import * as Gatsby from "gatsby"
import { Footer } from "../footer"

beforeEach(() => {
  jest.clearAllMocks()
})

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: "title",
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

describe("footer", () => {
  test("should footer should render correctly", () => {
    render(<Footer />)

    expect(screen.getByTestId("footer-say-hi-to-me-on")).toBeInTheDocument()
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /name/i })).toHaveAttribute("href", "path")
  })
})
