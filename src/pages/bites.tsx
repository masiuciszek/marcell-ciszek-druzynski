import React from "react"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import { graphql, PageProps } from "gatsby"

interface Node {
  node: {
    id: string
    frontmatter: {
      date: string
      length: string
      spoiler: string
      tags: Array<string>
      title: string
    }
  }
}
interface BitesQueryProps {
  bites: {
    edges: Array<Node>
  }
}

const BitesPage: React.FC<PageProps<BitesQueryProps>> = ({ data: { bites } }): JSX.Element => {
  // console.log({ data: data.bites.edges[0].node.frontmatter.title })
  return (
    <Layout>
      <Seo title="Bites and stuff" description="Some of my pictures and different bites" />
      <h1>BitesPage</h1>
      <p>
        My collection of code snippets that I use daily. Get some inspiration or use the code by all
        the developers favorite mode, <StrokeWrapper>copy and paste</StrokeWrapper>.
      </p>
      <p>
        inspired by <StrokeWrapper>Kyle Shelvin&#x27;s blog</StrokeWrapper> and{" "}
        <StrokeWrapper>Josh W. Comeau&#x27;s blog</StrokeWrapper>{" "}
      </p>

      {/* TODO: Table component here */}
      <ul>
        {bites.edges.map(({ node }) => (
          <li key={node.id}>{node.frontmatter.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const BITES_QUERY = graphql`
  {
    bites: allMdx(filter: { fileAbsolutePath: { regex: "/(bites)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            spoiler
            length
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`

export default BitesPage
