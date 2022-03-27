import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Link } from "gatsby"

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
      <Link to="/blog">Back to blog page</Link>
    </Layout>
  )
}

export default BlogPost
