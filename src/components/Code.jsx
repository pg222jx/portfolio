import React, { Component } from 'react'
import Portfolio from './CodePortfolio/Portfolio'
import PHPBlog from './CodePortfolio/PHPBlog'
import Pandemaniac from './CodePortfolio/Pandemaniac'
import CardGameSimulation from './CodePortfolio/CardGameSimulation'

class Code extends Component {
  // componentDidMount() {
  //   const code = document.querySelector('.code')
  //   code.style.opacity = 1
  // }

    render() {
      const scrollDown = () => {
        const child = document.querySelector('.showcase-outer')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

      const scrollUp = () => {
        const child = document.querySelector('.showcase-inner')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

        return (
            <header className="showcase">
            <div className="container showcase-inner">
              <h1>Coding projects</h1>
              <p>I will highlight some of my personal coding projects below.<br/>
              To see more projects I have been a part of please consider visiting my <a href="https://github.com/PernillaGoeth">Github page</a>.
              <br/></p>
              <br/>
              <button className="arrowDown" onClick={scrollDown}>︾</button>
            </div>
            <div className="container showcase-outer">
              <Portfolio/>
              <Pandemaniac/>
              <PHPBlog/>
              <CardGameSimulation/>
              <button className="arrowUp" onClick={scrollUp}>︽</button>
            
            </div>
          </header>
        )
    }
}
 
export default Code;