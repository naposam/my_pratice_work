import React from 'react'
import './home.css'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
          firstname: null,
          lastname: null,
          email:   null,
          password: null, 
          formErrors:{
            firstname: "",
            lastname: "",
            email:   "",
            password: "" 
          }
        }
    }
    handleSubmit= e =>{
        e.preventDefault();
        
    }

    
    render(){
        return(
            <div className="wrapper">
       < div className=" form-wrapper">
       <h1>Create an Account</h1>
       <form onSubmit={this.handleSubmit}>
        <div className="firstname">
        <label htmlFor="firstname">First name</label>
        <input type="text" 
        placeholder="first name"
         name="firstname" 
         onchange={this.handleChange} className="form-control"/>
        </div>
        <div className="lastname">
        <label htmlFor="lastname">Last name</label>
        <input type="text" name="lastname" placeholder="last Name"
        onChange={this.handleChange}  className="form-control"/>
        </div>
        <div className="email">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email"
        onChange={this.handleChange}  className="form-control" />
        </div>
        <div className="password">
        <label htmlFor="password">password</label>
        <input type="password" name="password" placeholder="password"
        onChange={this.handleChange} className="form-control" />
        </div>
       <div className="createAccount">
       <button type="submit" className="form-control btn btn-primary">Create Account</button>
       <small>Already have an Account</small>
       </div>


       </form>
       </div>




            
            </div>
        )
    }
}
export default Home