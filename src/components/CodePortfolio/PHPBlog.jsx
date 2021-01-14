import React, { Component } from 'react'
import phpPic from '../../images/php.JPG'

class PHPBlog extends Component {
    state = {  }

    render() { 
        return (
            <div className="codePortfolio">
              <h2>PHP Blog</h2>
              <img src={phpPic} alt="Pernilla Göth" className="codePics"/>
              <p>This simple blog was an assignment for school and my first project using PHP. <br/>
              The course was about code quality and one of my favourite courses during my studies. <br/>
              I had heard a lot of bad things about PHP and this project made me understand why. <br/>
              However even if the structure of the language isn't always to my taste, I actually really liked how it made my brain work in ways it hadn't before. <br/>
              In this project I coded towards automated tests and finally ended upp with just below 100% coverage.</p><br/>
              <p>PHP</p>
              <a href="https://1dv610assignment2.000webhostapp.com/" className="btn">Live</a>
              <a href="https://github.com/pg222jx/SimpleBlogWithPHP" className="btn">Source code</a>
              <p> </p>
            </div>
        )
    }
}
 
export default PHPBlog;