const path = require('path')
const { resourceLimits } = require('worker_threads')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blogPost.js')
  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            id
            excerpt
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge, i) => {
    createPage ({
      component: blogTemplate,
      path: `/blog/${res.data.allMarkdownRemark.edges.length - i}`,
      context: {
        slug: edge.node.frontmatter.title
      }
    })
  })
}
