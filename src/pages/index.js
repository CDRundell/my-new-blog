import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithub } from 'react-icons/fa';

import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

  const IndexPage = () => {

    // const data = useStaticQuery(graphql`
    //         {
    //           cloudinaryMedia(secure_url: {}) {
    //             secure_url
    //           }
    //         }
    //         `)

  return (<Layout>
          <Head title="Home"/>
            <div class="icon-wrapper">
              <h2>
                <strong> Ex-Chemist 🧪 and Coder &nbsp;</strong>
              </h2>
              <a href="https://github.com/CDRundell" target="_blank"><FaGithub /></a>
            </div>
              <div className="link-bar">
                {/* <Link to="/blog">My blog</Link> */}
              </div>
              <div className="tile-wrapper">
                <div className="homepage-tile">
                  <div className="info-wrapper">
                    <h3>Assetbase</h3>
                    <i class="fa-brands fa-github"></i>
                    <ul>Asset-base.money website was made during my time at Le Wagon, highlights of this project are:
                      <li>Calling multiple APIs for financial information.</li>
                      <li>Use of Charkick/Chart.js.</li>
                      <li>Webscraping of OpenSea for live NFT prices.</li>
                    </ul>
                  </div>
                  <iframe width="380" height="315" src="https://www.youtube.com/embed/E8erCAf7OcQ?start=2315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"></iframe>
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

                <div className="homepage-tile">
                  <div className="info-wrapper">
                  <h3>This website!</h3>
                    <p>
                      After my bootcamp I decided to learn React and generally strengthen my Javascript skills.
                      Making a website using Gatsby looked like a good way to do this, while also being a site for a blog (in the future).
                    </p>
                    <br></br>
                    <p>
                      All blog posts will be powered by the Notion API/GraphQL
                    </p>
                  </div>
                  <div>
                    <h4>Tech stack</h4>
                    <div className="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt='Gatsby framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS language'/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphQL database' />
                    </div>
                  </div>
                </div>
                {/* <div class="homepage-tile">
                  <img src={data.cloudinaryMedia.secure_url} class="project-screenshot" alt="project screenshot" />
                </div> */}
              </div>
        </Layout>)
}

export default IndexPage
