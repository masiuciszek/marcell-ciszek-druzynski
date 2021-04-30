import { pxToRem } from "@/styles/css-utils"
import { css, cx } from "@emotion/css"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"
import SocialList from "../social-media/social-list"

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

const FooterStyles = styled.footer`
  min-height: 4.5em;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
`

const Small = styled.small`
  font-size: ${pxToRem(12)};
`

export const Footer = () => {
  const { site } = useStaticQuery<QueryType>(QUERY)
  return (
    <FooterStyles>
      <SocialList />
      <Small>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <StrokeWrapper>{site.siteMetadata.title}</StrokeWrapper>. All rights reserved.
      </Small>
    </FooterStyles>
  )
}
