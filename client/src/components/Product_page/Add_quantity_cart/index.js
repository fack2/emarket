import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class AddQuantityCart extends Component {
  state = {
    quantity: 1
  }
  request = (url, productInfo, cb) => {
    axios
      .post(url, productInfo)
      .then(response => {
        cb(response)
      })
      .catch(error => {})
  }
  addToCart = () => {
    const productInfo = {
      productID: this.props.id,
      quantity: this.state.quantity,
      price: this.props.price
    }
    this.request('/add-to-cart', productInfo, res => {
    })
  }

  render() {
    return (
      <div className="continer">
        <button className="add-to-cart" onClick={this.addToCart}>
          Add to cart
        </button>
        <div className="qua">
          <button
            className="bu"
            onClick={() => {
              this.setState({ quantity: this.state.quantity + 1 })
            }}
          ></button>
          <h2 className="q">{this.state.quantity}</h2>
          <button
            className="bu2"
            onClick={() => {
              this.setState({
                quantity:
                  this.setState.quantity > 0 ? this.state.quantity - 1 : 1
              })
            }}
          ></button>
        </div>
      </div>
    )
  }
}

export default AddQuantityCart
