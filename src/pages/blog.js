import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


import Layout from "../components/layout"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                Created
              }
              html
              id
            }
          }
        }
      }
    `)

    return (<Layout>
            <h1> Welcome to my blog</h1>
            <div class="excerpt-wrapper">
              {data.allMarkdownRemark.edges.map(item =>(
                <div class="excerpt-tile" key={item.node.id}>
                  <h2>{item.node.frontmatter.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
              </div>
            ))}
            <Link to="/">Link back to my portfolio</Link>
            </div>
          </Layout>)
}

export default BlogPage
