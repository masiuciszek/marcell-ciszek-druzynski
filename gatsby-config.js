module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          config: `config/`,
          "@utils": "src/utils/"
        }
      }
    }
  ]
};
