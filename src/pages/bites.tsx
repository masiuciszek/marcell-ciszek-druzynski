import React from "react"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import { graphql, Link, PageProps } from "gatsby"
import styled from "@emotion/styled"
import useMediaQuery from "@/hooks/media-query"
import { above } from "@/styles/media-query"
import { elements, elevations } from "@/styles/styled-record"

interface Node {
  node: {
    id: string
    slug: string
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

const Table = styled.table`
  margin: 1rem auto;
  width: 100%;
  box-shadow: ${elevations.shadowLg};
  background-color: ${elements.boxBackground};
  padding: 0.3rem;
`

const Thead = styled.thead`
  background-color: ${elements.tableBg};
  box-shadow: ${elevations.shadowL};
`
const TheadCell = styled.th`
  padding: 0.5rem;
  color: ${elements.tableText};
`

const Trow = styled.tr`
  border: 2px solid red;
  /* background: red; */
  /*  */
`
const Tcell = styled.td`
  text-align: center;
  padding: 0.5rem;
  background-color: ${elements.background};
  &.tags {
    a:not(:first-child) {
      margin-left: 0.2rem;
      display: inline-block;
    }
  }
`

const BitesPage: React.FC<PageProps<BitesQueryProps>> = ({ data: { bites } }): JSX.Element => {
  const isAboveTablet = useMediaQuery(above.tabletL)
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

      {/* TODO: Table component here */}

      {isAboveTablet && (
        <Table>
          <Thead>
            <Trow>
              <TheadCell role="button">Title</TheadCell>
              <TheadCell>Description</TheadCell>
              <TheadCell role="button">Tags</TheadCell>
            </Trow>
          </Thead>
          <tbody>
            {bites.edges.map(({ node }) => (
              <tr key={node.id}>
                <Tcell>
                  <Link to={`/bites/${node.slug}`}>{node.frontmatter.title} </Link>
                </Tcell>
                <Tcell>
                  <Link to={`/bites/${node.slug}`}>{node.frontmatter.spoiler} </Link>
                </Tcell>
                <Tcell className="tags">
                  {node.frontmatter.tags.map((tag) => (
                    <Link key={tag} to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  ))}{" "}
                </Tcell>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
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
