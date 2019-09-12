import React, { Component } from 'react'
import './style.css'
import NavBar from '../Navbar'
import axios from 'axios';
class Login extends Component {
state = {

email:'',
password:''


}

emailValue = (event)=>{
  const {value} = event.target
  this.setState({email:value})
}
passwordValue = (event)=>{
  const {value} = event.target

  this.setState({password:value})
}
doSomeThing = (e)=>{
  console.log("its ok")
const {email,password} =this.state


  e.preventDefault();

  axios.post(`/login`,{"email":email,"password":password})
  .then( ({data}) => {
    console.log("data",data)
  })

}

  render () {
    return (
      
      <div>
        < NavBar />
        <h1 className="login-titel">Login </h1>
        <form className="login" onSubmit={this.doSomeThing} >

        <input className="input" type="email" autocomplete="on" placeholder="Email" name="email" value={this.state.email}  onChange={this.emailValue}   required/>
        <input className="input" type="password" autocomplete="on" placeholder="Password" name="password" value={this.state.password}  onChange={this.passwordValue}  required/>
          <button type="submit" className="signin-button">Login</button>
          <button type="button" className="signup-button">Signup</button>

        </form>
      </div>
    )
  }
}

export default Login
