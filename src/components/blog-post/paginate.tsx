import { strains } from "@/styles/strains"
import { elements } from "@/styles/styled-record"
import { sliceIt } from "@/util"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

interface Node {
  slug: string
  frontmatter: {
    title: string
  }
}

interface PaginateProps {
  previousPath: Node | null
  nextPath: Node | null
}

const PaginateStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  a {
    ${strains};
    display: block;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
    color: ${elements.boxText};
    &[aria-disabled="true"] {
      pointer-events: none;
      text-decoration: line-through;
    }
    &:nth-of-type(1) {
      transform: rotate(2deg);
    }
    &:nth-of-type(2) {
      transform: rotate(-2deg);
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Paginate = ({ previousPath, nextPath }: PaginateProps) => {
  const hasPreviousPath = previousPath !== null
  const hasNextPath = nextPath !== null
  return (
    <PaginateStyles>
      {hasPreviousPath ? (
        <Link to={`/blog/${previousPath?.slug}`}>
          {sliceIt(previousPath?.frontmatter.title ?? "", 0, 16)}
        </Link>
      ) : (
        <Link aria-disabled="true" to={`/blog/${previousPath?.slug}`}>
          previous Post
        </Link>
      )}

      {hasNextPath ? (
        <Link to={`/blog/${nextPath?.slug}`}>
          {sliceIt(nextPath?.frontmatter.title ?? "End of posts", 0, 16)}
        </Link>
      ) : (
        <Link aria-disabled to={`/blog/${nextPath?.slug}`}>
          End of posts
        </Link>
      )}
    </PaginateStyles>
  )
}

export default Paginate
