import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <nav className="pt-navbar">
            <div className="pt-navbar-group pt-lign-left">
            <div className="pt-navbar-heading">Chord Creator</div>
            {this.props.authenticated
            ?<input className="pt-input" placeholder="search Songs...." type="text"/>
            : null

            }
            
            </div>
            {this.props.authenticated
            ?
            (
            
            <div className="pt-narbar-group pt-align-right">
            
             <h2>You are welcome</h2>
            <span className="pt-narbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-user"></button>
            <button className="pt-button pt-minimal pt-icon-cog"></button>
            </div>
            )
            :
            (
            <div className="pt-navbar-group pt-align-right">
            <NavLink className="pt-button pt-intent-primary" to="/login">Register/Login</NavLink>
            </div>
            )
            }
            </nav>
        )
    }
}
export default Header