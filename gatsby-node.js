const path = require('path')
const { resourceLimits } = require('worker_threads')

// module.exports.onCreateNode = ( {node, actions} ) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'MarkdownRemark'){
//     // console.log(JSON.stringify(node, undefined, 4))
//     const slug = node.title
//     // console.log("@@@@@@@@@@@@", slug)
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
// }
// }


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
      path: `/blog/${i + 1}`,
      context: {
        slug: edge.node.frontmatter.title
      }
    })
  })
}
