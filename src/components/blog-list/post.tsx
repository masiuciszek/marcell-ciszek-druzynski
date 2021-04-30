import { elements, elevations } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"

interface PostProps {
  node: {
    id: string
    slug: string
    excerpt: string
    frontmatter: {
      title: string
      date: string
      tags: string[]
      spoiler: string
      length: string
    }
  }
}

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

const StyledPost = styled.article`
  border-bottom: 2px solid ${elements.p};
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${elements.boxBackground};
  box-shadow: ${elevations.shadowLg};
  p {
    color: ${elements.boxText};
  }
  .head {
    display: flex;
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-basis: 20%;
    }
  }
`

const Head = styled.div`
  h5 {
    display: inline-block;
    border-bottom: 2px solid ${elements.filler};
  }
`

const Bottom = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
`

const ReadMore = styled(Link)`
  display: block;
  cursor: pointer;
  align-self: center;
`

const Post = ({ node }: PostProps) => {
  return (
    <StyledPost>
      <Head>
        <h5>{node.frontmatter.title}</h5>
      </Head>
      <p>{node.excerpt}</p>
      <Bottom>
        {/* TODO: Fancy arrow animation here with svg */}
        <ReadMore to={`/blog/${node.slug}`}>Read More about {node.frontmatter.title}</ReadMore>
        <TagsList tags={node.frontmatter.tags} />
      </Bottom>
    </StyledPost>
  )
}

export default Post
