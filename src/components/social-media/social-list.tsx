import { pxToRem } from "@/styles/css-utils"
import { above, below } from "@/styles/media-query"
import { elements } from "@/styles/styled-record"
import { ContactType } from "@/types/types"
import { randomNumber } from "@/util"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"

interface Node {
  node: ContactType
}
interface SocialListProps {
  contactList: Node[]
}

const SocialListWrapper = styled.aside`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media ${above.mobileL} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  @media ${above.tabletL} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 55em;
  }
`

const Small = styled.small`
  margin-bottom: 0.35em;
  @media ${below.mobileL} {
    margin-left: 0.4em;
  }
`

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
  }

  @media ${below.mobileL} {
    li {
      margin-left: 0.25em;
      font-size: ${pxToRem(14)};
    }
  }

  @media ${below.mobileM} {
    justify-content: center;
    align-items: center;
  }
  justify-content: center;
  align-items: center;
  @media ${above.mobileL} {
    flex-direction: row;
    width: 90%;
    margin-bottom: 0.35em;
    li {
      margin: 0.25em;
    }
  }
  a {
    color: ${elements.a};
  }
`

const SocialList = ({ contactList }: SocialListProps) => {
  return (
    <SocialListWrapper>
      <Small data-testid="footer-say-hi-to-me-on">
        <StrokeWrapper>Say Hi</StrokeWrapper> to me on
      </Small>
      <List>
        {contactList.map(({ node: { name, path } }) => (
          <motion.li key={name} whileHover={{ rotate: randomNumber(5) }}>
            <a href={path} target="_blank" rel="noreferrer">
              {name}
            </a>
          </motion.li>
        ))}
      </List>
    </SocialListWrapper>
  )
}
export default SocialList
