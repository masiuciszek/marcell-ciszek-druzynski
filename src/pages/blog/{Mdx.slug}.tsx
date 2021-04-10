import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@/components/layout/layout"
import styled from "@emotion/styled"

interface Node {
  node: {
    id: string
    slug: string
    frontmatter: {
      title: string
    }
  }
}

interface BlogPostQueryType {
  post: {
    id: string
    frontmatter: {
      title: string
      date: string
    }
    body: string
  }
  allBlogPosts: {
    edges: Node[]
  }
}

const Article = styled.article``

const BlogPostPage = ({ data }: PageProps<BlogPostQueryType>) => {
  const { post, allBlogPosts } = data
  // TODO: compare post_id
  const blogPostsIdList = allBlogPosts.edges.map((x) => x.node.id)
  const currentPostIndex = blogPostsIdList.indexOf(post.id)
  // console.log(blogPostsIdList.includes(post.id))
  const blogList = allBlogPosts.edges.map((x) => ({ id: x.node.id, slug: x.node.slug }))

  console.log(blogList)
  console.log(blogList[currentPostIndex])
  const prevPost = blogList[currentPostIndex + 1]
  const nextPost = blogList[currentPostIndex - 1]
  console.log(nextPost.id)

  return (
    <Layout>
      <Article>
        {post.frontmatter.date}
        <h1>currentIndex {currentPostIndex} </h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Article>
    </Layout>
  )
}

export const BLOG_POST_QUERY = graphql`
  query BlogPostById($id: String) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
      }
      body
    }
    allBlogPosts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          slug

          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default BlogPostPage
