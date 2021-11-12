module.exports = {
  siteMetadata: {
    title: `Siraj Chokshi`,
    description: `Siraj Chokshi is a software engineer studying cognition, computation and linguistics at UIUC.`,
    author: `@sirajchokshi`,
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                sh: 'bash',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-numbered-footnotes`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127113401-2',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
