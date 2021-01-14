import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cardGamePic from '../images/CardGame.JPG'

class Header extends Component {
    state = {  }

    render() { 
        return (
            <header className="showcase">
            <div className="container showcase-inner">
            <img src={cardGamePic} alt="Pernilla Göth" className="codePics"/>
              <h1>- Pernilla Göth - </h1>
              <p>Combining a passion for creativity with a degree in fullstack web development</p> 
              <Link to="/code" className="btn">Personal projects</Link>
            </div>
          </header>
        )
    }
}
 
export default Header;