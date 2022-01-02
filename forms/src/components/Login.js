import React,{Component} from 'react'
import {Button,Form,FormGroup,Label} from 'reactstrap'
import {FacebookLoginButton} from 'react-social-login-buttons'
import {Redirect} from 'react-router-dom'
import {Toaster, Intent} from '@blueprintjs/core'
import fire from './base'

class Login extends Component{
  constructor(props){
    super(props)
    this.authWithEmailPassword=this.authWithEmailPassword.bind(this)
    this.state={
      redirect:false
    }
  }
 
  
  authWithEmailPassword(event){
    event.preventDefault()
    const email=this.emailInput.value
    const password=this.passwordInput.value
    
    fire.auth().fetchProvidersForEmail(email).then((providers) =>{
if(providers.length===0){
  //create new user
 return fire.auth().createUserWithEmailAndPassword(email,password)

}else{
//sign in user
return fire.auth().signInWithEmailAndPassword(email,password); 

}

    })
    .then((user) =>{
      if(user && user.email){
        this.Login.reset();
        console.log("You are Welcome: " + user.email)
        this.setState({redirect: true})
        
      }
    })
    .catch((error) =>{
      window.alert("Error: " + error.message)
      
    })

    console.log("auth with email")
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value
      
    }])
   
  }
    render(){
      if(this.redirect===true){
        return <Redirect to="/" />
      }
        return (
         
            <div className="container">
            
            <div className="row">
           <Form className="login-form" onSubmit={(event) => {this.authWithEmailPassword(event)}} ref={ (Form) => { this.Login=Form}}>
              <h1 className="text-center"><span className="font-weight-bold">Napoleon</span> Sam</h1>
              <h2 className="text-center">Welcome</h2>
              <FormGroup>
                <Label>Email</Label>
                <input type="email" placeholder="email"  className="pt-input form-control" name="email" ref={(input) =>{this.emailInput=input}}/>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <input type="password" placeholder="password" className="pt-input form-control" name="password" ref={(input) =>{this.passwordInput=input}} />
              </FormGroup>
              <Button className="btn-lg btn-dark btn-block" id="button">Login In</Button>
              <div className="text-center pt-3">Or Sign in with Social media</div>
              <FacebookLoginButton  className="mt-3 mb-3"/>
              
            </Form>
            </div>
            </div>
          );
    }
}
export default Login