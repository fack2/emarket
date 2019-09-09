
import React, { Component } from 'react'
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom'


class ProductCard extends React.Component {
  state = {
    products: [],
    loading:true

  }
  
  componentDidMount() {
    
    if(this.props.match.params.id)
    {
    axios.get(`/shop/${this.props.match.params.id}`)
    .then( ({data}) => {    
        this.setState({products:data,loading:false})
    })}
    else{
      axios.get("/shop")
      .then( ({data}) => {
      
        this.setState({products:data,loading:false})
        
      })



    }
  }
  render () {
  const {products,loading} = this.state
  
    return (
      <>
      {!loading ? products.length ?(

products.map(e=>(
  <Link  to={ '/product/' + e.id }><div className="cards">
  <div className="product-card-back" >
      <div className="product-card" >
      <img className="product-img" src={e.img} alt="product-img"/>
      <p className="product-name">{e.name}</p>
      <p className="product-price">₪ {e.price}</p>
    </div>
    
  </div>
  </div>
  </Link>

        ))) : (<h1>There is no products</h1>
     
      ):(
      
      

        <img
        className="loading"
        src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368"
        alt="loading"
      />
      
      )}
    </>
    )
  }
}

export default ProductCard

