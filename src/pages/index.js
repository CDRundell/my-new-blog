import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

  const IndexPage = () => {
    // let stackArray = ["ruby-original", "rails-plain", "javascript-original", "css3-original", "postgresql-original-wordmark"]
  return (<Layout>
          <Head title="Home"/>
              <h2>
                <strong> Chemist 🧪 | Coder 💻 </strong>
              </h2>
              <div class="link-bar">
                {/* <Link to="/blog">My blog</Link> */}
              </div>
              <div class="tile-wrapper">
                <div class="homepage-tile">
                  <h3>Assetbase</h3>
                  <ul>Asset-base.money website was made during my time at Le Wagon, highlights of this project are:
                    <li>Calling multiple APIs for financial information</li>
                    <li>Use of Charkick/Chart.js</li>
                    <li>Webscraping of OpenSea for live API prices</li>
                  </ul>
                  <p> Further work needs to be done on this website as at present it is a mobile only display format.</p>
                  <div>
                    <h4>Tech stack</h4>
                    <div class="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt='Ruby language' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt='Rails framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language'/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS language' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='PostgreSQL database' />
                    </div>
                  </div>
                </div>
                <div class="homepage-tile">
                  <h3>This website!</h3>
                    <p> After my bootcamp I decided to learn React and generally strengthen my Javascript skills.
                      Making a website using Gatsby looked like a good way to do this, while also being a site for a blog.
                    </p>
                    <div class="spacer"></div>
                  <div>
                    <h4>Tech stack</h4>
                    <div class="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt='Gatsby framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS language'/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphQL database' />
                    </div>
                  </div>
                </div>
              </div>
        </Layout>)
}

export default IndexPage
