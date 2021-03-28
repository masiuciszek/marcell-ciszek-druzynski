import { pxToRem } from "@/styles/css-utils"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"
import SocialList from "../social-media/social-list"

interface FooterProps {
  className?: string
}

interface QueryType {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const styles = css`
  min-height: 4.5em;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
`

const Small = styled.small`
  font-size: ${pxToRem(12)};
`

export const Footer = ({ className }: FooterProps) => {
  const { site } = useStaticQuery<QueryType>(QUERY)
  return (
    <footer className={cx(styles, className)}>
      <SocialList />
      <Small>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <StrokeWrapper>{site.siteMetadata.title}</StrokeWrapper>. All rights reserved.
      </Small>
    </footer>
  )
}
