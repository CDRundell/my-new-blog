import React from "react"

import Header from "./header"
import Footer from "./footer"


const Layout = (props) => {
  return (<div class="main-wrapper">
           <Header />
           {props.children}
           <Footer />
         </div>)
}

export default Layout
