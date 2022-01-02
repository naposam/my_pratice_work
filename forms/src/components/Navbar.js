import React from 'react'
import {NavLink} from 'react-router-dom'
import fire from './base'
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this)
    //   this.display=this.display.bind(this)
    }
    // display(){
    // fire.auth().onAuthStateChanged((user) =>{
    //     if (user !=null) {
    //       // User is signed in.
    //       let email = user.email;
    //       // ...
    //     } else {
    //       // User is signed out.
    //       // ...
    //     }
    //   });
    // }
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Napoleon</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item active"><NavLink to="/" id="navlink">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></NavLink>
      </li>
      <li class="nav-item"><NavLink to="/photo" id="navlink">
        <a class="nav-link" href="#">Photos</a></NavLink>
      </li>
      <li class="nav-item"><NavLink to="/contact" id="navlink">
        <a class="nav-link" href="#">Contact</a></NavLink>
      </li>
    </ul>
    <span class="navbar-text">
    <button onClick={this.logout} class="btn btn-danger">Logout</button>
    </span>
  </div>
</nav>
            </div>
        )
    }
}
export default Navbar