import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "@/components/layout/layout"
import { Seo } from "@/components/seo"
import Title from "@/components/common/title"
import ContentWrapper from "@/components/common/content-wrapper"
import { css } from "@emotion/css"
import Hero from "@/components/hero"
import { ImageDataLike } from "@/types/types"
import styled from "@emotion/styled"
import { elements } from "@/styles/styled-record"

const notFoundPageStyles = css`
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface NotFoundPageProps {
  hero: {
    childImageSharp: ImageDataLike
  }
}

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: ${elements.background};
  width: 11rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid ${elements.stroke};
  color: ${elements.a};
  transition: 200ms ease all;
  &:hover {
    background-color: ${elements.p};
    color: ${elements.background};
    width: 10.9rem;
  }
`

const titleStyles = css`
  h1,
  h3 {
    color: ${elements.background};
    text-shadow: 1px 2px ${elements.p};
  }
`

const NotFoundPage = ({ location, data }: PageProps<NotFoundPageProps>): JSX.Element => {
  const { hero } = data
  return (
    <Layout>
      <Seo title="Oops something went wrong" description="something went wrong page, 404" />
      <Hero image={hero as ImageDataLike}>
        <ContentWrapper className={notFoundPageStyles}>
          <Title
            className={titleStyles}
            mainTitle={`Oops something went wrong, could not find page ${location.pathname}`}
            secondaryTitle="No worries I will help you to get back"
          >
            <StyledLink to="/">Back Home</StyledLink>
          </Title>
        </ContentWrapper>
      </Hero>
    </Layout>
  )
}

export const NOT_FOUND_PAGE_QUERY = graphql`
  {
    hero: file(relativePath: { eq: "jp-view-1.png" }) {
      childImageSharp {
        gatsbyImageData(
          quality: 90
          layout: CONSTRAINED
          tracedSVGOptions: { blackOnWhite: true, threshold: 90 }
        )
      }
    }
  }
`

export default NotFoundPage
