import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from './base'
import {Toaster, Intent} from '@blueprintjs/core'
import '../App.css';
const defaultState={
    email:'',
    password:'',
    emailError:"",
    PasswordError: ""
}
class LogIn_form extends Component{
    state= defaultState
constructor(props){
    super(props);
    this.login=this.login.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.signup=this.signup.bind(this)
    this.state={
        email:'',
        password:'',
        emailError:"",
        PasswordError: ""
       
    }

}
 validate =()=>{
    let emailError=""
    let PasswordError= ""
    if(!this.state.email.includes('@')){
        emailError="invalid email"
    }
    if(this.state.password<8){
        PasswordError="Your password must atleast 8 characters long"
    }
    if(emailError ||PasswordError ){
        this.setState({emailError,PasswordError})
        return false
    }
    return true
 }
login(e){
    e.preventDefault()
    const isValid=this.validate()
    if(isValid){
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error)=>{
      
      
    })
   this.setState(defaultState) 
}
}
signup(e){
    e.preventDefault()
    const isValid=this.validate()
    if(isValid){
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error)=>{
        console.log(error)
    })
    }
}
handleChange(e){
this.setState({[e.target.name]: e.target.value});
    
}
render(){
    return(
        <div class="container" style={{background:'rgba(0,0,0,0.4)'}}>
        <div class="row"style={{background:'rgba(0,0,0,0.2)'}} >
       
        <form style={{ maxHeight: "330px",padding:"15px", margin:"auto"}}>
            <div class="form-group">
            <label for="exampleInputEmail" style={{color:"white"}}>Email Address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail" placeholder="enter your email"/>
            <div style={{fontSize:12 ,color:'red'}}>{this.state.emailError}</div>
            <small id="emailHelp" class="form-text text-muted">If You do not have an account enter email and password and click sigup</small>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword" style={{color:"white"}}>Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" id="exampleInputPassword" name="password" class="form-control" placeholder="enter your password"/>
            <div style={{fontSize:12 ,color:'red'}}>{this.state.PasswordError}</div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={this.login}>Login</button>
            <button type="submit" class="btn btn-success" style={{marginLeft: '25px'}} onClick={this.signup}>Sign Up</button>
        </form>
        </div>
        </div>
       
    )
}
}

export default LogIn_form