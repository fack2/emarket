import React from 'react'
import './style.css'
import swal from 'sweetalert'
import NavBar from '../Navbar'

const shippingInfo = () => {
  return (
    <div>
      <NavBar />

      <h1>Shipping info</h1>
      <div className="flex-container">
        <label for="username"></label>
        <input type="text" placeholder="Name" name="username"></input>
        <label for="phone"></label>
        <input type="text" placeholder="Phone" name="Phone"></input>
        <label for="Address"></label>
        <input type="text" placeholder="Address" name="Address"></input>
        <label for="Extra Note"></label>
        <input type="text" placeholder="Extra Note" name="Extra Note"></input>
      </div>
      <button
        className="confirm"
        onClick={() => {
          swal({
            title:
              'Your Order is processed Contact us on phone No : 0598121490',
            icon: 'success',
            button: 'Home!'
          }).then(function () {
            window.location.href = '/'
          })
        }}
      >
        Confirm
      </button>
    </div>
  )
}
export default shippingInfo
