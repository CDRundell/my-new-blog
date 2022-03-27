import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'


const BlogPage = () => {

  const data = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              html
              excerpt
            }
          }
        }
      }
    `)

    return (<Layout>
            <Head title="Blog"/>
            <h1> Welcome to my blog</h1>
              {data.allMarkdownRemark.edges.map((item, i) =>(
              <ul key={item.node.id}>
                  <Link to={`/blog/${i + 1}`}><li>{item.node.frontmatter.title} - {item.node.excerpt}</li></Link>
              </ul>
            ))}
            <Link to="/">Link back to my portfolio</Link>
          </Layout>)
}

export default BlogPage
