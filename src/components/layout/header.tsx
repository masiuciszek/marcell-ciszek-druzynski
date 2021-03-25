import React from "react"
import { Nav } from "./nav"
import { css } from "@emotion/css"
import { graphql, useStaticQuery } from "gatsby"
import Icon from "@/components/common/icon"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"

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

const iconStyles = css`
  & {
  }
`

export const Header = () => {
  const { moon, sun } = useStaticQuery<HeaderQueryType>(HEADER_QUERY)
  return (
    <header className={headerStyles}>
      <h2>Marcell</h2>
      <IconButton>
        <Icon className={iconStyles} src={sun.publicURL} alt={sun.name} />
      </IconButton>
      <Nav />
    </header>
  )
}
