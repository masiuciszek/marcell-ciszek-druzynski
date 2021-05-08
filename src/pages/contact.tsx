import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import ContactInfo from "@/components/contact-info"
import Layout from "@/components/layout/layout"
import { elements, fonts } from "@/styles/styled-record"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import React from "react"

const wrapperStyles = css`
  border: 2px solid red;
  justify-items: center;
`

const H1 = styled.h1`
  position: relative;
  display: inline-block;
  z-index: 2;
  &:before {
    width: 0.75em;
    height: 0.75em;
    content: "";
    background-color: ${elements.stroke};
    position: absolute;
    z-index: 0;
    opacity: 0.75;
    --translate: -0.5rem;
    --rotate: 0deg;
    transform: translateX(var(--translate)) translateY(var(--translate)) rotate(var(--rotate));
    top: 12px;
    left: 4px;
  }
`

const strokeStyles = css`
  font-family: ${fonts.rednika};
`

const ContactPage = () => {
  return (
    <Layout>
      <ContentWrapper className={wrapperStyles}>
        <H1>
          <StrokeWrapper className={strokeStyles}>Contact</StrokeWrapper> me
        </H1>
        <p>
          I have some <StrokeWrapper>questions</StrokeWrapper>, and want to stay in touch
        </p>
        <p>
          Hey, sure you can always send me a <StrokeWrapper>message</StrokeWrapper>
        </p>
        <ContactInfo />
      </ContentWrapper>
    </Layout>
  )
}

export default ContactPage
