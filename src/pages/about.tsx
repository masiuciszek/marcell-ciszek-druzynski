import React from "react"
import { Hobbies } from "@/components/about/hobbies"
import Intro from "@/components/about/intro"
import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import { css } from "@emotion/css"
import { useInView } from "react-intersection-observer"
import TitleWrapper from "@/components/common/title"
import { pxToRem } from "@/styles/css-utils"
import { elements, elevations, fonts } from "@/styles/styled-record"
import { above } from "@/styles/media-query"

const styles = css`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;
`

const strokeStyles = css`
  font-size: inherit;
  font-family: ${fonts.rednika};
  color: ${elements.stroke};
`

const titleStyles = css`
  background-color: ${elements.boxBackground};
  max-width: ${pxToRem(1000)};
  margin: 0 auto;
  padding: 0.35em 0.45em;
  border-radius: ${elements.borderRadiusS};
  box-shadow: ${elevations.shadowM};
  line-height: 1.6818;

  h1 {
    color: ${elements.boxText};
  }

  @media ${above.mobileS} {
    h1 {
      font-size: ${pxToRem(20)};
    }
  }

  @media ${above.tablet} {
    h1 {
      font-size: ${pxToRem(30)};
    }
  }
  @media ${above.tabletL} {
    h1 {
      font-size: ${pxToRem(36)};
    }
  }
`

const AboutPage = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  return (
    <Layout fluid>
      <Seo title="about me" description="who am I what I do and what I like" />
      <TitleWrapper className={titleStyles}>
        <h1>
          Hello I&apos;m <StrokeWrapper className={strokeStyles}>Marcell</StrokeWrapper>, and this
          is my blog.
          <br />
          <span>
            Here where I share my thoughts, ideas and experience as a software engineer and
            everything that is my main focus right now, like <StrokeWrapper>React</StrokeWrapper>,
            <StrokeWrapper>Typescript</StrokeWrapper>, <StrokeWrapper>GraphQL</StrokeWrapper> and{" "}
            <StrokeWrapper>Rust</StrokeWrapper>.
          </span>
        </h1>
      </TitleWrapper>
      <ContentWrapper className={styles}>
        <Intro />
        <Hobbies ref={ref} inView={inView} />
      </ContentWrapper>
    </Layout>
  )
}

export default AboutPage
