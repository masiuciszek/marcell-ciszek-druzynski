import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "@/components/layout/layout"
import styled from "@emotion/styled"
import DirectionLink from "@/components/common/direction-link"
import Post from "@/components/blog-list/post"
import Title from "@/components/common/title"
import { css } from "@emotion/css"
import { strains } from "@/styles/strains"
import { pxToRem } from "@/styles/css-utils"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import { elements, sizes } from "@/styles/styled-record"
import { above, below } from "@/styles/media-query"
import ContentWrapper from "@/components/common/content-wrapper"
import { blogListStyles } from "@/styles/blog-list"

type Node = {
  node: {
    id: string
    slug: string
    excerpt: string
    frontmatter: {
      title: string
      date: string
      tags: string[]
      spoiler: string
      length: string
    }
  }
}

interface TagsQueryType {
  posts: {
    totalCount: number
    edges: Array<Node>
  }
}
interface TagsQueryContext {
  tag: string
}

const directionLinkStyles = css`
  @media ${below.tablet} {
    margin-top: 1rem;
  }
`

const titleStyles = css`
  background-color: ${elements.p};
  ${strains}
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem 0;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  @media ${above.tablet} {
    width: 80%;
  }
  @media ${below.tablet} {
    width: 100%;
    grid-template-columns: 1fr;
    h3 {
      font-size: ${sizes.h4};
    }
  }
`

const strokeStyles = css`
  color: ${elements.background};
  &:after {
    background-color: ${elements.background};
    bottom: 1rem;
  }
`

const Tags: React.FC<PageProps<TagsQueryType, TagsQueryContext>> = ({ data, pageContext }) => {
  const { edges } = data.posts
  return (
    <Layout>
      <ContentWrapper className={blogListStyles}>
        <Title className={titleStyles}>
          <DirectionLink className={directionLinkStyles} />
          <h3>
            posts for topic{" "}
            <StrokeWrapper className={strokeStyles}>{pageContext.tag}</StrokeWrapper>{" "}
          </h3>
        </Title>
        {edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
      </ContentWrapper>
    </Layout>
  )
}
export default Tags

export const TAGS_QUERY = graphql`
  query getPostsForGivenTag($tag: String) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            spoiler
            length
          }
        }
      }
    }
  }
`
