import React from "react"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"

const BitesPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Bites and stuff" description="Some of my pictures and different bites" />
      <h1>BitesPage</h1>

      <p>some cool piece of bites</p>
    </Layout>
  )
}

export default BitesPage
