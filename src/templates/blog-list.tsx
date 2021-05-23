import React from "react"
import Layout from "@/components/layout/layout"
import { Link, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Post from "@/components/blog-list/post"
import Pagination from "@/components/blog-list/pagination"
import TagsNavigation from "@/components/blog-list/tags-navigation"
import ContentWrapper from "@/components/common/content-wrapper"
import { blogListStyles } from "@/styles/blog-list"
import { Seo } from "@/components/seo"

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
  limit: number
  numberOfPages: number
  currentPage: number
  skip: number
}

const BlogPage = ({ data, pageContext }: PageProps<BlogPageQuery, BlogPageContext>) => {
  const { edges } = data.allMdx
  const { group: tagsList } = data.tags
  const { currentPage, numberOfPages } = pageContext

  const isOnFirstPage = currentPage === 1
  const isOnLastPage = currentPage === numberOfPages
  const previousPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const previousPagePath = `/blog/${previousPage}`
  const nextPagePath = `/blog/${nextPage}`

  return (
    <Layout>
      <Seo title="blog list" description="all the blog post with pagination" />
      <ContentWrapper className={blogListStyles}>
        <Pagination
          isOnFirstPage={isOnFirstPage}
          isOnLastPage={isOnLastPage}
          previousPagePath={previousPagePath}
          nextPagePath={nextPagePath}
          pageNumber={pageContext.currentPage}
          numberOfPages={pageContext.numberOfPages}
        />
        <TagsNavigation tagsList={tagsList} />
        {edges.map(({ node }) => (
          <Post key={node.id} node={node} />
        ))}
        <Pagination
          isOnFirstPage={isOnFirstPage}
          isOnLastPage={isOnLastPage}
          previousPagePath={previousPagePath}
          nextPagePath={nextPagePath}
          pageNumber={pageContext.currentPage}
          numberOfPages={pageContext.numberOfPages}
        />
      </ContentWrapper>
    </Layout>
  )
}

// TODO: Changer back to ASC if something is not correct, kind of braking change here
export const BLOG_PAGE_QUERY = graphql`
  query ($skip: Int!, $limit: Int!) {
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
