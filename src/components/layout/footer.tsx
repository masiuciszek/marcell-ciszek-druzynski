import { pxToRem } from "@/styles/css-utils"
import { ContactType } from "@/types/types"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"
import SocialList from "../social-media/social-list"

interface Node {
  node: ContactType
}
interface QueryType {
  site: {
    siteMetadata: {
      title: string
    }
  }
  contactList: {
    edges: Array<Node>
  }
}

const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    contactList: allContactListJson {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`

const FooterStyles = styled.footer`
  min-height: 4.75em;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
`

const Small = styled.small`
  font-size: ${pxToRem(12)};
  display: block;
`

export const Footer = () => {
  const { site, contactList } = useStaticQuery<QueryType>(QUERY)
  return (
    <FooterStyles>
      <SocialList contactList={contactList.edges} />
      <Small>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <StrokeWrapper>{site.siteMetadata.title}</StrokeWrapper>. All rights reserved.
      </Small>
    </FooterStyles>
  )
}
