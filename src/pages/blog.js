import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import Tags from '../components/tags'
import BlogText from '../components/blog_text'


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
                      <BlogText text={item.node.frontmatter} excerpt={item.node.excerpt} />
                      <Tags tags={item.node.frontmatter.Tags}/>
                    </div>
                  </Link>
              ))}
              </div>
          </Layout>)
}

export default BlogPage
