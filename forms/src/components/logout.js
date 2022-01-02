import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import fire from './base'
class logout extends Component{
    constructor(){
        super()
        this.state={
            redirect:false
        }
    }
    componentWillMount(){
fire.auth().signOut().then((user)=>{
    this.setState({redirect: true})
})
    }
    render(){
        if(this.state.redirect===true){
               
            return <Redirect to="/" />
        
    }
    
        return(
            <div >
            
            </div>
        )
    }
}
export default logout