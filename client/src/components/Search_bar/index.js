import './style.css'
import React, { Component } from 'react'
import axios from 'axios'

class SearchBar extends Component {
  getSearchedProduct = () => {
    const { searchInput } = this.props
    const { id } = this.props.match.params
    if (searchInput) {
      axios.get(`/search/${searchInput + 'id' + id}`).then(({ data }) => {
        this.props.serchArray(data)
      })
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search.."
          name="search2"
          onChange={this.props.searchProduct}
          value={this.props.searchInput}
        />
        <button onClick={this.getSearchedProduct} type="button">
          <i class="fa fa-search"></i>
        </button>
      </div>
    )
  }
}

export default SearchBar
