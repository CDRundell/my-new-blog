import React from 'react'
import { Link, withAssetPrefix } from "gatsby"

const Navbar = () => {
  const activeStyle = {
                  textDecoration: "underline",
                  color: "hsla(0deg, 0 %, 100 %, 0.87)",
                  padding: "8px"
                }
  return (
    <div className="navbar-wrapper">
      <Link to="/">Chris Rundell</Link>
      <ul className="navbar">
        <li><Link to="/" activeStyle={activeStyle}>Home</Link></li>
        <li><Link to="/blog" activeStyle={activeStyle}>Blog</Link></li>
      </ul>
    </div>
  );
}

export default Navbar
