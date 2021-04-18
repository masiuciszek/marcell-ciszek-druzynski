import { pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import HoverLink from "../common/hover-link"

const NAV_QUERY = graphql`
  {
    site {
      siteMetadata {
        routes {
          name
          route
        }
      }
    }
  }
`
interface Route {
  name: string
  route: string
}

interface QueryType {
  site: {
    siteMetadata: {
      routes: Array<Route>
    }
  }
}
const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  li {
    margin-bottom: ${pxToRem(8)};
    margin-right: ${pxToRem(33)};
  }
`

export const NavList = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<QueryType>(NAV_QUERY)

  return (
    <List>
      {siteMetadata.routes.map(({ name, route }) => (
        <li key={name}>
          <HoverLink path={route} text={name} />
        </li>
      ))}
    </List>
  )
}
