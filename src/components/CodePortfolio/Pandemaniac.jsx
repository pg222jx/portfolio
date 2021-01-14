import React, { Component } from 'react'
import pandemaniacPic from '../../images/pandemaniac.JPG'

class Pandemaniac extends Component {
    state = {  }

    render() { 
        return (
            <div className="codePortfolio">
              <h2>Pandemaniac</h2>
               <img src={pandemaniacPic} alt="Pernilla Göth" className="codePics"/>
              <p>Pandemaniac is a one player game I created to give some joy and competion to my brothers during the covid-19 pandemic. <br/>
              This game was inspired by the board game Pandemania and the app plague.inc. <br/>
              It was my first ever experience with React.js and it left me wanting to learn more. <br/>
              This project also gave me a chance to play around in Adobe Illustrator which always is very fun! </p><br/>
              <p>JavaScript, React, Node, Firebase</p>
              <a href="https://pandemaniac-afc6f.web.app/" className="btn">Live</a>
              <a href="https://github.com/pg222jx/Pandemaniac" className="btn">Source code</a>
             
            </div>
        )
    }
}
 
export default Pandemaniac;