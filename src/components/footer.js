import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { FaGithub } from 'react-icons/fa';


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

  return (<div class="footer">
          <p>Created by {data.site.siteMetadata.author} © 2022</p>
          <a href="https://github.com/CDRundell" target="_blank" alt="github logo link"><FaGithub /></a>
        </div>)
}

export default Footer
