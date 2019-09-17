import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import swal from 'sweetalert'

class AddQuantityCart extends Component {
  state = {
    quantity: 1
  }

  addToCart = () => {
    const productInfo = {
      productID: this.props.id,
      quantity: this.state.quantity,
      price: this.props.price
    }
    axios
      .post('/add-to-cart', productInfo)
      .then(response => {
        swal({
          title: 'added to cart',
          icon: 'success',
          button: 'Continue shoping'
        }).then(res => {
          window.location.href = `${this.props.prePath}`
        })
      })
      .catch(error => {
        if (error.message.includes('404')) {
          swal({
            title: 'you must register before add to cart',
            icon: 'error',
            button: 'go to register page'
          }).then(res => {
            window.location.href = `/register`
          })
        } else
          swal({
            title: 'err add to cart',
            icon: 'error',
            button: 'return to shoping'
          }).then(res => {
            window.location.href = `${this.props.prePath}`
          })
        console.log(error, 'components/Product_page/Add_quantity_cart')
      })
  }

  render() {
    return (
      <div className="continer">
        <button className="add-to-cart" onClick={this.addToCart}>
          Add to cart
        </button>
        <div className="quantity-controler">
          <button
            className="increase"
            onClick={() => {
              this.setState({ quantity: this.state.quantity + 1 })
            }}
          ></button>
          <h2 className="quantity">{this.state.quantity}</h2>
          <button
            className="decrease"
            onClick={() => {
              this.setState({
                quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1
              })
            }}
          ></button>
        </div>
      </div>
    )
  }
}

export default AddQuantityCart
