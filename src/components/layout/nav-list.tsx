import { pxToRem } from "@/styles/css-utils"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

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
  li {
    margin-bottom: ${pxToRem(8)};
    margin-right: ${pxToRem(33)};
  }
  a {
    font-size: var(--a-size);
  }
`

export const NavList = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<QueryType>(NAV_QUERY)
  // console.log("routes", query.site.siteMetadata.routes)

  return (
    <List>
      {siteMetadata.routes.map(({ name, route }) => (
        <li key={name}>
          <Link to={route}>{name}</Link>
        </li>
      ))}
    </List>
  )
}
