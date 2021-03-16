import * as React from "react"
import Title from "@/components/common/title"
import Layout from "@/components/layout"
import { RootWrapper } from "@/components/common/root-wrapper"

const HomePage = () => {
  return (
    <Layout>
      <RootWrapper withSection>
        <Title mainTitle="yoooo" />
      </RootWrapper>
    </Layout>
  )
}
export default HomePage
