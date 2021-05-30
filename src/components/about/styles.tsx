import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const H4 = styled.h4`
  position: relative;
  z-index: 1;
  &:before {
    width: 0.75em;
    height: 0.75em;
    content: "";
    pointer-events: none;
    background-color: ${elements.stroke};
    position: absolute;
    z-index: -1;
    --translate: -0.5rem;
    --rotate: 0deg;
    top: 9px;
    left: 2px;
    transform: translateX(var(--translate)) translateY(var(--translate)) rotate(var(--rotate));
  }
`

export const RefTarget = styled.div`
  height: 100%;
`
export const Section = styled(motion.section)`
  width: 100%;
`
