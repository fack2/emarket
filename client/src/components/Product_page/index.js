/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import NavBar from '../Navbar'
import ProductInfo from '../Product_page/product_info'
import AddQuantityCart from '../Product_page/Add_quantity_cart'

class ProductPage extends Component {
  render () {
    return (
      <>
        <NavBar />
        <ProductInfo id={this.props.match.params.id} />
        <AddQuantityCart id={this.props.match.params.id} />
      </>
    )
  }
}

export default ProductPage
