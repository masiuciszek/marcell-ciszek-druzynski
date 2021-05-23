import Paginate from "@/components/blog-post/paginate"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import { css } from "@emotion/css"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

interface BiteItemQuery {
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

interface BiteItemContext {
  slug: string
  previousPost: Node | null
  nextPost: Node | null
}

const articleStyles = css`
  margin-bottom: 2rem;
`

const BiteItem = ({ data, pageContext }: PageProps) => {
  return (
    <Layout>
      <Seo title={`bites`} description="" />
      <p>Bite item</p>
      {/* <article className={articleStyles}>
        <MDXRenderer>{data.post.body}</MDXRenderer>
      </article> */}
      {/* <Paginate previousPost={previousPost} nextPost={nextPost} /> */}
    </Layout>
  )
}

// export const BITES_ITEM_QUERY = graphql`
//   query ($slug: String!) {
//     post: mdx(slug: { eq: $slug }) {
//       id
//       frontmatter {
//         title
//         date(formatString: "DD MMMM, YYYY")
//         spoiler
//         length
//         tags
//       }
//       body
//     }
//   }
// `

export default BiteItem
