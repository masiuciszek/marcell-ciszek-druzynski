import { pxToRem } from "@/styles/css-utils"
import { above, below } from "@/styles/media-query"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  @media ${below.mobileXL} {
    width: 100%;
    small {
      margin-bottom: ${pxToRem(12)};
    }
  }
  @media ${above.mobileXL} {
    min-width: ${pxToRem(400)};
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  li {
    padding: 0;
    margin: 0;
    @media ${below.mobileXL} {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

const SocialList = () => {
  return (
    <List>
      <small>
        <StrokeWrapper>Say Hi</StrokeWrapper> to me on
      </small>
      <li>
        <a href="https://github.com/masiucd" target="_blank" rel="noreferrer">
          <StaticImage
            layout="constrained"
            src="../../images/social/github.svg"
            alt="github-icon"
            placeholder="tracedSVG"
            width={35}
          />
        </a>
      </li>
      <li>
        <a href="https://mobile.twitter.com/MasiuCD" target="_blank" rel="noreferrer">
          <StaticImage
            layout="constrained"
            src="../../images/social/twitter.svg"
            alt="github-icon"
            width={35}
            placeholder="tracedSVG"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/marcell-ciszek/" target="_blank" rel="noreferrer">
          <StaticImage
            layout="constrained"
            src="../../images/social/linkedin.svg"
            alt="github-icon"
            width={35}
            placeholder="tracedSVG"
          />
        </a>
      </li>
    </List>
  )
}
export default SocialList
