import React from 'react'

const Tile1 = () => {
  return (
    <div className="homepage-tile">
      <div className="info-wrapper">
        <h3>Assetbase</h3>
        <i class="fa-brands fa-github"></i>
        <ul>Asset-base.money website was made during my time at Le Wagon, highlights of this project are:
          <li>Calling multiple APIs for financial information.</li>
          <li>Use of Charkick/Chart.js.</li>
          <li>Webscraping of OpenSea for live NFT prices.</li>
        </ul>
      </div>
      <iframe width="380" height="315" src="https://www.youtube.com/embed/E8erCAf7OcQ?start=2315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"></iframe>
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

export default Tile1
