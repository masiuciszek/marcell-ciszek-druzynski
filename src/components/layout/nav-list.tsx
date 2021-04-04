import { pxToRem } from "@/styles/css-utils"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
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
    position: relative;
    transition: 400ms ease-in-out all;
    display: inline-block;
    &:after {
      content: "";
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      background-color: ${elements.stroke};
      width: 0;
      height: 0;
      transition: 200ms ease all;
      transform: rotate(-5deg);
    }
    &:hover {
      transform: scale(1.045);
      &:after {
        width: 2rem;
        height: 0.3rem;
      }
    }
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
          <Link to={route}>{name}</Link>
        </li>
      ))}
    </List>
  )
}
