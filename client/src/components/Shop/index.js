import NavBar from '../Navbar/index.js'
import ProductCard from '../Product_card'
import React, { Component } from 'react'
import './style.css'
const Shop = (props) => {
  return (
    <div className="shop-page">
      <NavBar />

      <ProductCard {...props} />

    </div>
  )
}
export default Shop
