import NavBar from '../Navbar/index.js'
import ProductCard from '../Product_card'
import React, { Component } from 'react'
import './style.css'
const Shop = () => {
  return (
    <div className="shop-page">
      <NavBar />
      <ProductCard />
    </div>
  )
}
export default Shop
