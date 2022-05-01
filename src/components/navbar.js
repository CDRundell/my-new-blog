import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  const activeStyle = {
                  backgroundColor: "white",
                  borderRadius: "8px",
                  color: "#0E141B",
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
