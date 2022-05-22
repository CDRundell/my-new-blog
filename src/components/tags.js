import React from "react"

const Tags = (props) => {
  const {tags} = props
  return (
    <div className="tags">
      {tags.map((tag) => (
        <p className={tag.name.replace(/ /g, '-')} >#{tag.name}</p>
      ))
      }
    </div>
  )
}

export default Tags
