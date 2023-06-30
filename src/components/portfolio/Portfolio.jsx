import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bank.png'
import IMG2 from '../../assets/burger.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">

      <article className='portfolio_item'>
        <div className="portfolio_item-image"> 
        <img src={IMG1} alt="" />
         </div>
        <h3>Basic Banking System</h3>
          < a href="https://github.com"className='btn'target='_blank' >Github</a>
          <a href="https://github.com" className='btn btn-primary'target='_blank' >Live DEMO</a>
      </article>

      
      <article className='portfolio_item'>
        <div className="portfolio_item-image"> 
        <img src={IMG2} alt="" />
         </div>
        <h3>Customise own Burgur</h3>
          < a href="https://github.com"className='btn'target='_blank' >Github</a>
          <a href="https://github.com" className='btn btn-primary'target='_blank' >Live DEMO</a>
      </article>
      
    </div>
    </section>
  )
}

export default Portfolio