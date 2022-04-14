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
                title,
                Tags {
                  name
                }
              Publish,
              Created
              }
              html
              excerpt
            }
          }
        }
      }
    `)
    return (
            <Layout>
            <Head title="Blog"/>
              <div className="blog-wrapper">
                {data.allMarkdownRemark.edges.slice(0).reverse().map((item, i) =>(
                  item.node.frontmatter.Publish
                  &&
                  <Link to={`/blog/${data.allMarkdownRemark.edges.length - i}`}>
                  <div className="blog-tile" key={item.node.id}>
                    <div className="blog-text">
                      <p><strong>{item.node.frontmatter.title}</strong></p>
                      <p>{item.node.frontmatter.Created.split("T")[0].split("-").reverse().join("-")}</p>
                      <p>{item.node.excerpt}</p>
                    </div>
                    <div className="tags">
                      {item.node.frontmatter.Tags.map((tag) => (
                        <p className= {tag.name.replace(/ /g, '-')} >#{tag.name}</p>
                      ))
                      }
                    </div>
                  </div>
                  </Link>
              ))}
              </div>
          </Layout>)
}

export default BlogPage
