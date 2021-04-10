import Layout from "@/components/layout/layout"
import { Link, PageProps } from "gatsby"
import { graphql } from "gatsby"
import React from "react"

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
  allBlogPosts: {
    edges: Array<Node>
  }
}

const BlogPage = ({ data }: PageProps<BlogPageQuery>) => {
  console.log({ e: data.allBlogPosts.edges.map((x) => x.node.id) })
  // TODO: infinite scroll here
  const { edges: bloglist } = data.allBlogPosts

  return (
    <Layout>
      <h1>Blog page</h1>
      {bloglist.map(({ node }) => {
        console.log(node)
        return (
          <Link key={node.id} to={`/blog/${node.slug}`}>
            <p>{node.frontmatter.title}</p>
          </Link>
        )
      })}
    </Layout>
  )
}

export const BLOG_PAGE_QUERY = graphql`
  {
    allBlogPosts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          slug
          excerpt(pruneLength: 40)
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
