import { css, cx } from "@emotion/css"
import React from "react"

interface ContentWrapperProps {
  className?: string
}
const styles = css``

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className }) => {
  return <section className={cx(styles, className)}>{children}</section>
}
export default ContentWrapper
