import React, { Component } from 'react'

class Contact extends Component {
    state = {  }

    render() { 
        return (
            // <header className="showcase">
            <div className="container showcase-inner">
              <h1>Contact</h1>
              <div className="contact">
              <p>EMAIL: <a href="mailto:pernilla.goeth@gmail.com"> pernilla.goeth@gmail.com</a></p>
              <p>LINKEDIN: <a href="https://www.linkedin.com/in/pernilla-g%C3%B6th/">Profile</a></p>
              <p>PHONE: 0762985381</p>
              </div>
            </div>
          // </header>
        )
    }
}
 
export default Contact;