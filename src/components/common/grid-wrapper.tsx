import React from "react"
import { css, cx } from "@emotion/css"
import { commonGridStyles } from "@/styles/css-utils"

export const gridWrapperStyles = css`
  ${commonGridStyles}
`

interface GridWrapperProps {
  className?: string
}

const GridWrapper: React.FC<GridWrapperProps> = ({ className, children }) => {
  return <section className={cx(gridWrapperStyles, className)}>{children}</section>
}

export default GridWrapper
