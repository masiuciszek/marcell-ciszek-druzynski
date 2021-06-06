import { elements, elevations } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

interface Node {
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

interface BitesTableProps {
  bites: Array<Node>
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

const BitesTable: React.FC<BitesTableProps> = ({ bites }) => (
  <Table>
    <Thead>
      <Trow>
        <TheadCell role="button">Title</TheadCell>
        <TheadCell>Description</TheadCell>
        <TheadCell role="button">Tags</TheadCell>
      </Trow>
    </Thead>
    <tbody>
      {bites.map(({ id, slug, frontmatter }) => (
        <tr key={id}>
          <Tcell>
            <Link to={`/bites/${slug}`}>{frontmatter.title} </Link>
          </Tcell>
          <Tcell>
            <Link to={`/bites/${slug}`}>{frontmatter.spoiler} </Link>
          </Tcell>
          <Tcell className="tags">
            {frontmatter.tags.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}{" "}
          </Tcell>
        </tr>
      ))}
    </tbody>
  </Table>
)
export default BitesTable
