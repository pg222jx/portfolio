import React, { Component } from 'react'
import CodeProjects from './CodeProjects'

class Code extends Component {

    render() {
      const scrollDown = () => {
        const child = document.querySelector('.showcase-outer')
        child.scrollIntoView({ behavior: 'smooth' })
      } 

        return (
            // <header className="showcase">
              <React.Fragment>
                <div className="container showcase-inner">
                  <h1>Coding projects</h1>
                  <p>I will highlight some of my personal coding projects below.<br/>
                  To see more projects I have been a part of please consider visiting my <a href="https://github.com/PernillaGoeth">Github page</a>.
                  <br/></p>
                  <br/>
                  <button className="arrowDown" onClick={scrollDown}>︾</button>
                </div>
                <CodeProjects/>
            </React.Fragment>

          // </header>
        )
    }
}
 
export default Code;