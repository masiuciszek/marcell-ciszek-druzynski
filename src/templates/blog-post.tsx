import Paginate from "@/components/blog-post/paginate"
import Layout from "@/components/layout/layout"
import { css } from "@emotion/css"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

interface BlogPostQuery {
  post: {
    id: string
    frontmatter: {
      title: string
      date: string
      spoiler: string
      length: string
      tags: string
    }
    body: string
  }
}

interface Node {
  slug: string
  frontmatter: {
    title: string
  }
}

interface BlogPostContext {
  slug: string
  previousPost: Node | null
  nextPost: Node | null
}

const articleStyles = css`
  margin-bottom: 2rem;
`

const BlogPost = ({ data, pageContext }: PageProps<BlogPostQuery, BlogPostContext>) => {
  const { previousPost, nextPost } = pageContext

  return (
    <Layout fluid>
      <article className={articleStyles}>
        <MDXRenderer>{data.post.body}</MDXRenderer>
      </article>
      <Paginate previousPost={previousPost} nextPost={nextPost} />
    </Layout>
  )
}

export const BLOG_POST_QUERY = graphql`
  query($slug: String!) {
    post: mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        title
        date
        spoiler
        length
        tags
      }
      body
    }
  }
`

export default BlogPost
