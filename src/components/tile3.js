import React from 'react'

const Tile3 = () => {
  return (
    <div className="homepage-tile">
      <div className="info-wrapper">
        <h3>This website!</h3>
        <p>
          After my bootcamp I decided to learn React and generally strengthen my Javascript skills.
          Making a website using Gatsby looked like a good way to do this, while also being a site for a blog (in the future).
        </p>
        <br></br>
        <p>
          All blog posts are powered by the Notion API and use GraphQL.
        </p>
      </div>
      <div>
        <h4>Languages/Frameworks used:</h4>
        <div className="flexbox">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React framework' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt='Gatsby framework' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS language' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphQL database' />
        </div>
      </div>
    </div>
  )
}

export default Tile3
