import React, { Component } from 'react'
import Portfolio from './CodePortfolio/Portfolio'
import PHPBlog from './CodePortfolio/PHPBlog'
import Pandemaniac from './CodePortfolio/Pandemaniac'
import CardGameSimulation from './CodePortfolio/CardGameSimulation'
import Desktop from './CodePortfolio/Desktop'

class CodeProjects extends Component {

    render() {
      const scrollUp = () => {
        const child = document.querySelector('.showcase-inner')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

        return (
            <div className="container showcase-outer">
              <Portfolio/>
              <Pandemaniac/>
              <Desktop/>
              <PHPBlog/>
              <CardGameSimulation/>
              <button className="arrowUp" onClick={scrollUp}>︽</button>
            </div>
        )
    }
}
 
export default CodeProjects;