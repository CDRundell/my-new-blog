import React from 'react'
import { graphql, useStaticQuery } from "gatsby"


const Footer = () => {

  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

  return <div class="footer">
          <p>Created by {data.site.siteMetadata.author} © 2022</p>
        </div>
}

export default Footer
