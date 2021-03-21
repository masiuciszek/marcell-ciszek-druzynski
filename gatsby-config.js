const path = require("path")
const config = {
  // Project title. Used as SEO title and PWA name
  title: "Marcell Ciszek Druzysnki",
  // Project short name. Used by PWA
  shortTitle: "Masiu CD",
  // Project description. Used in SEO meta tag and by PWA
  description: "My site",
  // Keywords describing the project. Used in SEO meta tag
  keywords: ["gatsby", "gatsby-starter", "react", "typescript", "jest", "pwa", "graphql"],
  // Absolute deployment path (without trailing slash). Used as base URL in SEO meta tags
  baseUrl: "https://gatsby-starter-vadyan.netlify.app",
  // Site language. Added in html tag and PWA manifest
  lang: "en",
  // Your username on Facebook. Used in SEO meta tags
  facebookUsername: "s",
  // Your username on Twitter (without @). Used in SEO meta tags
  twitterUsername: "s",
  // Path to main favicon. Recommended size: 512x512. Other sizes are generated automatically
  favicon: "src/favicons/favicon-16x16.png",
  // Theme color. Used as color of device toolbar in supported browsers
  themeColor: "#362066",
  // Background color. Used as background on PWA launch screen. Recommended to make it the same as body color
  backgroundColor: "#362066",
}
module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    baseUrl: config.baseUrl,
    lang: config.lang,
    facebookUsername: config.facebookUsername,
    twitterUsername: config.twitterUsername,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        display: "standalone",
        name: config.title,
        short_name: config.shortTitle,
        description: config.description,
        lang: config.lang,
        icon: config.favicon,
        theme_color: config.themeColor,
        background_color: config.backgroundColor,
      },
    },
  ],
}
