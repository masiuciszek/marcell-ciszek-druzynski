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
    bottom: 0;
    left: 0;
    background-color: ${elements.stroke};
    width: 0;
    height: 0;
    transition: 200ms ease all;
    transform: rotate(-3deg);
  }
  &:hover {
    transform: scale(1.045);
    &:before {
      opacity: 1;
    }
    &:after {
      width: 100%;
      height: 2px;
    }
  }

  &.active {
    span {
      position: relative;
      display: inline-block;
      z-index: 2;
    }
    &:before {
      width: 0.75em;
      height: 0.75em;
      content: "";
      pointer-events: none;
      background-color: ${elements.stroke};
      position: absolute;
      z-index: 0;
      opacity: 1;
      --translate: -0.5rem;
      --rotate: 0deg;
      transform: translateX(var(--translate)) translateY(var(--translate)) rotate(var(--rotate));
      top: 12px;
      left: 4px;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${elements.stroke};
      width: 100%;
      height: 2px;
      transition: 200ms ease all;
      transform: rotate(-3deg);
    }
  }
`

const HoverLink = ({ path, text, className }: Props) => {
  return (
    <StyledLink to={path} className={cx(className)} activeClassName="active">
      <span>{text}</span>
    </StyledLink>
  )
}

export default HoverLink
