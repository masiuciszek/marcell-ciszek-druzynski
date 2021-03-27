import React from "react"
import { Link } from "gatsby"
import { css, cx } from "@emotion/css"
import { pxToRem } from "@/styles/css-utils"
import { elements, elevations, transition } from "@/styles/styled-record"

interface LinkProps {
  className?: string
  to: string
  text: string
}

const styles = css`
  & {
    border: 2px solid ${elements.p};
    width: ${pxToRem(110)};
    font-size: ${pxToRem(18)};
    display: block;
    margin: 1rem 0;
    background-color: transparent;
    color: ${elements.p};
    text-align: center;
    transition: ${transition.main};
    border-radius: ${elements.borderRadiusS};
    box-shadow: ${elevations.shadowM};
    outline: none;
    &:hover {
      background-color: ${elements.btnBackgroundOne};
      color: ${elements.background};
      width: ${pxToRem(100)};
    }
  }
`

export const LinkElement = ({ className, to, text }: LinkProps) => {
  return (
    <Link to={to} className={cx(styles, className)}>
      {text}
    </Link>
  )
}
