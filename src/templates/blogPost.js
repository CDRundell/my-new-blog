import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
  markdownRemark(frontmatter: {title: {eq: $slug}}) {
    frontmatter {
      title
    }
    html
  }
}
`
const BlogPost = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
    </Layout>
  )
}

export default BlogPost
