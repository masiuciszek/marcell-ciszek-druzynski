import React from "react"
import TopSection from "@/components/common/content-wrapper"
import { css } from "@emotion/css"
import { elements, elevations } from "@/styles/styled-record"
import { Link } from "gatsby"
import { strains } from "@/styles/strains"
import { above, below } from "@/styles/media-query"

interface NavigationProps {
  previousPagePath: string
  pageNumber: number
  numberOfPages: number
  nextPagePath: string
}

const topSectionStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${elements.p};
  ${strains}
  margin: 2rem 0;

  @media ${below.tablet} {
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    text-align: center;
    align-items: center;
  }
  @media ${above.tablet} {
    height: 3rem;
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
    @media ${above.tablet} {
      flex-basis: 30%;
    }
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

const Navigation: React.FC<NavigationProps> = ({
  previousPagePath,
  pageNumber,
  numberOfPages,
  nextPagePath,
}) => {
  return (
    <TopSection className={topSectionStyles}>
      {previousPagePath ? (
        <Link to={previousPagePath}> &#8592; prev 3 posts </Link>
      ) : (
        <Link aria-disabled to={previousPagePath}>
          {" "}
          &#8592; prev 3 posts{" "}
        </Link>
      )}

      <h4>
        page <span>{pageNumber + 1}</span> of <span>{numberOfPages}</span>
      </h4>

      {nextPagePath ? (
        <Link to={nextPagePath}> 3 more posts &#8594; </Link>
      ) : (
        <Link to={nextPagePath} aria-disabled>
          {" "}
          No more posts &#8594;
        </Link>
      )}
    </TopSection>
  )
}
export default Navigation
