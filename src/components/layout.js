import React from "react"

import Footer from "./footer"
import Navbar from "./navbar"



const Layout = (props) => {
  return (<div class="main-wrapper">
          <div>
            <Navbar />
            {props.children}
          </div>
           <Footer />
         </div>)
}

export default Layout
