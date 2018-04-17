import React from "react";
import { PropTypes as T } from "prop-types";
import "./Navbar.css";

const Navbar = ({ cartCount }) => (
  <div className="navbar">
    <span className="website-title">My Shop</span>
    <div className="navbar-cart-wrapper">
      <span className="navbar-cart-icon" role="img" aria-label="cart">
        🛒
      </span>
      <span className="navbar-cart">{cartCount}</span>
    </div>
  </div>
);

Navbar.propTypes = {
  cartCount: T.number.isRequired
};

export default Navbar;
