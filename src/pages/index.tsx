import * as React from "react"
import Layout from "@/components/layout/layout"
import { RootWrapper } from "@/components/common/root-wrapper"
import { graphql, Link, PageProps } from "gatsby"
import { css, cx } from "@emotion/css"
import { Seo } from "@/components/seo"
import Typed from "react-typed"
import { above } from "@/styles/media-query"
import { pxToRem } from "@/styles/css-utils"
import ContentWrapper from "@/components/common/content-wrapper"
import StrokeWrapper from "@/components/common/stroke-wrapper"

interface HomeQuery {
  mLogo: {
    name: string
    childImageSharp: {
      fluid: any
    }
  }
}

const textLines = [
  `Happy <strong>Developer</strong>`,
  `Endurance <strong>freak</strong> `,
  `Animal <strong>lover</strong> `,
  `<strong>Loves</strong> to create stuff`,
]

const rootWrapperStyles = css`
  & {
    border: 2px solid red;
    display: flex;
    align-items: center;
    min-height: 65vh;
    margin-right: auto !important;
  }
`

const wrapperStyles = css`
  & {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: ${pxToRem(500)};
    @media ${above.tabletL} {
      flex-flow: row wrap;
    }
  }
`

const sectionStyles = css`
  & {
    flex: 1 0 50%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 0.5rem;
  }
`

const columnStyles = css`
  & {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    flex: 1 0 50%;
    padding: 0.5rem;
  }
`

const stokeStyles = css`
  & {
    &::after {
      bottom: ${pxToRem(9)};
      height: 0.5rem;
      transform: rotate(-3deg);
    }
  }
`

const HomePage = ({ data }: PageProps<HomeQuery>) => {
  return (
    <Layout>
      <Seo />
      {/* TODO: work with the background image when we have a more propper layout */}
      <RootWrapper withSection className={rootWrapperStyles}>
        <div className={cx(wrapperStyles, "home-wrapper")}>
          <ContentWrapper className={sectionStyles}>
            <h3>
              Hi my <StrokeWrapper className={stokeStyles}>name</StrokeWrapper> is{" "}
              <StrokeWrapper>Marcell</StrokeWrapper>, I create stuff with{" "}
              <StrokeWrapper className={stokeStyles}>&lt;code/&gt;</StrokeWrapper>.
            </h3>
            <p>Writing and learning is my also passion</p>
            <Link to="/">Blog</Link>
          </ContentWrapper>
          <div className={cx(columnStyles, "col")}>
            <Typed
              style={{
                maxWidth: 320,
                fontSize: 34,
              }}
              strings={textLines}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
            <h4>Some Icon here?</h4>
          </div>
        </div>
      </RootWrapper>
    </Layout>
  )
}

export const HOME_PAGE_QUERY = graphql`
  {
    mLogo: file(relativePath: { eq: "mmm.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default HomePage
