import React, { Component } from 'react'

class Resume extends Component {
    state = {  }

    render() { 
        return (
            // <header className="resume">
            <div className="container showcase-inner">
                <div className="resume">
              <h1>Resume</h1>
              <h2>Languages</h2>
              <div className="row">
                <div className="column left">
                    <p>Swedish</p>
                    <p>English</p>
                </div>
                <div className="column right">
                    <p>Native language</p>
                    <p>Fluent in speech and writing</p>
                </div>
              </div> 

              <h2>Skills</h2>
              <div className="row">
              <div className="column left">
                    <p>JavaScript</p>
                    <p>Html5</p>
                    <p>CSS</p>
                    <p>C#</p>
                </div>
                <div className="column middle">
                    <p>.NET</p>
                    <p>PHP</p>
                    <p>Node.js</p>
                    <p>React</p>
                </div>
                <div className="column right">
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>Adobe illustrator and photoshop</p>
                </div>
              </div>

              <h2>Education</h2>
              <div className="row">
                <div className="column left"></div>
                <div className="column right"></div>
              </div>

              <h2>Employment</h2>
              <div className="row">
                <div className="column left"></div>
                <div className="column right"></div>
              </div>
              </div>
            </div>
          // </header>
        )
    }
}
 
export default Resume;