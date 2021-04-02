import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  name: string
  content: string
}
type isArray<T> = T extends Array<infer Member> ? Array<Member> : Array<T>
type MetaArray = isArray<Meta>

interface SeoProps {
  description?: string
  title?: string
  meta?: MetaArray
}

interface SeoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      twitterUsername: string
    }
  }
}
const genererateMetaData = (name: string, content: string) => ({ name, content })

export const Seo = ({ description: descreption, title, meta = [] }: SeoProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SeoQuery>(graphql`
    {
      site {
        siteMetadata {
          title
          twitterUsername
          description
        }
      }
    }
  `)
  const metaObj = {
    title: title || siteMetadata.description,
    descreption: descreption || siteMetadata.description,
    twitterUsername: siteMetadata.twitterUsername,
  }

  return (
    <Helmet
      title={metaObj.title}
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        genererateMetaData("description", metaObj.descreption),
        genererateMetaData("og:title", metaObj.title),
        genererateMetaData("og:description", metaObj.descreption),
        genererateMetaData("og:type", `website`),
        genererateMetaData("twitter:title", `website`),
        genererateMetaData("twitter:creator", metaObj.twitterUsername || ``),
        genererateMetaData("twitter:description", metaObj.descreption || ``),
        genererateMetaData("twitter:card", `summery`),
      ].concat(meta)}
    />
  )
}
