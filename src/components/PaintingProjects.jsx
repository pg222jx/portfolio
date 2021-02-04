import React, { Component } from 'react'
import paintingOne from '../images/paintings/paintingOne.jpg'

class PaintingProjects extends Component {

    render() {
      const scrollUp = () => {
        const child = document.querySelector('.showcase-inner')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

        return (
            <div className="container showcase-outer">
            <img src={paintingOne} alt="Pernilla Göth" className="paintingPic"/><br/>
              <button className="arrowUp" onClick={scrollUp}>︽</button>
            </div>
        )
    }
}
 
export default PaintingProjects;