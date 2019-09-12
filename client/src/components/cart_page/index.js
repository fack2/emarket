import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar'

class CartPage extends Component {
  state = {
    products: [],
    loading: true,
    total: 0
  }
  orderNow=()=>{
    window.location.href='/shipping_info'
  }
  addItem=()=>{
    window.location.href='/shop'
  }
  componentDidMount() {
    axios.get(`/cart-products`).then(({ data }) => {
      console.log(data, '000000000000000000000')
      this.setState({ products: data, loading: false })
      const total = data.reduce((a, b) => a + b.total, 0)
      this.setState({total:total})
    })
  }

  render() {
    const { products, loading, total } = this.state
    return (
      <>
        <NavBar />
        <h2 className="title-cart">Your items / Cart</h2>
        {!loading ? (
          products.length > 0 ? (
            products.map(e => (
              <Link to={'/product/' + e.productid + '/cart'} key={e.productid}>
                <div className="cards item-cart">
                  <div className="product-card-back item-cart">
                    <div className="product-card item-cart">
                      <img
                        className="product-img"
                        src={e.img}
                        alt="product-img"
                      />
                      <div>
                        <p className="product-name">{e.name}</p>
                        <p className="product-price">price: ₪ {e.price}</p>
                        <p className="product-price">quantity: {e.quantity}</p>
                        <p className="product-price">total: ₪ {e.total}</p>
                      </div>
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
        <h1>Total: ₪ {total}</h1>
        <div className="div">
          <button className="order-now" onClick={this.orderNow}>Order Now</button>
          <br />
          <button className="add-item" onClick={this.addItem}>Add Item</button>
        </div>
      </>
    )
  }
}

export default CartPage
