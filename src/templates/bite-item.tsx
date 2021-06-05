import Paginate from "@/components/blog-post/paginate"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import { css } from "@emotion/css"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

interface BiteItemQuery {
  bite: {
    id: string
    slug: string
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
  previousBite: Node | null
  nextBite: Node | null
}

const articleStyles = css`
  margin-bottom: 2rem;
`

const BiteItem = ({ data, pageContext }: PageProps<BiteItemQuery, BiteItemContext>) => {
  const { frontmatter } = data.bite
  const { previousBite, nextBite } = pageContext
  return (
    <Layout>
      <Seo title={`bites`} description="" />
      <div>
        <h1>{frontmatter.title} </h1>
        <p>{frontmatter.length}</p>
        <p>{frontmatter.date}</p>
        <p>{frontmatter.spoiler}</p>
      </div>
      <article className={articleStyles}>
        <MDXRenderer>{data.bite.body}</MDXRenderer>
      </article>
      <Paginate previousPath={previousBite} nextPath={nextBite} />
    </Layout>
  )
}

export const BITES_ITEM_QUERY = graphql`
  query ($slug: String!) {
    bite: mdx(slug: { eq: $slug }) {
      id
      slug
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        spoiler
        length
        tags
      }
      body
    }
  }
`

export default BiteItem
