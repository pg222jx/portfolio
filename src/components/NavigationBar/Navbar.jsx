import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {  }

    render() { 
        
    const uncheck = () => {
        const toggler = document.getElementsByClassName("toggler")
        for(let i=0; i < toggler.length; i++) {
            toggler[i].checked = false;
          }  
    }
        return (
            <React.Fragment>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul className="nav">
                                <li onClick={uncheck}><Link to="/">》Home</Link></li>
                                <li onClick={uncheck}><Link to="/about">》About</Link></li>
                                <li onClick={uncheck}><Link to="/code">》Coding projects</Link></li>
                                <li onClick={uncheck}><Link to="/contact">》Contact</Link></li>
                                {/* <li onClick={uncheck}><Link to="/creativity">Portfolio Creativity</Link></li> */}
                                {/* <li onClick={uncheck}><Link to="/diary">Diary</Link></li> */}
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>

        )
    }
}
 
export default Navbar;