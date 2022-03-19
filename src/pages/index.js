import React from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"

import Layout from '../components/layout'
import '../styles/index.scss'




  const IndexPage = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)


  return (<Layout>
              <h2>
                <strong> Chemist 🧪 | Coder 💻 </strong>
              </h2>
              <div class="link-bar">
                <Link to="/blog">My blog</Link>
              </div>
              <div class="tile-wrapper">
                <div>
                  <p>Project 1</p>
                </div>
                <div>
                  <p>Project 2</p>
                </div>
                <div>
                  <p>Project 3</p>
                </div>
              </div>
        </Layout>)
}

export default IndexPage
