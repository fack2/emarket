
import React, { Component } from 'react'
import './style.css'
import axios from 'axios';
import { Link } from 'react-router-dom'


class ProductCard extends React.Component {
  state = {
    products: []

  }
  

  
  componentDidMount() {
    if(this.props.match.params.id)
    {
    axios.get(`/shop/${this.props.match.params.id}`)
    .then( (response) => {
      const resultArray =response.data.map(e=>e)
      this.setState({products:resultArray},()=>{
      })
      
    })}else{
      axios.get("/shop")
      .then( (response) => {
        const resultArray =response.data.map(e=>e)
        this.setState({products:resultArray},()=>{
        })
        
      })



    }
  }
  render () {
  const {products} = this.state
  
    return (
      <>
      {!products.length ? (
          
          <img
            className="loading"
            src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5300368"
            alt="loading"
          />
        ) : (
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
      )))}
    </>
    )
  }
}

export default ProductCard

