import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class ProductInfo extends Component {
  state = {
    product: {
      img:
        'https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368'
    },
    name: 'loading'
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
      if(this.props.price===0)
      this.props.setPrice(this.state.product.price)
    })
  }
  render() {
    return (
      <div className="product-card-back2">
        <div className="product-card2">
          <img
            className="product-img2"
            src={this.state.product.img}
            alt={this.state.product.name}
          ></img>
          <h2 className="product-name2">{this.state.product.name}</h2>
          <p>{this.state.product.description}</p>
          <h2 className="product-price2">{this.state.product.price} ₪ </h2>
        </div>
      </div>
    )
  }
}

export default ProductInfo