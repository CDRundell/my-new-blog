import React from "react"
import { FaGithub } from 'react-icons/fa';
import { MdScience } from "react-icons/md";
import Layout from '../components/layout';
import '../styles/index.scss';
import Head from '../components/head';
import { graphql, useStaticQuery } from "gatsby"


  const IndexPage = () => {

    const data = useStaticQuery(graphql`
      { allCloudinaryMedia {
          edges {
            node {
              url
            }
          }
        }
      }
    `)

  return (<Layout>
          <Head title="Home"/>
            <div class="icon-wrapper">
              <h3>Hi there, I'm Chris, an Ex-Organic Chemist &nbsp;</h3>
              <MdScience/>
              <h3>&nbsp; and Full-Stack Web Developer &nbsp;</h3>
              <a href="https://github.com/CDRundell" target="_blank" rel="noreferrer"><FaGithub /></a>
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
                    <h4>Languages/Frameworks used:</h4>
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
                    <h3>Saunaswap</h3>
                    <i class="fa-brands fa-github"></i>
                    <ul>This was my first website during the bootcamp, a simple airbnb clone, the key parts of the website are:
                      <li>CRUD actions for both Saunas, users and reviews.</li>
                      <li>Authentication and authorization using Devise and Pundit </li>
                      <li>Use of Mapbox geocoding API </li>
                    </ul>
                  </div>
                  <a href="https://saunaswap.herokuapp.com/" alt="sauna swap link" target="_blank" rel="noreferrer">
                    <img src={data.allCloudinaryMedia.edges[0].node.url} class="screenshot"></img>
                  </a>
                  <div>
                    <h4>Languages/Frameworks used:</h4>
                    <div class="flexbox">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt='Ruby language' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt='Rails framework' />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language' />
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
                      All blog posts are powered by the Notion API and use GraphQL.
                    </p>
                  </div>
                  <div>
                    <h4>Languages/Frameworks used:</h4>
                    <div className="flexbox">
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
