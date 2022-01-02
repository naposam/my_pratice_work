import React, { Component } from 'react';
import {BrowserRouter,Router,Switch} from 'react-router-dom'
// import Login from './components/Login'
import './App.css';
// import Header from './components/Header'
import fire from "./components/base"
import Home from './components/Home_page'
import Login from './components/LogIn_form'
import Photo from './components/Photo'
import Contact from './components/Contact'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{},
    
    }
    
  
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user: null});
    }
    })
  }
  
 
  render() {
    return(
      <BrowserRouter>
      <div style={{background:'darkorange'}}>
      <Switch>
      {this.state.user ? (<Home/>) : (<Login/>)} 
    <Router path="/" component={Home} exact/>
    <Router path="/photo" component={Photo}/>
    <Router path="/contact" component={Contact}/>
     </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
