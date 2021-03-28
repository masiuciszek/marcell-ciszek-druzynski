import React from "react"
import { Nav } from "./nav"
import { css } from "@emotion/css"
import { graphql, useStaticQuery } from "gatsby"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

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
  & {
    position: relative;
    border: 2px solid #fff;
    min-height: var(--header-size);
    margin-bottom: ${pxToRem(20)};
    width: 100%;
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

  return (
    <header className={headerStyles}>
      <StaticImage
        width={100}
        src="../../images/love.svg"
        alt="masiu logo"
        layout="constrained"
        placeholder="blurred"
      />

      <IconButton>
        <StaticImage
          width={35}
          layout="constrained"
          src="../../images/icons/sun-white.svg"
          alt="moon icon"
          placeholder="tracedSVG"
        />
      </IconButton>
      <Nav />
    </header>
  )
}
