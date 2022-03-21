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
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_csTMRLACkwg3XakoKBOosB7N5OxLoyIl5aTxRcENIUo`,
        databaseId: `62267e01ff8f4486b03688f041bc5c8e`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }
]
}



// plugins: [
//   {
//     resolve: `gatsby-source-notion-api`,
//     options: {
//       token: `secret_csTMRLACkwg3XakoKBOosB7N5OxLoyIl5aTxRcENIUo`,
//       databaseId: `b7b6dfc44e754e0b9269e56e268d417f`,
//       propsToFrontmatter: true,
//       lowerTitleLevel: true,
//     },
//   },
//   // ...
// ]
