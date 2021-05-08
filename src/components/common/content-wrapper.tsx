import { commonGridStyles } from "@/styles/css-utils"
import { elements } from "@/styles/styled-record"
import { css, cx } from "@emotion/css"
import React from "react"

interface ContentWrapperProps {
  className?: string
  fluid?: boolean
}
const styles = (fluid = false) => css`
  ${commonGridStyles};
  padding: 0.5rem;
  max-width: ${fluid ? "100%" : elements.maxWidth};
`

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className, fluid }) => {
  return <section className={cx(styles(fluid), className)}>{children}</section>
}
export default ContentWrapper
