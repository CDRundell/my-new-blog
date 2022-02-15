import React from "react"
import { Link  } from "gatsby"

import Layout from '../components/layout'


export default function Home() {
  return <Layout>
            <h1 class="title-header">Homepage</h1>
            <h2 class="tile-font"><Link to="/coding"> Learning to code 💻</Link></h2>
            <h3 class="tile-font-medium">Documenting my experience from chemist to coder</h3>
        </Layout>
}
