import NavBar from '../Navbar/index.js'
import React, { Component } from 'react'
import './style.css'

class Register extends Component {
  state = {
    resultProducts: []
  }
  searchSetArray = resultProducts => {
    this.setState({ resultProducts })
  }
  render() {
    return (
      <div className="register">
        <NavBar />
        <SearchBar {...this.props} serchArray={this.searchSetArray} />
        <ProductCard {...this.props} />
      </div>
    )
  }
}

export default Register
