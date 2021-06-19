import styled from "@emotion/styled"
import {FC} from "react"

const Main = styled.main``

export const Layout: FC = ({children}) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  )
}
