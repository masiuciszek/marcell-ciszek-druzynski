import { css, cx } from "@emotion/css"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface AnimatedWrapperProps {
  isAnimated: boolean
  exitBeforeEnter?: boolean
  layout?: boolean
  className?: string
  options?: {
    initial?: Record<string, number | string | Record<string, string | number>>
    animate?: Record<string, number | string | Record<string, string | number>>
    exit?: Record<string, number | string | Record<string, string | number>>
    transition?: Record<string, number | string>
  }
}

const styles = css``

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  isAnimated,
  exitBeforeEnter,
  layout = true,
  className,
  options,
}) => {
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter ? exitBeforeEnter : false}>
      {isAnimated && (
        <motion.section
          data-testid="animated-animatedWrapper"
          layout={layout}
          initial={{ opacity: 0, ...options?.initial }}
          animate={{ opacity: 1, ...options?.animate }}
          exit={{ opacity: 0, ...options?.exit }}
          transition={{ duration: 0.4, ...options?.transition }}
          className={cx(styles, className)}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
export default AnimatedWrapper
