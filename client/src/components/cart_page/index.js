import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CartPage extends React.Component {
  state = {
    products: [],
    loading: true
  }

  componentDidMount() {

    axios.get(`/cart-products/${this.props.match.params.id}`).then(({ res }) => {
        this.setState({ products: res, loading: false })
    })
  }


  render() {
    const { products, loading } = this.state
    return (
      <>
        {!loading ? (
          products.length > 0 ? (
            products.map(e => (
              <Link to={'/product/' + e.id + this.state.path1} key = {e.id} >
                <div className="cards">
                  <div className="product-card-back">
                    <div className="product-card">
                      <img
                        className="product-img"
                        src={e.img}
                        alt="product-img"
                      />
                      <p className="product-name">{e.name}</p>
                      <p className="product-price">₪ {e.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1>There is no products</h1>
          )
        ) : (
          <img
            className="loading"
            src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368"
            alt="loading"
          />
        )}
      </>
    )
  }
}

export default CartPage
