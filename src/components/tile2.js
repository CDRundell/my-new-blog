import React from 'react'

const Tile2 = (props) => {
  // console.log(props)
  const { data } = props
  return (
    <div className="homepage-tile">
      <div className="info-wrapper">
        <h3>Saunaswap</h3>
        <i class="fa-brands fa-github"></i>
        <ul>This was my first website during the bootcamp, a simple airbnb clone, the key parts of the website are:
          <li>CRUD actions for both Saunas, users and reviews.</li>
          <li>Authentication and authorization using Devise and Pundit </li>
          <li>Use of Mapbox geocoding API </li>
        </ul>
      </div>
      <a href="https://saunaswap.herokuapp.com/" alt="sauna swap link" target="_blank" rel="noreferrer">
        <img src={data} class="screenshot"></img>
      </a>
      <div>
        <h4>Languages/Frameworks used:</h4>
        <div class="flexbox">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt='Ruby language' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt='Rails framework' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript language' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS language' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='PostgreSQL database' />
        </div>
      </div>
    </div>
  )
}


export default Tile2
