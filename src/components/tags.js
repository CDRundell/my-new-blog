import React from "react"

const Tags = (props) => {
  const {tags} = props
  return (
    <div className="tags">
      {tags.map((tag) => (
        tag.name !== 'Notion' && <p className={tag.name.replace(/ /g, '-')} >#{tag.name}</p>
        ||
        tag.name === 'Notion' && <img src={`https://logo.clearbit.com/${tag.name}.com`} className={`${tag.name}`} />
      ))
      }
    </div>
  )
}

export default Tags
