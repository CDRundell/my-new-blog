import React from 'react'
import { graphql, useStaticQuery } from "gatsby"


const Header = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

  return (<div class="header">
              <h1>
                {data.site.siteMetadata.title}
              </h1>
          </div>)
}

export default Header
