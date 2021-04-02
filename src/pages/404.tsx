import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import Title from "@/components/common/title"
import ContentWrapper from "@/components/common/content-wrapper"
import { css } from "@emotion/css"
import Hero from "@/components/hero"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode, IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks"

const notFoundPageStyles = css`
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

type ImageDataLike = FileNode | IGatsbyImageDataParent | IGatsbyImageData

interface NotFoundPageProps {
  hero: {
    childImageSharp: ImageDataLike
  }
}

const NotFoundPage = ({ location, data }: PageProps<NotFoundPageProps>) => {
  const { hero } = data
  return (
    <Layout>
      <Seo title="Oops something went wrong" description="something went wrong page, 404" />
      <Hero image={hero as ImageDataLike}>
        <ContentWrapper className={notFoundPageStyles}>
          <Title
            mainTitle={`Oops something went wrong, could not find page ${location.pathname}`}
            secondaryTitle="No worries I will help you to get back"
          >
            <Link to="/">Back Home</Link>
          </Title>
        </ContentWrapper>
      </Hero>
    </Layout>
  )
}

export const NOT_FOUND_PAGE_QUERY = graphql`
  {
    hero: file(relativePath: { eq: "jp-404.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, tracedSVGOptions: { blackOnWhite: true })
      }
    }
  }
`

export default NotFoundPage
