import * as React from "react"
import { cx, css } from "@emotion/css"

interface RootWrapperProps {
  className?: string
  withSection: boolean
}
const styles = css`
  max-width: var(--max-width);
  padding: 1.2rem;
  margin: 0 auto;
`

export const RootWrapper: React.FC<RootWrapperProps> = ({ children, className, withSection }) => {
  return withSection ? (
    <section className={cx(styles, className)}>{children}</section>
  ) : (
    <>{children}</>
  )
}
