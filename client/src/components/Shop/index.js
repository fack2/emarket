import NavBar from '../Navbar/index.js'
import ProductCard from '../Product_card'
import SearchBar from '../Search_bar'
import React, { Component } from 'react'
import './style.css'

class Shop extends Component {
  state = {
    resultProducts: null,
    searchInput: ''
  }

  searchProduct = event => {
    const { value } = event.target
    return this.setState({ searchInput: value })
  }

  searchSetArray = resultProducts => {
    const finalResult = resultProducts ? resultProducts : []
    this.setState({ resultProducts: finalResult })
  }

  resetSearch = () => {
    this.setState({ resultProducts: null, searchInput: '' })
  }

  render() {
    const { resultProducts } = this.state
    return (
      <div className="shop-page">
        <NavBar resetSearch={this.resetSearch} />
        <SearchBar
          searchInput={this.state.searchInput}
          searchProduct={this.searchProduct}
          {...this.props}
          setFlag={this.setFlag}
          flag={this.state.flag}
          trigger={this.state.afterSearchTrigger}
          serchArray={this.searchSetArray}
        />
        <ProductCard resultAfterSerch={resultProducts} {...this.props} />
      </div>
    )
  }
}

export default Shop
