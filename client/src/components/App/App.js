import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import shippingInfo from '../shipping_info'

function App () {
  return (< Router >
    <div className = "App" >
      <Route exact path = "/"
        component = { Home }/>
      <Route exact path = "/shipping_info" component={shippingInfo}/>

    </div> </Router >

  )
}

export default App
