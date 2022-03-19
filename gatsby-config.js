/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'My Digital Garden',
    author: 'Chris'
  },
  plugins: [`gatsby-plugin-sass`]
}



// plugins: [
//   {
//     resolve: `gatsby-source-notion-api`,
//     options: {
//       token: `$INTEGRATION_TOKEN`,
//       databaseId: `$DATABASE_ID`,
//       propsToFrontmatter: true,
//       lowerTitleLevel: true,
//     },
//   },
//   // ...
// ]
// https://www.notion.so/e913aac6cafe438c9048aead4010d6d3?v=dab95cf7a9334672bbe19c5cfd1906d7
