import React from "react";
import { Subscribe } from "unstated";
import CartContainer from "../cart/CartContainer";
import "./Navbar.css";

const Navbar = () => (
  <Subscribe to={[CartContainer]}>
    {({ state: { cart } }) => (
      <div className="navbar">
        <span className="website-title">My Shop</span>
        <div className="navbar-cart-wrapper">
          <span className="navbar-cart-icon" role="img" aria-label="cart">
            🛒
          </span>
          <span className="navbar-cart">
            {cart.reduce((count, p) => count + p.count, 0)}
          </span>
        </div>
      </div>
    )}
  </Subscribe>
);

export default Navbar;
