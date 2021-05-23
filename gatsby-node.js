// Extend default Gatsby config with SVGR support, aliases and Webpack Bundle Analyzer
const path = require("path")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

exports.onCreateWebpackConfig = ({ getConfig, actions, stage, loaders }) => {
  const existingConfig = getConfig()

  const rules = existingConfig.module.rules.map((rule) => {
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/,
      }
    }
    return rule
  })

  actions.replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules,
    },
  })

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          issuer: /\.(?!(j|t)sx?)$/,
          use: loaders.url(),
        },
        {
          test: /\.svg$/,
          issuer: /\.((j|t)sx?)$/,
          use: {
            loader: require.resolve(`@svgr/webpack`),
            options: {
              titleProp: true,
            },
          },
        },
      ],
    },
    plugins:
      stage === "build-javascript"
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              defaultSizes: "gzip",
              openAnalyzer: false,
              generateStatsFile: true,
            }),
          ]
        : [],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  })
}

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            slug
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMdx(filter: { fileAbsolutePath: { regex: "/(posts)/" } }) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.error) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
    // throw new Error(`failed to parse graphql query${result.error}`)
  }
  const posts = result.data.posts.edges
  const tags = result.data.tagsGroup.group

  const POST_PER_PAGE = 4
  const AMOUNT_OF_PAGES = Math.ceil(posts.length / POST_PER_PAGE)

  Array.from({ length: AMOUNT_OF_PAGES }).forEach((_, idx) => {
    createPage({
      path: idx === 0 ? "/blog" : `/blog/${idx + 1}`,
      component: path.resolve("./src/templates/blog-list.tsx"),
      context: {
        limit: POST_PER_PAGE,
        skip: idx * POST_PER_PAGE,
        numberOfPages: AMOUNT_OF_PAGES,
        currentPage: idx + 1,
      },
    })
  })

  posts.forEach(({ node }, index) => {
    const previousPost = index === 0 ? null : posts[index - 1].node
    const nextPost = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: node.slug,
        previousPost,
        nextPost,
      },
    })
  })

  tags.forEach(({ fieldValue }) => {
    createPage({
      path: `/tags/${fieldValue}/`,
      component: require.resolve("./src/templates/tags.tsx"),
      context: {
        tag: fieldValue,
      },
    })
  })
}
