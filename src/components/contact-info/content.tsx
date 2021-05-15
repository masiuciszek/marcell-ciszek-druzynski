import { pxToRem } from "@/styles/css-utils"
import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import StrokeWrapper from "../common/stroke-wrapper"

const ContentContainer = styled.section`
  margin-bottom: 2rem;
  a[data-sendto="mcd"] {
    display: inline-block;
    span {
      &:after {
        background: ${elements.stroke};
        bottom: 0.1rem;
        opacity: 0.45;
        height: ${pxToRem(9)};
        width: 0;
        transition: width 500ms ease-in-out;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }
`

export const Content = () => {
  return (
    <ContentContainer>
      <p>
        I have some <StrokeWrapper>questions</StrokeWrapper>, and want to stay in touch.
      </p>
      <p>
        <strong>What can I do?</strong>
      </p>
      <hr />
      <p>
        Hey, you can always send me a <StrokeWrapper>message</StrokeWrapper> on my most frequent
        social platforms
      </p>
      <p>
        <StrokeWrapper>Twitter</StrokeWrapper>, <StrokeWrapper>Linkedin</StrokeWrapper> is where you
        can send me a quick message or see what I am up to 😎.
      </p>
      <p>
        Want to check out some code, then you are more then welcome to visit my{" "}
        <StrokeWrapper>Github</StrokeWrapper> and <StrokeWrapper>Codepen</StrokeWrapper> profile
      </p>
      <p>Not what you are looking for?</p>
      <address>
        <StrokeWrapper>Hey!!</StrokeWrapper> you could always email at{" "}
        <motion.a
          href="mailto:ciszekmarcell@gmail.com"
          data-sendto="mcd"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.9 }}
        >
          <StrokeWrapper>Ciszek Druszynski Marcell</StrokeWrapper>
        </motion.a>
        .<br />
      </address>
    </ContentContainer>
  )
}
