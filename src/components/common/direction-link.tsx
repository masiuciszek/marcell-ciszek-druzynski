import React from "react"
import { elements, elevations } from "@/styles/styled-record"
import { css, cx } from "@emotion/css"
import { Link } from "gatsby"

interface DirectionLinkProps {
  linkText?: string
  linkIcon?: string
  className?: string
}

const styles = css`
  border: 2px solid ${elements.p};
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 10em;
  max-height: 2.5em;
  box-shadow: ${elevations.shadowM};
  color: ${elements.p};
  border-radius: ${elements.borderRadiusS};
  transform: rotate(-1deg);
  &:hover {
    transform: rotate(0);
    span {
      transform: rotate(2deg);
    }
  }
  span {
    display: inline-block;
    font-size: 2em;
    transform: rotate(12deg);
    transition: transform 200ms ease-out;
  }
`

const DirectionLink = ({ linkText, linkIcon, className }: DirectionLinkProps) => (
  <Link to="/blog" className={cx(styles, className)}>
    {" "}
    {linkIcon ? <span> {linkIcon}</span> : <span>&#8592;</span>}{" "}
    {linkText ? linkText : "Back to posts"}
  </Link>
)

export default DirectionLink
