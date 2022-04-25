import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from "gatsby"

const Head = ( { title } ) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} >
      <meta charSet="utf-8" />
      <meta name="description" content="organic chemist learning to code" />
      <meta name="og:description" content="organic chemist learning to code" />
    </Helmet>
  )
}


export default Head
