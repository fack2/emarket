import './style.css'
import React, { Component } from 'react'
import axios from 'axios';

class SearchBar extends Component {
  state = {

searchInput:'',
resultProductsArray:[]


  }
  searchProduct= (event) => { 
const {value} =event.target
console.log(`this value`, value);
return this.setState({searchInput:value})

  }
 getSearchedProduct = ()=>{
  if(this.state.searchInput)
  {
  axios.get(`/search/${this.state.searchInput}`)
  .then( (response) => {
    const resultArray =response.data.map(e=>e)
    this.setState({resultProductsArray:resultArray},()=>{
    })
    console.log(`props`, this.props);
  })}
 }



  render() {
    return (
      <div className="search-bar">
    <input  type="text" placeholder="Search.." name="search2" onChange={this.searchProduct}/>
      <button onClick={this.getSearchedProduct} type="button"><i class="fa fa-search"></i>
      </button>
    </div>
    )
  }
}

export default SearchBar





