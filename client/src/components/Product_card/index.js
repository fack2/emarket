
import React, { Component } from 'react'
import './style.css'
import axios from 'axios';



class ProductCard extends React.Component {
  state = {
    products: [{name:"wait"}]

  }
  

  
  componentDidMount() {
    axios.get('/shop')
    .then( (response) => {
      // handle success
      console.log(`plapla`);
      console.log(response.data);
      const resultArray =response.data.map(e=>e)
      this.setState({products:resultArray},()=>{
        console.log(this.state.products)
      })
      
    })
  }
  render () {
  const {products} = this.state
  
    return (
      <>
     {products.map(e=>(
       <div className="cards">
      <div className="product-card-back" >
         

           <div className="product-card" >
          <img className="product-img" src={e.img} alt="product-img"/>
          <p className="product-name">{e.name}</p>
          <p className="product-price">₪ {e.price}</p>
        </div>
        
        
      </div>
      </div>
       ))}
       </>
    )
  }
}

export default ProductCard

