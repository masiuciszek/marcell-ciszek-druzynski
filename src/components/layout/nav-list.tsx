import { pxToRem } from "@/styles/css-utils"
import { Route } from "@/types/types"
import { css, cx } from "@emotion/css"
import React from "react"
import HoverLink from "../common/hover-link"

const styles = css`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  li {
    margin-bottom: ${pxToRem(8)};
    margin-right: ${pxToRem(33)};
  }
`

interface NavListProps {
  className?: string
  routes: Array<Route>
}

export const NavList = ({ className, routes }: NavListProps) => {
  return (
    <ul className={cx(styles, className)}>
      {routes.map(({ name, route }) => (
        <li key={name}>
          <HoverLink path={route} text={name} />
        </li>
      ))}
    </ul>
  )
}
