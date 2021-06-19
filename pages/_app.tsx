import * as React from "react"
import {GlobalStyles} from "@components/app/global-styles"
import {AppProps} from "next/app"
import {DefaultSeo} from "next-seo"
import defaultSeoConfig from "../next.seo.json"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <DefaultSeo {...defaultSeoConfig} />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
