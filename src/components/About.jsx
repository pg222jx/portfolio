import React, { Component } from 'react'
import profilePic from '../images/profile.jpg'

class Blog extends Component {
    state = {  }

    render() { 
        return (
            <header className="showcase">
            <div className="container showcase-inner">
              <div className="about">
              <h1>About me</h1>

              <p>My name is Pernilla Göth and I am currently studying my second year<img src={profilePic} alt="Pernilla Göth" className="profilePic" ALIGN="right"/>
              <br/>to become a fullstack web developer at Linneaus Univeristy.
              <br/>When I am not sitting in front of a computer perfecting my programming skills
              I usually have a cup of tea in one hand and a book in the other.
              You can also find me with a paintbrush, camera or in front of a sewing machine. But my favorite thing
              is to sing, with friends or alone with my guitar.
              <br/>You could say I like to be creative.
              <br/>
              <br/>Because of my creative personality I love to work with frontend development. 
              I love when things look good and I love to be the one making them so.
              <br/>But what I really enjoy about web development is the puzzle - the constant problem solving
              <br/>and refactoring to make the code more readable and understandable. Clean code is great code!
              <br/>But I also really like backend! I believe that it is always important to keep code readable
              <br/>and understandable, but maybe even more so on the server side!
              <br/><br/>If you want to contact me or learn more about me don't hesitate to check out my <a href="https://www.linkedin.com/in/pernilla-g%C3%B6th-69027319b/" target="_blanc">LinkedIn page!</a>
              </p>
              </div>
            </div>
          </header>
        )
    }
}
 
export default Blog;