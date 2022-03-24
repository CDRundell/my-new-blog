import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import '../styles/index.scss'

  const IndexPage = () => {

  return (<Layout>
              <h2>
                <strong> Chemist 🧪 | Coder 💻 </strong>
              </h2>
              <div class="tile-wrapper">
                <div>
                  <p>Project 1</p>
                  {/* <a href="">Assetbase</a> */}
                  <Link to="http://asset-base.money">Assetbase</Link>
                <p>This my final LeWagon project, using Ruby on Rails</p>
                <ul>Highlights of this project are:
                  <li>Live data from API calls to YahooFinance, Cryptocompare and AlphaVantage</li>
                  <li>Generating graphs using Charkick/Chart.js</li>
                </ul>
                </div>
                <div>
                  <p>Project 2</p>
                  <Link to="/blog">My blog</Link>
                  <p>This site and my blog are written with Gatsby and use the Notion API, this was a great way for me to learn React and GraphQL</p>
                </div>
              </div>
        </Layout>)
}

export default IndexPage
