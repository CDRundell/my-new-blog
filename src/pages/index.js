import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

  const IndexPage = () => {

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
                    <li>Webscraping of Opensea for live API prices</li>
                  </ul>
                  <p> Further work needs to be done on this website as at present it is a mobile only display format.</p>
                  <div>
                    <h4>Tech stack</h4>
                    <div class="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                    </div>
                  </div>
                </div>
                <div class="homepage-tile">
                  <h3>This website!</h3>
                    <p> After my bootcamp I decided to learn React and generally strengthen my Javascript skills, I decided
                      that making a website using Gatsby would be a good way to do this while also being a site for a blog.
                    </p>
                    <div class="spacer"></div>
                  <div>
                    <h4>Tech stack</h4>
                    <div class="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                    </div>
                  </div>
                </div>
              </div>
        </Layout>)
}

export default IndexPage
