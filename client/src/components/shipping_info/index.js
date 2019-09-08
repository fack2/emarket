import React, { Component } from "react";
import "./style.css";
import swal from "sweetalert";
import NavBar from "../Navbar";

class shippingInfo extends Component {
  state = {
    username: "",
    phone: "",
    Address: "",
    Extra_Note: ""
  };

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  clickButton = () => {
    swal({
      title: "Your Order is processed Contact us on phone No : 0598121490",
      icon: "success",
      button: "Home!"
    }).then(function() {
      window.location.href = "/";
    });
  };

  render() {
    const { username, phone, Address, Extra_Note } = this.state;
    return (
      <div>
        <NavBar />

        <h1>Shipping info</h1>
        <div className="flex-container">
          <label for="username"></label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={this.changeInput}
            value={username}
          ></input>
          <label for="phone"></label>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={this.changeInput}
            value={phone}
          ></input>
          <label for="Address"></label>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            onChange={this.changeInput}
            value={Address}
          ></input>
          <label for="Extra Note"></label>
          <input
            type="text"
            placeholder="Extra Note"
            name="Extra_Note"
            onChange={this.changeInput}
            value={Extra_Note}
          ></input>
        </div>
        <button className="confirm" onClick={this.clickButton}>
          Confirm
        </button>
      </div>
    );
  }
}
export default shippingInfo;
