import React from "react"
import { FaGithub } from 'react-icons/fa';
import { MdScience } from "react-icons/md";
import Layout from '../components/layout';
import '../styles/index.scss';
import Head from '../components/head';
import { graphql, useStaticQuery } from "gatsby"

import Tile1 from '../components/tiles/tile1'
import Tile2 from '../components/tiles/tile2'
import Tile3 from '../components/tiles/tile3'


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
                <Tile1 />
                <Tile2 data={data.allCloudinaryMedia.edges[0].node.url}/>
                <Tile3 />
              </div>
        </Layout>)
}

export default IndexPage
