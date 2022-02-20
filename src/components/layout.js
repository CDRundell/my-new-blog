import React from "react"

// import Header from "./header"
import Footer from "./footer"


const Layout = (props) => {
  return <div class="main-wrapper">
           {props.children}
           <Footer />
         </div>
}

export default Layout
