import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../Shop'
import Register from '../register'
import ProductPage from '../Product_page'
import shipping_info from "../shipping_info";
import cartPage from "../cart_page";

class App extends Component {
  state = {
    category_id: null
  }

  setCatogeryId = category_id => {
    this.setState({ category_id })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/shop/:id" component={Shop} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/register" component={Register} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/search/:searchInput" component={Shop} />
          <Route exact path="/shipping_info" component={shipping_info} />
          <Route exact path="/cart" component={cartPage} />
        </div>
      </Router>
    )
  }
}

export default App
