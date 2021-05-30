import React from "react"
import { css, cx } from "@emotion/css"

interface TitleProps {
  className?: string
}

const styles = css`
  display: flex;
  flex-wrap: row wrap;
`

const Title: React.FC<TitleProps> = ({ className, children }) => {
  return (
    <section
      data-testid="page-title-component"
      className={cx(styles, "component-title", className)}
    >
      {children}
    </section>
  )
}
export default Title
