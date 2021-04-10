import useMediaQuery from "@/hooks/media-query"
import { pxToRem } from "@/styles/css-utils"
import { above } from "@/styles/media-query"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import React from "react"
import { NavList } from "./nav-list"

const NavBar = styled.nav`
  height: 100%;
  min-height: ${pxToRem(80)};
  display: flex;
  align-items: center;
`

const MenuIcon = styled.button`
  position: absolute;
  width: 3rem;
  height: 1.8rem;
  right: 4rem;
  top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  .nav-icon-part:nth-of-type(1) {
    background: ${elements.p};
    height: 0.3rem;
    width: 100%;
  }
  .nav-icon-part:nth-of-type(2) {
    background: ${elements.p};
    height: 0.3rem;
    width: 100%;
  }
  .nav-icon-part:nth-of-type(3) {
    background: ${elements.p};
    height: 0.3rem;
    width: 100%;
  }
  .nav-icon-part {
    /* margin-bottom: ${pxToRem(3)}; */
  }
`

export const Nav = () => {
  const aboveTablet = useMediaQuery(above.tabletL)

  const showMenuIcon = !aboveTablet
  return (
    <NavBar>
      {showMenuIcon && (
        <MenuIcon role="button" aria-pressed="true">
          <div className="nav-icon-part part-1"></div>
          <div className="nav-icon-part part-2"></div>
          <div className="nav-icon-part part-3"></div>
        </MenuIcon>
      )}
      {aboveTablet && <NavList />}
    </NavBar>
  )
}
