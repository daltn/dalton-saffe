module.exports = {
  siteMetadata: {
    title: `Dalton Saffe`,
    description: `Software, photos, & dance music`,
    author: `@daltonsaffe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dalton-saffe`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0e0e0e`,
        theme_color: `#f5f5f5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
