import * as React from "react"
import { GlobalStyles } from "@/styles/global-styles"
import Fonts from "@/styles/fonts"
import { cx, css } from "@emotion/css"
import { Header } from "./header"
import { elements } from "@/styles/styled-record"
import { Footer } from "./footer"

const mainStyles = (fluid = false) => css`
  & {
    margin: 0 auto;
    position: relative;
    max-width: ${fluid ? elements.maxWidth : null};
  }
`

interface LayoutProps {
  className?: string
  fluid?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, className, fluid }) => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Header />
      <main className={cx(mainStyles(fluid), className, "main-wrapper")}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
