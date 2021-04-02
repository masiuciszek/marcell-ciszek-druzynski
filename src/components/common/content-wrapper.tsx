import { elements } from "@/styles/styled-record"
import { css, cx } from "@emotion/css"
import React from "react"

interface ContentWrapperProps {
  className?: string
  fluid?: boolean
}
const styles = (fluid = false) => css`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  max-width: ${fluid ? elements.maxWidth : null};
`

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className, fluid }) => {
  return <section className={cx(styles(fluid), className)}>{children}</section>
}
export default ContentWrapper
