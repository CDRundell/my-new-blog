/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})


module.exports = {
  siteMetadata: {
    title: 'My Digital Garden',
    author: 'Chris'
  },
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_TOKEN,
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
