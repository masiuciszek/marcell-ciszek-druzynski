import { strains } from "@/styles/strains"
import { elements } from "@/styles/styled-record"
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
  previousPost: Node | null
  nextPost: Node | null
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

const Paginate = ({ previousPost, nextPost }: PaginateProps) => {
  const hasPreviousPost = Boolean(previousPost)
  const hasNextPost = Boolean(nextPost)
  return (
    <PaginateStyles>
      {hasPreviousPost ? (
        <Link to={`/blog/${previousPost?.slug}`}> {previousPost?.frontmatter.title ?? ""}</Link>
      ) : (
        <Link aria-disabled="true" to={`/blog/${previousPost?.slug}`}>
          {previousPost?.frontmatter.title ?? "previous Post"}
        </Link>
      )}

      {hasNextPost ? (
        <Link to={`/blog/${nextPost?.slug}`}> {nextPost?.frontmatter.title ?? ""} </Link>
      ) : (
        <Link aria-disabled to={`/blog/${nextPost?.slug}`}>
          {" "}
          {nextPost?.frontmatter.title ?? "End of posts"}{" "}
        </Link>
      )}
    </PaginateStyles>
  )
}

export default Paginate
