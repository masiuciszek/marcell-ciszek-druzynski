import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "@/components/layout/layout"
import styled from "@emotion/styled"
import DirectionLink from "@/components/common/direction-link"
import { PostsWrapper } from "@/components/blog-list/styled"
import Post from "@/components/blog-list/post"
import Title from "@/components/common/title"
import { css } from "@emotion/css"
import { strains } from "@/styles/strains"
import { pxToRem } from "@/styles/css-utils"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import { elements } from "@/styles/styled-record"

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

const Wrapper = styled.section`
  padding: 0.5em;
`

const directionLinkStyles = css`
  margin-bottom: 1.5em;
`

const titleStyles = css`
  ${strains}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${pxToRem(90)};
  h1 {
    margin: 0;
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
  // /blog/slug
  return (
    <Layout>
      <Wrapper>
        <DirectionLink className={directionLinkStyles} />
        <Title className={titleStyles}>
          <h1>
            posts for topic{" "}
            <StrokeWrapper className={strokeStyles}>{pageContext.tag}</StrokeWrapper>{" "}
          </h1>
        </Title>
        <PostsWrapper>
          {edges.map(({ node }) => (
            <Post key={node.id} node={node} />
          ))}
        </PostsWrapper>
      </Wrapper>
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
