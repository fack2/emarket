import NavBar from '../Navbar/index.js'
import React, { Component } from 'react'
import './style.css'
import axios from 'axios'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  }

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  registerButton = () => {
    axios
      .post('register', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('axios post register errrrrrrrrr')
      })
  }
  render() {
    const { username, phone, address, email, password } = this.state

    return (
      <div className="register">
        <NavBar />
        <form className="flex-container">
          <label for="username"></label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={this.changeInput}
            value={username}
            required
          ></input>
          <label for="email"></label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.changeInput}
            value={email}
            required
          ></input>
          <label for="password"></label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.changeInput}
            value={password}
          ></input>
          <label for="phone"></label>
          <input
            type="text"
            min="7"
            max="13"
            placeholder="Phone"
            name="phone"
            onChange={this.changeInput}
            value={phone}
            required
          ></input>
          <label for="address"></label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={this.changeInput}
            value={address}
            required
          ></input>

          <button
            type="submit"
            className="register-button"
            onClick={this.registerButton}
          >
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default Register
