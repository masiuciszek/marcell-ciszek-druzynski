import { above, below } from "@/styles/media-query"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"

const SocialListWrapper = styled.aside`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column wrap;
  @media ${above.tablet} {
    width: 40em;
    flex-flow: row;
  }
`

const Small = styled.small`
  flex: 1 0 30%;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media ${above.tablet} {
    flex: 1 0 70%;
  }
  @media ${below.tablet} {
    width: 100%;
  }

  li {
    padding: 0;
    margin: 0;
  }
  a {
    color: ${elements.a};
  }
`

const socialLinks = [
  {
    name: "Github",
    path: "https://github.com/masiucd",
  },
  {
    name: "Twitter",
    path: "https://mobile.twitter.com/masiu_cd",
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/marcell-ciszek",
  },
]

const SocialList = () => {
  return (
    <SocialListWrapper>
      <Small>
        <StrokeWrapper>Say Hi</StrokeWrapper> to me on
      </Small>
      <List>
        {socialLinks.map(({ name, path }) => (
          <li key={name}>
            <a href={path} target="_blank" rel="noreferrer">
              {name} &lambda;
            </a>
          </li>
        ))}
      </List>
    </SocialListWrapper>
  )
}
export default SocialList
