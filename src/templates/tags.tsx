import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "@/components/layout/layout"

type Node = {
  node: {
    slug: string
    frontmatter: { title: string }
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

const Tags: React.FC<PageProps<TagsQueryType, TagsQueryContext>> = ({ data, pageContext }) => {
  console.log(data, pageContext.tag)
  return (
    <Layout>
      <h1>Tags</h1>
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
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`
