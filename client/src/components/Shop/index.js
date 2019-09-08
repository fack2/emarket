import NavBar from '../Navbar/index.js'
import ProductCard from '../Product_card'
import SearchBar from '../Search_bar'
import React, { Component } from 'react'
import './style.css'


class Shop extends Component {
  state = {

resultProducts:[]

  }
  searchSetArray = (resultProducts) =>{

this.setState({resultProducts})

  }
  render() {
    return (
      <div className="shop-page">
      <NavBar />
       {/* <SearchBar  {...this.props} serchArray={this.searchSetArray} />
{!this.state.resultProducts.length ? (
  <ProductCard resultAfterSerch = {this.state.resultProducts} />

}):  (<ProductCard {...this.props} />)
    } */}
    <SearchBar  {...this.props} serchArray={this.searchSetArray} />
<ProductCard {...this.props} />
    </div>
    ) 
  }
}

export default Shop



