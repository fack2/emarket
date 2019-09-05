import React from 'react'
import './style.css'
import Navbar from '../Navbar/index'
const successMessage = () => {
  return <div>
    <Navbar/>
    <img className='proccesImage' src='https://1.top4top.net/p_1343s88l91.jpg' alt='processImage'/>
    <h1 className='massage'>Your Order is processed</h1>
    <h2 className='phone'>Contact us on phone No : 0598121490</h2>
  </div>
}
export default successMessage
