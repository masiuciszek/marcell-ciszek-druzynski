import * as React from "react"
import { GlobalStyles } from "@/styles/global-styles"
import Fonts from "@/styles/fonts"
import { cx, css } from "@emotion/css"
import { Header } from "./header"

const mainStyles = css`
  & {
    margin: 0 auto;
    position: relative;
  }
`

interface LayoutProps {
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Header />
      <main className={cx(mainStyles, className, "main-wrapper")}>{children}</main>
    </>
  )
}

export default Layout
