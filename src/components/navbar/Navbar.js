import React from "react";
import "./Navbar.css";
import { CartContext } from "../cart/CartContext";
import { CurrencyContext } from "../i18n/CurrencyContext";
import currencyTypes from "../i18n/currencyTypes";

const Navbar = () => (
  <CurrencyContext.Consumer>
    {({ changeCurrency, currency }) => (
      <CartContext.Consumer>
        {({ cartCount }) => (
          <div className="navbar">
            <span className="website-title">My Shop</span>
            <div className="navbar-cart-wrapper">
              <select value={currency.name} onChange={changeCurrency}>
                {Object.values(currencyTypes).map(type => (
                  <option key={`${type.name}-dropdown`} value={type.name}>
                    {type.symbol}
                  </option>
                ))}
              </select>
              <span className="navbar-cart-icon" role="img" aria-label="cart">
                🛒
              </span>
              <span className="navbar-cart">{cartCount}</span>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    )}
  </CurrencyContext.Consumer>
);

export default Navbar;
