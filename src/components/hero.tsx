import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

interface HeroProps {}

const HERO_QUERY = graphql`
  {
    hero: file(relativePath: { eq: "im-marcerll-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 1920, breakpoints: [320, 500, 1200])
      }
    }
  }
`

const Hero: React.FC<HeroProps> = ({ children }) => {
  const q = useStaticQuery(HERO_QUERY)

  const img = getImage(q.hero)
  return <BgImage image={img}>{children}</BgImage>
}
export default Hero
