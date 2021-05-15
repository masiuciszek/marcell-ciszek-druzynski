import React from "react"
import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  )
}

const customRender = (ui: React.ReactElement, options: any = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
