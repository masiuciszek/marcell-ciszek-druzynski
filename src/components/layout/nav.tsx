import styled from "@emotion/styled"
import React from "react"
import { NavList } from "./nav-list"

const NavBar = styled.nav`
  min-height: 5em;
`

export const Nav = () => {
  return (
    <NavBar>
      <NavList />
    </NavBar>
  )
}
