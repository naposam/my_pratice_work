import React, {Component} from 'react'
import fire from './base'
import person  from "./img/aa.jpg"
import per  from "./img/sd.jpg"
import mount from './img/sama.jpg'
import pe from './img/pe.jpg'
import fa from './img/fa.jpg'
import sam from './img/sam.jpg'
import sams from './img/sams.jpg'
import sama from './img/samp.jpg'
import np from './img/32.jpg'
import sm from './img/33.jpg'
import pn from './img/39.jpg'
import {NavLink} from 'react-router-dom'
class Home_page extends Component{
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
     <div style={{background:"rgba(0,0,0,0.5)"}}>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Napoleon</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item active"><NavLink to="/" id="navlink">
        <a class="nav-link" >Home <span class="sr-only">(current)</span></a></NavLink>
      </li>
      <li class="nav-item"><NavLink to="/photo" id="navlink">
        <a class="nav-link" >Photos</a></NavLink>
      </li>
      <li class="nav-item"><NavLink to="/contact" id="navlink">
        <a class="nav-link" >Contact</a></NavLink>
      </li>
    </ul>
    <span class="navbar-text">
    <button onClick={this.logout} class="btn btn-danger">Logout</button>
    </span>
  </div>
</nav>

 <div class="container-fluid">

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={mount} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={person} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={per} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={fa} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={pe} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={sam} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={sams} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={sama} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={sm} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={np} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={pn} class="d-block w-100" alt="..."/>
     
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
    
    )
}
}

export default Home_page