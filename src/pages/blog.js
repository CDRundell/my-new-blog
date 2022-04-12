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
              <div>
                {data.allMarkdownRemark.edges.map((item, i) =>(
                <div className="blog-tile">
                  <p key={item.node.id}>
                      <Link to={`/blog/${i + 1}`}>
                        <strong> {item.node.frontmatter.title} ({item.node.frontmatter.Created.split("T")[0].split("-").reverse().join("-")})</strong> - {item.node.excerpt}
                      </Link>
                  </p>

                  <div className="tags">
                      {item.node.frontmatter.Tags.map((tag) => (
                        <p className= {tag.name.replace(/ /g, '-')} >#{tag.name}</p>
                      ))
                        }
                  </div>
                </div>
              ))}
              </div>
          </Layout>)
}

export default BlogPage
