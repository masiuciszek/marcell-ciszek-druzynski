import React from "react"
import { Nav } from "./nav"
import { css } from "@emotion/css"
import { Link } from "gatsby"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import useTheme from "@/hooks/theme"
import AnimatedWrapper from "../animated/animated-wrapper"
import Marcell from "../icons/marcell"

const headerStyles = css`
  position: relative;
  min-height: var(--header-size);
  margin-bottom: ${pxToRem(20)};
  width: 100%;

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
  const isMoonIcon = storedTheme === "light"
  const isSunIcon = storedTheme === "dark"

  return (
    <header className={headerStyles}>
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
      <Nav />
    </header>
  )
}
