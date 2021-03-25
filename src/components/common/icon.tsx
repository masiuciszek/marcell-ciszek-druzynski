import { remToPx } from "@/styles/css-utils"
import { cx, css } from "@emotion/css"
import React from "react"

interface IconProps {
  src: string
  alt: string
  className?: string
}

const iconStyles = css`
  & {
    width: ${remToPx(2)};
  }
`

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <img className={cx(iconStyles, className)} src={src} alt={alt} />
}
export default Icon
