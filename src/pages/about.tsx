import React from "react"
import { Hobbies } from "@/components/about/hobbies"
import Intro from "@/components/about/intro"
import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import { css } from "@emotion/css"
import { useInView } from "react-intersection-observer"

const styles = css`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;
`

const AboutPage = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  return (
    <Layout fluid>
      <Seo title="about me" description="who am I what I do and what I like" />
      <ContentWrapper className={styles}>
        <h3>
          Hey I&apos;m <StrokeWrapper>Marcell</StrokeWrapper> Ciszek Druszynski
        </h3>
        <Intro />
        <Hobbies ref={ref} inView={inView} />
      </ContentWrapper>
    </Layout>
  )
}

export default AboutPage
