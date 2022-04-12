import React from "react"

import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"



const Layout = (props) => {
  return (<div class="main-wrapper">
          <div>
            <Navbar />
            <Header />
            {props.children}
          </div>
           <Footer />
         </div>)
}

export default Layout
