import { pxToRem } from "@/styles/css-utils"
import { above } from "@/styles/media-query"
import { Node } from "@/types/types"
import styled from "@emotion/styled"
import React from "react"

interface BitesListProps {
  bites: Array<Node["node"]>
}

const StyledList = styled.ul`
  padding: 0;
  border: 2px solid red;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: ${pxToRem(16)} ${pxToRem(8)};
`

const ListItem = styled.li`
  margin-bottom: ${pxToRem(8)};
  border: 2px solid red;
  padding: ${pxToRem(5)};

  .head,
  .body {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  @media ${above.mobileS} {
    width: 90%;
  }
  @media ${above.mobileL} {
    width: ${pxToRem(400)};
  }
  @media ${above.tablet} {
    width: ${pxToRem(500)};
  }
`

const BitesList: React.FC<BitesListProps> = ({ bites }) => {
  return (
    <StyledList>
      {bites.map(({ id, frontmatter }) => {
        return (
          <ListItem key={id}>
            <div className="head">
              <p>{frontmatter.title}</p>
              <p>{frontmatter.date}</p>
            </div>
            <div className="body">
              <p>{frontmatter.length}</p>
              <p>
                {frontmatter.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            </div>
          </ListItem>
        )
      })}
    </StyledList>
  )
}
export default BitesList
