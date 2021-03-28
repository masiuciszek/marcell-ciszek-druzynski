import { baseColors } from "@/styles/colors"
import { pxToRem } from "@/styles/css-utils"
import { cx, css } from "@emotion/css"

import React from "react"

interface StrokeWrapperProps {
  className?: string
}

const styles = css`
  & {
    color: ${baseColors.stroke};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: ${baseColors.highlightShadow};
      height: ${pxToRem(4)};
    }
  }
`

const StrokeWrapper: React.FC<StrokeWrapperProps> = ({ children, className }) => {
  return <span className={cx(styles, className)}>{children}</span>
}
export default StrokeWrapper
