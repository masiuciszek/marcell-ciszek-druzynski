import React from "react"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import StrokeWrapper from "@/components/common/stroke-wrapper"

const BitesPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Bites and stuff" description="Some of my pictures and different bites" />
      <h1>BitesPage</h1>

      <p>
        My collection of code snippets that I use daily. Get some inspiration or use the code by all
        the developers favorite mode, <StrokeWrapper>copy and paste</StrokeWrapper>.
      </p>
      <p>
        inspired by <StrokeWrapper>Kyle Shelvin&#x27;s blog</StrokeWrapper> and{" "}
        <StrokeWrapper>Josh W. Comeau&#x27;s blog</StrokeWrapper>{" "}
      </p>
    </Layout>
  )
}

export default BitesPage
