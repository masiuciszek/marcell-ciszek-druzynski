import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { ImageDataLike } from "@/types/types"

interface HeroProps {
  image?: ImageDataLike
}

const HERO_QUERY = graphql`
  {
    hero: file(relativePath: { eq: "stains.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
        # gatsbyImageData(layout: FULL_WIDTH, width: 1920, breakpoints: [320, 500, 1200])
      }
    }
  }
`

interface HeroQueryType {
  hero: {
    childImageSharp: ImageDataLike
  }
}

const Hero: React.FC<HeroProps> = ({ children, image }) => {
  const { hero } = useStaticQuery<HeroQueryType>(HERO_QUERY)
  const img = getImage(image ? image : (hero as ImageDataLike))

  return <BgImage image={img}>{children}</BgImage>
}
export default Hero

// export declare const getImage: (node: ImageDataLike) => IGatsbyImageData | undefined;
