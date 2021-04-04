import { elements } from "@/styles/styled-record"
import { cx } from "@emotion/css"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

interface Props {
  path: string
  text: string
  className?: string
}
const StyledLink = styled(Link)`
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
      width: 100%;
      height: 2px;
    }
  }
`

const HoverLink = ({ path, text, className }: Props) => {
  return (
    <StyledLink to={path} className={cx(className)}>
      {text}
    </StyledLink>
  )
}

export default HoverLink
