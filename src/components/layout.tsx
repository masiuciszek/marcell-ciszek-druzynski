import * as React from "react"
import styled from "@emotion/styled"
import { GlobalStyles } from "@/styles/global-styles"
import Fonts from "@/styles/fonts"

const Main = styled.main`
  margin: 0 auto;
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
