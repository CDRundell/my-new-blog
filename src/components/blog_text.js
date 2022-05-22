import React from 'react'

const BlogText = (props) => {
  const {text, excerpt} = props
  return (
      <div className="blog-text">
        <p><strong>{text.title}</strong></p>
        <p>{text.Created.split("T")[0].split("-").reverse().join("-")}</p>
        <p>{excerpt}</p>
      </div>
  )
}

export default BlogText
