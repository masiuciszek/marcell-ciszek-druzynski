import React from "react"
import { Nav } from "./nav"
import { css } from "@emotion/css"
import { graphql, Link, useStaticQuery } from "gatsby"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import useTheme from "@/hooks/theme"
import AnimatedWrapper from "../animated/animated-wrapper"

const HEADER_QUERY = graphql`
  {
    sun: file(relativePath: { eq: "icons/sun-white.svg" }) {
      name
      publicURL
    }
    moon: file(relativePath: { eq: "icons/moon.svg" }) {
      name
      publicURL
    }
  }
`
const headerStyles = css`
  position: relative;
  min-height: var(--header-size);
  margin-bottom: ${pxToRem(20)};
  width: 100%;
  .theme-toggle-button {
    transition: 2s ease-in-out all;
  }
`
interface HeaderQueryType {
  sun: {
    name: string
    publicURL: string
  }
  moon: {
    name: string
    publicURL: string
  }
}

const IconButton = styled.button`
  position: absolute;
  top: ${pxToRem(12)};
  right: ${pxToRem(22)};
  ${buttonResetStyles}
`

export const Header = () => {
  const { moon, sun } = useStaticQuery<HeaderQueryType>(HEADER_QUERY)
  const { storedTheme, handleTheme } = useTheme()

  const isMoonIcon = storedTheme === "light"
  const isSunIcon = storedTheme === "dark"

  return (
    <header className={headerStyles}>
      <Link to="/">
        <StaticImage
          width={100}
          src="../../images/love.svg"
          alt="masiu logo"
          layout="constrained"
          placeholder="blurred"
        />
      </Link>

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
