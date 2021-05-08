import React from "react"
import { css, cx } from "@emotion/css"

export const gridWrapperStyles = css`
  display: grid;
  grid-template-columns: 1fr;
`

interface GridWrapperProps {
  className?: string
}

const GridWrapper: React.FC<GridWrapperProps> = ({ className, children }) => {
  return <section className={cx(gridWrapperStyles, className)}>{children}</section>
}

export default GridWrapper
