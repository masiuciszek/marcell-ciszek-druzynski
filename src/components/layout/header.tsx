import React, { useRef } from "react"
import { Nav } from "./nav"
import { css } from "@emotion/css"
import { Link } from "gatsby"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import useTheme from "@/hooks/theme"
import AnimatedWrapper from "../animated/animated-wrapper"
import Marcell from "../icons/marcell"
import MenuIcon from "./menu-icon"
import useToggle from "@/hooks/toggle"
import useMediaQuery from "@/hooks/media-query"
import { above } from "@/styles/media-query"
import useOnClickOutside from "@/hooks/click-outside"

const headerStyles = css`
  position: relative;
  min-height: var(--header-size);
  margin-bottom: ${pxToRem(20)};
  display: flex;
  align-items: center;
  .theme-toggle-button {
    transition: 2s ease-in-out all;
  }
`

const IconButton = styled.button`
  position: absolute;
  top: ${pxToRem(12)};
  right: ${pxToRem(22)};
  ${buttonResetStyles}
`

const MarcellLink = styled(Link)`
  display: inline-block;
  svg {
    width: ${pxToRem(200)};
    height: ${pxToRem(80)};
  }
`

export const Header = () => {
  const { storedTheme, handleTheme } = useTheme()
  const ref = useRef(null)
  const { state: isOpen, toggle: toggleIsOpen, setToFalse: close } = useToggle()
  useOnClickOutside(ref, close)

  const isaAboveTablet = useMediaQuery(above.tabletL)
  const hasMenuIcon = !isaAboveTablet
  const isMoonIcon = storedTheme === "light"
  const isSunIcon = storedTheme === "dark"

  return (
    <header className={headerStyles} ref={ref}>
      {hasMenuIcon && <MenuIcon isOpen={isOpen} toggleIsOpen={toggleIsOpen} />}
      <MarcellLink to="/">
        <Marcell />
      </MarcellLink>
      <AnimatedWrapper isAnimated={isSunIcon}>
        <IconButton onClick={handleTheme} role="button">
          <StaticImage
            className="theme-toggle-button"
            width={35}
            layout="constrained"
            src="../../images/icons/sun-white.svg"
            alt="moon icon"
            placeholder="tracedSVG"
          />
        </IconButton>
      </AnimatedWrapper>
      <AnimatedWrapper isAnimated={isMoonIcon}>
        <IconButton onClick={handleTheme} role="button">
          <StaticImage
            className="theme-toggle-button"
            width={35}
            layout="constrained"
            src="../../images/icons/moon.svg"
            alt="moon icon"
            placeholder="tracedSVG"
          />
        </IconButton>
      </AnimatedWrapper>
      <Nav isOpen={isOpen} />
    </header>
  )
}
