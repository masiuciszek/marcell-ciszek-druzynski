import * as React from "react"
import Layout from "@/components/layout/layout"
import { graphql, PageProps } from "gatsby"
import { css, cx } from "@emotion/css"
import { Seo } from "@/components/seo"
import Typed from "react-typed"
import { above, below } from "@/styles/media-query"
import { pxToRem } from "@/styles/css-utils"
import ContentWrapper from "@/components/common/content-wrapper"
import styled from "@emotion/styled"
import { LinkElement } from "@/components/common/link"
import { StaticImage } from "gatsby-plugin-image"
import { elements } from "@/styles/styled-record"

interface HomeQuery {
  round: {
    id: string
    name: string
    publicURL: string
  }
  stains: any
}

const textLines = [
  `Happy <strong class="strong-text">&#60;Developer/&#62;</strong>`,
  `&#60;Endurance/&#62; <strong class="strong-text">freak</strong> `,
  `&#60;Animal/&#62;<strong class="strong-text">lover</strong> `,
  `<strong class="strong-text">&#60;Loves/&#62;</strong> to create stuff`,
]

const contentWrapperStyles = css`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    @media ${above.tablet} {
      flex-direction: row;
    }
    .strong-text {
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        bottom: 1rem;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: ${elements.highlightShadow};
      }
    }
  }
`

const ImageWrapper = styled.div`
  flex: 1 0 50%;

  img {
    @media ${above.mobileS} {
      object-fit: cover;
      width: 300px;
    }
  }
`

const Capture = styled.div`
  flex: 1 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`

const stroke = css`
  & {
    width: 100%;
    height: 12px;
    background-color: #fff;
    background-image: url("https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-position: center;
  }
`

const HomePage = ({ data }: PageProps<HomeQuery>) => {
  const { stains } = data

  return (
    <Layout fluid>
      <Seo />
      {/* <div className={stroke} /> */}

      <ContentWrapper className={contentWrapperStyles}>
        <ImageWrapper>
          <StaticImage src="../images/round-title.svg" alt="my name is marcell" />
          {/* <img src={data.round.publicURL} alt={`${data.round.name} in japanese`} /> */}
        </ImageWrapper>
        <Capture>
          <Typed
            style={{
              maxWidth: 520,
              fontSize: 34,
            }}
            strings={textLines}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
          <LinkElement to="/" text="blog" />
        </Capture>
      </ContentWrapper>
    </Layout>
  )
}

export const HOME_PAGE_QUERY = graphql`
  {
    round: file(relativePath: { eq: "round-title.svg" }) {
      publicURL
      id
      name
    }
    stains: file(relativePath: { eq: "stains.png" }) {
      childImageSharp {
        gatsbyImageData(formats: AUTO, layout: FULL_WIDTH)
      }
    }
  }
`

export default HomePage
