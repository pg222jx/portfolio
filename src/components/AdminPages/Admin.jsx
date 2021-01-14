import React, { Component } from 'react'

class Admin extends Component {
    state = {  }

    render() { 
        return (
            <header className="showcase">
            <div className="container showcase-inner">
              <h1>Admin</h1>
              <p>You have to log in to edit and create blogposts</p> 
            </div>
          </header>
        )
    }
}
 
export default Admin;