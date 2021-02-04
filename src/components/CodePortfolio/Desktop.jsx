import React, { Component } from 'react'
import desktop from '../../images/desktop.JPG'

class Desktop extends Component {
    state = {  }

    render() { 
        return (
            <div className="codePortfolio">
              <h2>Web desktop</h2>
              <img src={desktop} alt="Desktop app" className="codePics"/>
              <p>This is a desktop application for the web with a memorygame,<br/>
              simple chat application and a fireplace that you will have to take care of so it doesn't burn out. </p><br/>
              <p>JavaScript, HTML, CSS</p>
              <a href="https://github.com/pg222jx/Desktop-App" className="btn">Source code</a>
            </div>
        )
    }
}
 
export default Desktop;