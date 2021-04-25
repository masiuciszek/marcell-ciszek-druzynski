import React from "react"
import { css, cx } from "@emotion/css"

interface TitleProps {
  className?: string
  mainTitle?: string
  secondaryTitle?: string
}

const styles = css``

const Title: React.FC<TitleProps> = ({ className, mainTitle, children, secondaryTitle }) => {
  const hasSecondaryTitle = Boolean(secondaryTitle)
  return (
    <section
      data-testid="page-title-component"
      className={cx(styles, "component-title", className)}
    >
      {mainTitle && <h1>{mainTitle}</h1>}
      {hasSecondaryTitle && <h3>{secondaryTitle}</h3>}
      {children}
    </section>
  )
}
export default Title
