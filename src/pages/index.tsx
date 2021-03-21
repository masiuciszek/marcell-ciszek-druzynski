import * as React from "react"
import Title from "@/components/common/title"
import Layout from "@/components/layout"
import { RootWrapper } from "@/components/common/root-wrapper"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"

interface Node {
  node: {
    id: string
    publicURL: string
  }
}
interface HomeQuery {
  images: {
    edges: Array<Node>
  }
  foo: any
}

const HomePage = ({ data }: PageProps<HomeQuery>) => {
  console.log("data", data)
  const [im, hey, marcell] = data.images.edges

  return (
    <Layout>
      {/* <div
        style={{
          objectFit: "cover",
          width: "100%",
          backgroundRepeat: "no-repeat",
          height: 500,
          backgroundImage: `url(${hey.node.publicURL})`,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          objectFit: "cover",
          width: "100%",
          backgroundRepeat: "no-repeat",
          height: 500,
          top: 220,
          right: 0,
          backgroundImage: `url(${im.node.publicURL})`,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          objectFit: "cover",
          width: "100%",
          backgroundRepeat: "no-repeat",
          height: 500,
          backgroundImage: `url(${marcell.node.publicURL})`,
          top: 720,
          position: "absolute",
        }}
      ></div> */}

      <RootWrapper withSection>
        <Title mainTitle="yoooo" />
      </RootWrapper>
    </Layout>
  )
}

export const HOME_PAGE_QUERY = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          id

          publicURL
        }
      }
    }
    foo: file(relativePath: { eq: "hey.png" }) {
      childImageSharp {
        fluid(quality: 10, maxWidth: 120, maxHeight: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default HomePage
