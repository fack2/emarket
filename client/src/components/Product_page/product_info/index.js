import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class ProductInfo extends Component {
  state = {
    product: { name: 'wait' }
  }

  request = (url, cb) => {
    axios
      .get(url)
      .then(response => {
        return cb(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.request(`/product/${this.props.id}`, res => {
      this.setState({ product: res.product[0] })
    })
  }
  render() {
    return (

      <div className="product-card-back card">
        <div className="product-card">
        <img className="product-img"
          src={this.state.product.img}
          alt={'image ' + this.state.product.name}
        ></img>
        <h2 className="product-name">{this.state.product.name}</h2>
        <p>{this.state.product.description}</p>
        <h2 className="product-price">{this.state.product.price} ₪ </h2>
      </div>
      </div>
      
    )
  }
}

export default ProductInfo
