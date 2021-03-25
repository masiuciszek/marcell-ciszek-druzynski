import styled from "@emotion/styled"
import React from "react"
import { NavList } from "./nav-list"

const NavBar = styled.nav`
  border: 2px solid red;
`

export const Nav = () => {
  return (
    <NavBar>
      <NavList />
    </NavBar>
  )
}
