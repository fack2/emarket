import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const NavBar = ({ resetSearch }) => {
  return (
    <div className = "nav-bar">

      <section className = "logo-section" >
        <Link to="/" > <img className = "logo"
          src = "https://3.top4top.net/p_1339rel6k1.png"
          alt = "logo" /> </Link>
        <p className = "shop" ><Link onClick={resetSearch} to="/shop" > Shop </Link></p> </section >
      <section className = "cart-section" >
        <img className = "cart"
          src = "https://2.top4top.net/p_1339xtovq1.png"
          alt = "cart" />
        <img className = "menu"
          src = "https://4.top4top.net/p_1339ilo061.png"
          alt = "menu" />
      </section>

    </div>
  )
}
export default NavBar