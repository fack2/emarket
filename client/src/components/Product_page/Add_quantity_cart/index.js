import React, { Component } from 'react'
import axios from 'axios'

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
    console.log('111111111111111')
    const productInfo = {
      productID: this.props.id,
      quantity: this.state.quantity,
      userID: 1,
      price: 8
    }
    this.request('/add-to-cart', productInfo, res => {
      console.log(res, 'res0000000000res')
    })
    console.log('end111111111111111')
  }

  render() {
    return (
      <div>
        <button onClick={this.addToCart}>Add to cart</button>
        <button
          onClick={() => {
            this.setState({ quantity: this.state.quantity + 1 })
          }}
        >
          ++
        </button>
        <h2>{this.state.quantity}</h2>
        <button
          onClick={() => {
            this.setState({
              quantity: this.setState.quantity > 0 ? this.state.quantity - 1 : 1
            })
          }}
        >
          --
        </button>
      </div>
    )
  }
}

export default AddQuantityCart
