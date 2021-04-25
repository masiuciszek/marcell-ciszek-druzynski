import * as React from "react"
import { render, screen } from "@testing-library/react"
import Navigation from "../navigation"

// interface NavigationProps {
//   previousPagePath: string
//   pageNumber: number
//   numberOfPages: number
//   nextPagePath: string
// }

describe("Navigation", () => {
  test("renders as expected", () => {
    const previousPagePath = "previousPagePath"
    const pageNumber = 2
    const numberOfPages = 10
    const nextPagePath = "nextPagePath"

    render(
      <Navigation
        previousPagePath={previousPagePath}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        nextPagePath={nextPagePath}
      />,
    )
    screen.debug()
    // expect(screen.getByText(helloWorld)).toBeInTheDocument()
    // expect(screen.getByTestId(/components-common-Navigation/i)).toHaveClass(className)
  })
})
