import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

class CartPage extends Component {
  state = {
    products: [],
    loading: true,
    total: 0
  }
  orderNow = () => {
    window.location.href = '/shipping_info'
  }
  addItem = () => {
    window.location.href = '/shop'
  }
  deleteItem = event => {
    const { name } = event.target
    console.log('name', name)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        axios
          .get(`/delete/${name}`)
          .then(res => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(res => {
              window.location.href = `/cart`
            })
          })
          .catch(error => {
            swal({
              title: 'can not delete item from cart',
              icon: 'error',
              button: 'Continue'
            }).then(res => {
              window.location.href = `/cart`
            })
            console.log(error, 'components/cartPage delete button')
          })
      }
    })
  }
  componentDidMount() {
    axios.get(`/cart-products`).then(({ data }) => {
      console.log(data, '000000000000000000000')
      this.setState({ products: data, loading: false })
      const total = data.reduce((a, b) => a + b.total, 0)
      this.setState({ total: total })
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
              <div className="cards item-cart" key={e.productid}>
                <Link className="link" to={'/product/' + e.productid + '/cart'}>
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
                </Link>
                <button
                  className="deleteItem"
                  onClick={this.deleteItem}
                  name={e.productid}
                >
                  del
                </button>
              </div>
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
          <button className="order-now" onClick={this.orderNow}>
            Order Now
          </button>
          <br />
          <button className="add-item" onClick={this.addItem}>
            Add Item
          </button>
        </div>
      </>
    )
  }
}

export default CartPage
