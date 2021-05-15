import React from "react"
import TopSection from "@/components/common/content-wrapper"
import { css } from "@emotion/css"
import { elements, elevations } from "@/styles/styled-record"
import { Link } from "gatsby"
import { strains } from "@/styles/strains"
import { below } from "@/styles/media-query"

interface PaginationProps {
  previousPagePath: string
  nextPagePath: string
  pageNumber: number
  numberOfPages: number
  isOnFirstPage: boolean
  isOnLastPage: boolean
}

const topSectionStyles = css`
  background-color: ${elements.p};
  ${strains}
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  margin: 2rem 0;
  justify-items: center;
  align-items: center;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media ${below.tablet} {
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    text-align: center;
    align-items: center;
  }

  h4,
  a {
    background-color: ${elements.background};
    color: ${elements.p};
    padding: 0.15em;
    box-shadow: ${elevations.shadowLg};
    &:hover {
      transform: rotate(3deg) scale(1.1);
    }
  }

  h4 {
    transform: rotate(3deg);
    text-align: center;
    border: 1px solid ${elements.p};
    width: 8em;
    span {
      color: ${elements.stroke};
      text-shadow: 1px 1px ${elements.p};
    }
  }
  a {
    display: inline-block;
    &[aria-disabled="true"] {
      pointer-events: none;
      text-decoration: line-through;
    }
    &:nth-of-type(1) {
      transform: rotate(-2deg);
    }
    &:nth-of-type(2) {
      transform: rotate(2deg);
    }
    &:hover {
      transform: scale(1.2);
    }
  }
`

const Pagination: React.FC<PaginationProps> = ({
  previousPagePath,
  pageNumber,
  numberOfPages,
  nextPagePath,
  isOnFirstPage,
  isOnLastPage,
}) => {
  return (
    <TopSection className={topSectionStyles}>
      {!isOnFirstPage ? (
        <Link to={previousPagePath}> &#8592; prev 4 posts </Link>
      ) : (
        <Link aria-disabled to={previousPagePath}>
          {" "}
          &#8592; prev 4 posts{" "}
        </Link>
      )}

      <h4>
        page <span>{pageNumber}</span> of <span>{numberOfPages}</span>
      </h4>

      {!isOnLastPage ? (
        <Link to={nextPagePath}> 4 more posts &#8594; </Link>
      ) : (
        <Link to={nextPagePath} aria-disabled>
          {" "}
          No more posts &#8594;
        </Link>
      )}
    </TopSection>
  )
}
export default Pagination
