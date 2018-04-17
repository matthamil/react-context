import React from "react";
import "./Navbar.css";
import { CartContext } from "../cart/CartContext";

const Navbar = () => (
  <CartContext.Consumer>
    {({ cartCount }) => (
      <div className="navbar">
        <span className="website-title">My Shop</span>
        <div className="navbar-cart-wrapper">
          <span className="navbar-cart-icon" role="img" aria-label="cart">
            🛒
          </span>
          <span className="navbar-cart">{cartCount}</span>
        </div>
      </div>
    )}
  </CartContext.Consumer>
);

export default Navbar;
