import useMediaQuery from "@/hooks/media-query"
import { pxToRem } from "@/styles/css-utils"
import { above, below } from "@/styles/media-query"
import { elements } from "@/styles/styled-record"
import { Route } from "@/types/types"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { NavList } from "./nav-list"

const NavBar = styled.nav`
  min-height: ${pxToRem(80)};
  display: flex;
  align-items: center;
`

const MobileListWrapper = styled(motion.section)`
  background-color: ${elements.bgShadow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const mobileListStyles = css`
  flex-flow: column wrap;
  li {
    a {
      color: ${elements.background};
    }
  }
`

interface QueryType {
  site: {
    siteMetadata: {
      routes: Array<Route>
    }
  }
}

interface NavProps {
  isOpen: boolean
}

export const Nav = ({ isOpen }: NavProps) => {
  const {
    site: {
      siteMetadata: { routes },
    },
  } = useStaticQuery<QueryType>(NAV_QUERY)
  const matchesAboveTablet = useMediaQuery(above.tabletL)
  const matchesUnderTablet = useMediaQuery(below.tabletL)
  const isRegularNavList = matchesAboveTablet && !isOpen
  const isMobileNavList = matchesUnderTablet && isOpen

  return (
    <NavBar>
      {/* Main  list */}
      {isRegularNavList && <NavList routes={routes} />}

      {/* Mobile list */}
      <AnimatePresence exitBeforeEnter initial={false}>
        {isMobileNavList && (
          <MobileListWrapper
            layout
            initial={{ opacity: 0, y: "-100%", height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: "-100%", height: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <NavList className={mobileListStyles} routes={routes} />
          </MobileListWrapper>
        )}
      </AnimatePresence>
    </NavBar>
  )
}

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
