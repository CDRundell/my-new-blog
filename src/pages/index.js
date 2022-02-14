import React from "react"
import { Link  } from "gatsby"

import Footer from '../components/footer'

export default function Home() {
  return <body>
            <div class="title">
              <h1 class="title-header">Homepage</h1>
            </div>

            <div class="tiles">
              <div class="first-post">
                <h2 class="tile-font"><Link to="/coding"> Learning to code 💻</Link></h2>
                <h3 class="tile-font-medium">Documenting my experience from chemist to coder</h3>
              </div>
                <Footer></Footer>
            </div>
          </body>
}
