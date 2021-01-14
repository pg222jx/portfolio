import React, { Component } from 'react'
import cardGamePic from '../../images/cardGame.JPG'

class CardGameSimulation extends Component {
    state = {  }

    render() { 
        return (
            <div className="codePortfolio">
              <h2>21 card game simulator</h2>
              <img src={cardGamePic} alt="Pernilla Göth" className="codePics"/>
              <p>As the title suggest this is a simulatior for the card game 21.<br/>
              It was created to play with object orientation using C#. </p><br/>
              <p>C#, .Net</p>
              <a href="https://github.com/pg222jx/21CardGame" className="btn">Source code</a>
            </div>
        )
    }
}
 
export default CardGameSimulation;