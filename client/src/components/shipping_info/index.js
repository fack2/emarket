import React, { Component } from "react";
import "./style.css";
import swal from "sweetalert";
import NavBar from "../Navbar";
import axios from "axios";

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
    const { username, phone, Address, Extra_Note } = this.state;
    if (username !== "" && phone !== "" && Address !== "") {
      axios
        .post("/shipping_info", { username, phone, Address, Extra_Note })
        .then(res => res.data);

      swal({
        title: "Your Order is processed Contact us on phone No : 0598121490",
        icon: "success",
        button: "Home!"
      }).then(function() {
        window.location.href = "/";
      });
    }
  };

  render() {
    const { username, phone, Address, Extra_Note } = this.state;
    return (
      <div>
        <NavBar />

        <h1>Shipping info</h1>
        <form className="flex-container">
          <label for="username"></label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={this.changeInput}
            value={username}
            required
          ></input>
          <label for="phone"></label>
          <input
            type="number"
            min = "7"
            max = "13"
            placeholder="Phone"
            name="phone"
            onChange={this.changeInput}
            value={phone}
            required
          ></input>
          <label for="Address"></label>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            onChange={this.changeInput}
            value={Address}
            required
          ></input>
          <label for="Extra Note"></label>
          <input
            type="text"
            placeholder="Extra Note"
            name="Extra_Note"
            onChange={this.changeInput}
            value={Extra_Note}
          ></input>
          <button type="submit" className="confirm" onClick={this.clickButton}>
            Confirm
          </button>
        </form>
      </div>
    );
  }
}
export default shippingInfo;
