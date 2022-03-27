import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

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
      <Helmet title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
      <Link to="/blog">Back to blog page</Link>
    </Layout>
  )
}

export default BlogPost
