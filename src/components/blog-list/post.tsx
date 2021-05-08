import { above } from "@/styles/media-query"
import { elements, elevations } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import TagsList from "./tags-list"

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

const StyledPost = styled.article`
  border-bottom: 2px solid ${elements.p};
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${elements.boxBackground};
  box-shadow: ${elevations.shadowLg};
  width: 100%;

  @media ${above.tablet} {
    width: 34em;
  }
  @media ${above.tabletL} {
    width: 45em;
  }
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
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  strong {
    position: relative;
    display: inline-block;
    align-self: center;
    &:after {
      content: "";
      width: 95%;
      height: 0.2rem;
      background-color: ${elements.filler};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .date-and-length-of-post {
    align-self: center;
  }
  @media ${above.mobileL} {
    flex-flow: row;
  }
`

const Bottom = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  justify-items: center;
  @media ${above.mobileL} {
    grid-template-columns: 2fr 1fr;
  }
`

const ReadMore = styled(Link)`
  display: block;
  cursor: pointer;
  align-self: center;
`

const Post = ({ node }: PostProps) => {
  const { title, date, length } = node.frontmatter
  return (
    <StyledPost>
      <Head>
        <strong>{title}</strong>
        <div className="date-and-length-of-post">
          <p>{date}</p>
          <p>{length}</p>
        </div>
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
