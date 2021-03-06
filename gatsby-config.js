module.exports = {
  siteMetadata: {
    title: `Java Book`,
    description: `Refresh your knowledge or jump right into new programming journey...`,
    author: `@adrianghub`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx-prismjs`,
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayout: require.resolve('./src/templates/blogTemplate/blogTemplate.js'),
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaBook`,
        short_name: `JavaBook`,
        start_url: `/`,
        background_color: `#f44f18`,
        theme_color: `#f44f18`,
        display: `standalone`,
        icon: `src/images/howtolearn.jpg`
      },
    },
    {
      resolve:`gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
