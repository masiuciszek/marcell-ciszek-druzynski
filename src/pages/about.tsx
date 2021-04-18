import { Hobbies } from "@/components/about/hobbies"
import Intro from "@/components/about/intro"
import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"
import Layout from "@/components/layout/layout"
import { css } from "@emotion/css"
import React from "react"

const styles = css`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;
`

const AboutPage = () => {
  return (
    <Layout fluid>
      <ContentWrapper className={styles}>
        <h3>
          Hey I&apos;m <StrokeWrapper>Marcell</StrokeWrapper> Ciszek Druszynski
        </h3>

        <Intro />
        <Hobbies />
      </ContentWrapper>
    </Layout>
  )
}

export default AboutPage
