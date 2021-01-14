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
              <img src={profilePic} alt="Pernilla Göth" className="profilePic"/>
              <p>My name is Pernilla Göth and I am currently studying my second year
              <br/>to become a fullstack web developer at Linneaus Univeristy.
              <br/>I love to be creative. Painting, photography and music are three of my favorite things to do in my free time.

              <br/>
              I am a brainstormer and love discussing ideas and finding solutions.<br/>
              Yes, I will be fresh out of university in june and my experience in working with programming is limited. But I am eager to learn and have been told to be  a fast learner.
              <br/><br/>If you want to contact me or learn more about me don't hesitate to check out my <a href="https://www.linkedin.com/in/pernilla-g%C3%B6th-69027319b/" target="_blanc">LinkedIn page!</a>
              </p>
              <a href="https://docs.google.com/document/d/16SugJKIyc6cJPo5Wt9CwZe1q5FzU_559Xre8Td7LnCQ/edit#heading=h.61e3cm1p1fln" target="_blanc" className="btn">Resume</a>
              </div>
            </div>
          </header>
        )
    }
}
 
export default Blog;