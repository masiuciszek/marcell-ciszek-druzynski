import { baseColors } from "@/styles/colors"
import { pxToRem } from "@/styles/css-utils"
import { fonts } from "@/styles/styled-record"
import { cx, css } from "@emotion/css"

import React from "react"

interface StrokeWrapperProps {
  className?: string
}

const styles = css`
  color: ${baseColors.stroke};
  position: relative;
  font-family: ${fonts.justMono};
  display: inline-block;
  text-shadow: 1px 1px 1px #333;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${baseColors.highlightShadow};
    height: ${pxToRem(4)};
  }
`

const StrokeWrapper: React.FC<StrokeWrapperProps> = ({ children, className }) => {
  return <span className={cx(styles, className)}>{children}</span>
}
export default StrokeWrapper
