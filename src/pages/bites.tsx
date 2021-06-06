import React from "react"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import { graphql, PageProps } from "gatsby"
import useMediaQuery from "@/hooks/media-query"
import { above } from "@/styles/media-query"
import BitesTable from "@/components/bites/bites-table"
import { getNodes } from "@/util"
import { Node } from "@/types/types"
import BitesList from "@/components/bites/bites-list"

interface BitesQueryProps {
  bites: {
    edges: Array<Node>
  }
}

const BitesPage: React.FC<PageProps<BitesQueryProps>> = ({ data: { bites } }): JSX.Element => {
  const isAboveTablet = useMediaQuery(above.tabletL)
  const nodes = getNodes<Node>(bites.edges)

  return (
    <Layout>
      <Seo title="Bites and stuff" description="Some of my pictures and different bites" />
      <h1>BitesPage</h1>
      <p>
        My collection of code snippets that I use daily. Get some inspiration or use the code by all
        the developers favorite mode, <StrokeWrapper>copy and paste</StrokeWrapper>.
      </p>
      <p>
        inspired by{" "}
        <a href="https://kyleshevlin.com/snippets/">
          <StrokeWrapper>Kyle Shelvin&#x27;s blog</StrokeWrapper>
        </a>{" "}
        and{" "}
        <a href="https://www.joshwcomeau.com/snippets/">
          <StrokeWrapper>Josh W. Comeau&#x27;s blog</StrokeWrapper>{" "}
        </a>
      </p>
      {!isAboveTablet && <BitesList bites={nodes} />}
      {isAboveTablet && <BitesTable bites={nodes} />}
    </Layout>
  )
}

export const BITES_QUERY = graphql`
  {
    bites: allMdx(filter: { fileAbsolutePath: { regex: "/(bites)/" } }) {
      edges {
        node {
          id
          slug
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
