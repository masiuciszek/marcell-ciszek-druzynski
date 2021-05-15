import * as React from "react"
import { render, screen } from "@testing-library/react"
import Pagination from "../pagination"

describe("Pagination", () => {
  test("renders as expected", () => {
    const previousPagePath = "previousPagePath"
    const pageNumber = 2
    const numberOfPages = 10
    const nextPagePath = "nextPagePath"

    render(
      <Pagination
        previousPagePath={previousPagePath}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        nextPagePath={nextPagePath}
      />,
    )
    const prevLink = screen.getByRole("link", { name: /prev 3 posts/i })
    expect(prevLink).toHaveAttribute("href", previousPagePath)

    const nextLink = screen.getByRole("link", { name: /3 more posts/i })
    expect(nextLink).toHaveAttribute("href", nextPagePath)
  })
})
