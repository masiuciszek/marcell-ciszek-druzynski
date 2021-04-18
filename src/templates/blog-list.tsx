import React from "react"
import Layout from "@/components/layout/layout"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { PageProps } from "gatsby"
import { graphql } from "gatsby"

import Post from "@/components/blog-list/post"
import Navigation from "@/components/blog-list/navigation"

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

interface BlogPageQuery {
  allMdx: {
    edges: Array<Node>
  }
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

const BlogListWrapper = styled.section`
  max-width: ${elements.maxWidth};
  margin: 0 auto;
`

const PostsWrapper = styled.section``

const BlogPage = ({ data, pageContext }: PageProps<BlogPageQuery, BlogPageContext>) => {
  const { edges } = data.allMdx
  const { previousPagePath, nextPagePath } = pageContext

  console.log(pageContext)
  console.log(edges)

  return (
    <Layout>
      <BlogListWrapper>
        <Navigation
          previousPagePath={pageContext.previousPagePath}
          pageNumber={pageContext.pageNumber}
          numberOfPages={pageContext.numberOfPages}
          nextPagePath={pageContext.nextPagePath}
        />
        <PostsWrapper>
          {edges.map(({ node }) => (
            <Post key={node.id} node={node} />
          ))}
        </PostsWrapper>

        <Navigation
          previousPagePath={pageContext.previousPagePath}
          pageNumber={pageContext.pageNumber}
          numberOfPages={pageContext.numberOfPages}
          nextPagePath={pageContext.nextPagePath}
        />
      </BlogListWrapper>
    </Layout>
  )
}

export const BLOG_PAGE_QUERY = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: ASC }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            date
            tags
            spoiler
            length
          }
        }
      }
    }
  }
`

export default BlogPage
