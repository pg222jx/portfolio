import React, { Component } from 'react'
import PaintingProjects from './PaintingProjects'

class Creativity extends Component {

    render() {
      const scrollDown = () => {
        const child = document.querySelector('.showcase-outer')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

        return (
              <React.Fragment>
                <div className="container showcase-inner">
                  <h1>Painting projects</h1>
                  <p>Lorem Ipsum</p>
                  <br/>
                  <button className="arrowDown" onClick={scrollDown}>︾</button>
                </div>
                <PaintingProjects/>
            </React.Fragment>
        )
    }
}
 
export default Creativity;