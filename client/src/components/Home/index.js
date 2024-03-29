import React from 'react'
import NavBar from '../Navbar'
import './style.css'
import Category from '../Category'

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <img
        className="main-img"
        src="https://5.top4top.net/p_1341td5iv1.jpg"
        alt="main_image"
      />
      <Category />
    </div>
  )
}

export default Home