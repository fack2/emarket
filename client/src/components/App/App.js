import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../Shop'
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
}

export default App