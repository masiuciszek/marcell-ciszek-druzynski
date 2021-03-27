import { css, cx } from "@emotion/css"
import React from "react"

interface ContentWrapperProps {
  className?: string
}
const styles = css`
  & {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className }) => {
  return <section className={cx(styles, className)}>{children}</section>
}
export default ContentWrapper
