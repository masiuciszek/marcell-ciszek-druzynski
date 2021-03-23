import * as React from "react"
import Title from "@/components/common/title"
import Layout from "@/components/layout"
import { RootWrapper } from "@/components/common/root-wrapper"
import { graphql, PageProps } from "gatsby"
import { css } from "@emotion/css"

interface HomeQuery {
  marcell: {
    publicURL: string
  }
}

const wrapperStyles = (backgroundImage: string) => css`
  & {
    background: url(${backgroundImage}) center center no-repeat;
    min-height: 100vh;
    background-repeat: none;
  }
`

const HomePage = ({ data }: PageProps<HomeQuery>) => {
  console.log("data", data.marcell.publicURL)

  return (
    <Layout className={wrapperStyles(data.marcell.publicURL)}>
      {/* TODO: work with the background image when we have a more propper layout */}
      <RootWrapper withSection>
        <Title mainTitle="yoooo" />
      </RootWrapper>
    </Layout>
  )
}

export const HOME_PAGE_QUERY = graphql`
  {
    marcell: file(relativePath: { eq: "mcd.svg" }) {
      publicURL
    }
  }
`

export default HomePage
