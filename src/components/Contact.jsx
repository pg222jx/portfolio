import React, { Component } from 'react'

class Contact extends Component {
    state = {  }

    render() { 
        return (
            <header className="showcase">
            <div className="container showcase-inner">
              <h1>Contact</h1>
              <p>Email: <a href="mailto:pernilla.goeth@gmail.com">pernilla.goeth@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/pernilla-g%C3%B6th/">Profile</a></p>
            </div>
          </header>
        )
    }
}
 
export default Contact;