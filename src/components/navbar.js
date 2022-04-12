import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to="/">Chris Rundell</Link>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  );
}

export default Navbar
