import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@/components/layout/layout"

interface BlogPostQueryType {
  post: {
    frontmatter: {
      title: string
    }
    body: string
  }
}

const BlogPostPage = ({ data }: PageProps<BlogPostQueryType>) => {
  console.log({ data })
  return (
    <Layout>
      <article>
        <h1>hello</h1>
        {/* <MDXRenderer> </MDXRenderer> */}
      </article>
    </Layout>
  )
}

export const BLOG_POST_QUERY = graphql`
  query BlogPostById($id: String) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPostPage
