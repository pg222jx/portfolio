import React, { Component } from 'react'
import portfolioPic from '../../images/Website.JPG'

class Portfolio extends Component {
    state = {  }

    render() { 
        return (
            <div className="codePortfolio">
              <h2>Portfolio</h2>
              <img src={portfolioPic} alt="Pernilla Göth" className="codePics"/>
              <p>This portfolio, that you are currently in, was mainly created to showcase my personal projects.<br/>
              When I started to code this website I wanted to practice working with both React.js and Express.js. <br/>
              Because of that I decided to create it using the MERN stack.<br/>
              This project also made me more aware of the complexity in CSS and that piqued my interest in it. <br/>
              The portfolio will be an ongoing project and will therefore be changed and added to.
              </p><br/>
              <p>JavaScript, React, Node, Express, MongoDB</p>
              <a href="https://github.com/pg222jx/pernillagoeth/tree/master/portfolio" className="btn">Source code</a>
            </div>
        )
    }
}
 
export default Portfolio;