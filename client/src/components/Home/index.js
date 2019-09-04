import React from "react";
import NavBar from "../Navbar";
import "./style.css";
import Category from "../Category";
class Home extends React.Component {
  goToShop = () => {
    const { history } = this.props;
    history.push("/shop");
  };
  render() {
    return (
      <div className="home">
        <NavBar />
        <img
          className="main-img"
          src="https://5.top4top.net/p_1341td5iv1.jpg"
          alt="main image"
        />
        <Category onClick={this.goToShop} />
      </div>
    );
  }
}

export default Home;
