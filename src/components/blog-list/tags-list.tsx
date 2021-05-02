import React from "react"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const TagsListStyles = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  list-style: none;
  a {
    &:nth-of-type(1n) {
      transform: rotate(-1deg);
    }
    &:nth-of-type(2n) {
      transform: rotate(1deg);
    }
    &:hover {
      transform: rotate(0);
    }
  }
  li {
    background-color: ${elements.filler};
    color: ${elements.background};
    padding: 0.2em;
    min-width: 3rem;
    text-align: center;
    border-radius: ${elements.borderRadiusS};
    display: block;
    margin-left: 0.75rem;
  }
`
interface TagsListProps {
  tags: string[]
}
const TagsList = ({ tags }: TagsListProps) => {
  return (
    <TagsListStyles>
      {tags.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`}>
          <motion.li whileHover={{ scale: 1.05 }}>{tag}</motion.li>
        </Link>
      ))}
    </TagsListStyles>
  )
}

export default TagsList
