import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import ProductPage from '../Product_page'

function App () {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
      </div>{' '}
    </Router>
  )
}

export default App
