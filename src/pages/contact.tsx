import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import ContactInfo from "@/components/contact-info"
import { Content } from "@/components/contact-info/content"
import Layout from "@/components/layout/layout"
import MailChimp from "@/components/contact/mail-chimp"
import { Seo } from "@/components/seo"
import { elements, fonts } from "@/styles/styled-record"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import React from "react"
import { useInView } from "react-intersection-observer"

const wrapperStyles = css`
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

const ContactPage = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  return (
    <Layout>
      <Seo title="Contact me" description="Let's get in touch" />
      <ContentWrapper className={wrapperStyles}>
        <H1>
          <StrokeWrapper className={strokeStyles}>Contact</StrokeWrapper> me
        </H1>
        <Content />
        <MailChimp />
        {/* TODO: When we scroll down then we will animate the icons */}
        <ContactInfo ref={ref} inView={inView} />
      </ContentWrapper>
    </Layout>
  )
}

export default ContactPage
