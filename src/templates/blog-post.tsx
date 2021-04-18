import Layout from "@/components/layout/layout"
import { graphql, Link, PageProps } from "gatsby"
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

const BlogPost = ({ data, pageContext }: PageProps<BlogPostQuery, BlogPostContext>) => {
  const { previousPost, nextPost } = pageContext
  const hasPreviousPost = Boolean(pageContext.previousPost)
  const hasNextPost = Boolean(pageContext.nextPost)
  return (
    <Layout>
      <article>
        <MDXRenderer>{data.post.body}</MDXRenderer>
        <div>
          {hasPreviousPost && (
            <Link to={`/blog/${previousPost?.slug}`}>
              {" "}
              {previousPost?.slug.replaceAll("/", "")}{" "}
            </Link>
          )}
          {hasNextPost && (
            <Link to={`/blog/${nextPost?.slug}`}> {nextPost?.slug.replaceAll("/", "")} </Link>
          )}
        </div>
      </article>
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
