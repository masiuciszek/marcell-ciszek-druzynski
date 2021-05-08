import React from "react"
import Layout from "@/components/layout/layout"
import { elements } from "@/styles/styled-record"
import { PageProps } from "gatsby"
import { graphql } from "gatsby"
import Post from "@/components/blog-list/post"
import Pagination from "@/components/blog-list/navigation"
import TagsNavigation from "@/components/blog-list/tags-navigation"
import ContentWrapper from "@/components/common/content-wrapper"
import { css } from "@emotion/css"
import { commonGridStyles } from "@/styles/css-utils"

interface Node {
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

type Tag = { fieldValue: string }

interface BlogPageQuery {
  allMdx: {
    edges: Array<Node>
  }
  tags: { group: Array<Tag> }
}

interface BlogPageContext {
  humanPageNumber: number
  limit: number
  nextPagePath: string
  numberOfPages: number
  pageNumber: number
  previousPagePath: string
  skip: number
}

const contentWrapperStyles = css`
  margin: 2rem auto;
  justify-items: center;
  width: 100%;
  align-self: center;
  border-bottom: 1px solid ${elements.p};
`

const BlogPage = ({ data, pageContext }: PageProps<BlogPageQuery, BlogPageContext>) => {
  const { edges } = data.allMdx
  const { group: tagsList } = data.tags
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Layout>
      <ContentWrapper className={contentWrapperStyles}>
        <Pagination
          previousPagePath={previousPagePath}
          pageNumber={pageContext.pageNumber}
          numberOfPages={pageContext.numberOfPages}
          nextPagePath={nextPagePath}
        />
        <TagsNavigation tagsList={tagsList} />
        {edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
        <Pagination
          previousPagePath={previousPagePath}
          pageNumber={pageContext.pageNumber}
          numberOfPages={pageContext.numberOfPages}
          nextPagePath={nextPagePath}
        />
      </ContentWrapper>
    </Layout>
  )
}

// TODO: Changer back to ASC if something is not correct, kind of braking change here
export const BLOG_PAGE_QUERY = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, skip: $skip, limit: $limit) {
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
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

export default BlogPage
