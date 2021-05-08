import { colors, elements, elevations, fonts, sizes } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"

type Tag = { fieldValue: string }

interface TagsNavigationProps {
  tagsList: Array<Tag>
}

const Wrapper = styled.aside`
  margin-bottom: 0.5em;
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
  list-style: none;
  padding: 0;
`

const StyledLi = styled(motion.li)`
  padding: 0.5rem;
  text-align: center;
  min-width: 4em;
  margin-bottom: 0.5em;

  &:nth-of-type(2n) {
    a {
      transform: rotate(2deg);
    }
  }
  &:nth-of-type(3n) {
    a {
      transform: rotate(-2deg);
    }
  }
  a {
    border-radius: 4px;
    border: 2px solid ${colors.stroke};
    display: block;
    font-size: ${sizes.p};
    box-shadow: ${elevations.shadowM};
    &:hover {
      border: 2px solid ${elements.boxText};
    }
  }
`

const TagsNavigation: React.FC<TagsNavigationProps> = ({ tagsList }) => {
  return (
    <Wrapper>
      <StyledList>
        {tagsList.map((tag) => (
          <StyledLi
            key={tag.fieldValue}
            whileHover={{
              scale: 1.15,
              zIndex: 2,
              boxShadow: elevations.shadowS,
            }}
          >
            <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>
          </StyledLi>
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default TagsNavigation
