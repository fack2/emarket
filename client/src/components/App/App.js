import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Shop from '../Shop'
<<<<<<< Updated upstream



=======
import ProductPage from '../Product_page'
import Register from '../register'
>>>>>>> Stashed changes

class App extends Component {
  state = {
    category_id: null
  }

<<<<<<< Updated upstream
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
            <Route path = "/shop/:id" component={Shop}/> 
            <Route exact path = "/shop" component={Shop}/> 
         
            

            </div> </Router >

        )
    }
=======
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
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    )
  }
>>>>>>> Stashed changes
}

export default App