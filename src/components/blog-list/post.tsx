import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
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

const StyledPost = styled.article`
  border-bottom: 2px solid ${elements.p};
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${elements.boxBackground};
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

const ReadMore = styled(Link)`
  display: block;
  cursor: pointer;
`

const Post = ({ node }: PostProps) => {
  return (
    <StyledPost>
      <div className="head">
        <p>{node.frontmatter.title}</p>
        <ul>
          {node.frontmatter.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      {/* <p>{node.excerpt}</p> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste cum libero vitae harum
        voluptate corrupti rerum odio debitis minus reiciendis reprehenderit, fugit numquam
        quibusdam alias earum consequatur dolorem unde architecto tempore! Vitae aut vero iste nulla
        voluptate ea mollitia incidunt molestias distinctio? Quos at, aliquam atque
      </p>
      {/* TODO: Fancy arrow animation here with svg */}
      <ReadMore to={`/blog/${node.slug}`}>Read More about {node.frontmatter.title}</ReadMore>
    </StyledPost>
  )
}

export default Post
