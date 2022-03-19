import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
    return (<Layout>
            <h1> Welcome to my blog</h1>
            <Link to="/">Link back to my portfolio</Link>
          </Layout>)
}

export default BlogPage
