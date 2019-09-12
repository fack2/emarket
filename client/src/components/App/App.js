import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../Shop'
<<<<<<< HEAD
import Login from '../Login'




class App extends Component {

    state = {
        category_id: null
    }
     setCatogeryId = (category_id) => {

        this.setState({ category_id })

    }



    render() {
        return ( < Router >
            <div className = "App" >
            <Route exact path = "/"
          component = { Home } /> 
            <Route  path = "/shop/:id" component={Shop}/> 
            <Route exact path = "/shop" component={Shop}/> 
            <Route  path = "/search/:searchInput" component={Shop}/>
            <Route  path = "/login" component={Login}/>
            

            </div> </Router >

        )
    }
=======
import ProductPage from '../Product_page'
import shipping_info from "../shipping_info";


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
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/search/:searchInput" component={Shop} />
          <Route exact path="/shipping_info" component={shipping_info} />
        </div>{' '}
      </Router>
    )
  }
>>>>>>> 43d845de5d204c6efc560fdc48811756c6ec08bf
}

export default App
