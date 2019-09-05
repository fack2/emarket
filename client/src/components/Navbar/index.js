import React from "react";
import "./style.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <section className="logo-section">
        <img
          className="logo"
          src="https://3.top4top.net/p_1339rel6k1.png"
          alt="logo"
        />
        <p className="shop"> Shop </p>
      </section>
      <section className="cart-section">
        <img
          className="cart"
          src="https://2.top4top.net/p_1339xtovq1.png"
          alt="cart"
        />
        <img
          className="menu"
          src="https://4.top4top.net/p_1339ilo061.png"
          alt="menu"
        />
      </section>
    </div>
  );
};
export default NavBar;
