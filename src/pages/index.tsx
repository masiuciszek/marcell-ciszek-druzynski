import * as React from "react"
import Title from "@/components/common/title"
import Layout from "@/components/layout/layout"
import { RootWrapper } from "@/components/common/root-wrapper"
import { graphql, PageProps } from "gatsby"
import { css, cx } from "@emotion/css"
import { Seo } from "@/components/seo"
import Typed from "react-typed"
import Image from "gatsby-image"
import { above } from "@/styles/media-query"

interface HomeQuery {
  mLogo: {
    name: string
    childImageSharp: {
      fluid: any
    }
  }
}

const textLines = [
  ` I am Marcell Ciszek Druzynski.`,
  `Developer from gothenburg Sweden`,
  `Endurance <strong>freak</strong> `,
  `Animal <strong>lover</strong> `,
  `And loves to create things`,
]

const rootWrapperStyles = css`
  & {
    border: 2px solid red;
    min-height: 75vh;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
`

const wrapperStyles = css`
  & {
    border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media ${above.tabletL} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
`
const titleStyles = css`
  & {
    border: 2px solid red;

    flex: 1 0 50%;
    height: 20rem;
  }
`

const colSttyles = css`
  & {
    flex: 1 0 50%;
    height: 20rem;
    text-align: center;
    border: 2px solid red;
    .m-logo {
      margin: 0 auto;
    }
  }
`

const HomePage = ({ data }: PageProps<HomeQuery>) => {
  console.log("data", data.mLogo.childImageSharp)
  return (
    <Layout>
      <Seo />
      {/* TODO: work with the background image when we have a more propper layout */}
      <RootWrapper withSection className={rootWrapperStyles}>
        <div className={cx(wrapperStyles, "wrapper")}>
          <Title mainTitle="Hey!" className={titleStyles}>
            <Typed
              style={{
                maxWidth: 120,
                fontSize: 40,
              }}
              strings={textLines}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </Title>
          {/* TODO: choudl be changed later on */}
          <div className={colSttyles}>
            <Image className="m-logo" fluid={data.mLogo.childImageSharp.fluid} />
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
