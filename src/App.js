import React from "react";
import Cart from "./components/cart/Cart";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const addToCart = (state, change) => {
  const { product } = change.payload;
  const { cart } = state;

  const index = cart.findIndex(p => p.sku === product.sku);

  if (index !== -1) {
    return {
      ...state,
      cart: [
        ...cart.slice(0, index),
        { ...product, count: cart[index].count + 1 },
        ...cart.slice(index + 1)
      ]
    };
  }

  return { ...state, cart: [...cart, { ...product, count: 1 }] };
};

const removeFromCart = (state, change) => {
  const { sku } = change.payload;
  const { cart } = state;

  const index = cart.findIndex(p => p.sku === sku);

  return {
    ...state,
    cart: [...cart.slice(0, index), ...cart.slice(index + 1)]
  };
};

const stateReducer = (state, change) => {
  switch (change.type) {
    case App.stateChangeTypes.addToCart:
      return addToCart(state, change);
    case App.stateChangeTypes.removeFromCart:
      return removeFromCart(state, change);
    default:
      return change;
  }
};

const getAddToCartChange = product => ({
  type: App.stateChangeTypes.addToCart,
  payload: { product }
});

const getRemoveFromCartChange = sku => ({
  type: App.stateChangeTypes.removeFromCart,
  payload: { sku }
});

export default class App extends React.Component {
  static stateChangeTypes = {
    addToCart: "ADD_TO_CART",
    removeFromCart: "REMOVE_FROM_CART"
  };

  state = {
    cart: []
  };

  addToCart = product => {
    const change = getAddToCartChange(product);
    this.setState(stateReducer(this.state, change));
  };

  removeFromCart = sku => {
    const change = getRemoveFromCartChange(sku);
    this.setState(stateReducer(this.state, change));
  };

  render() {
    const { cart } = this.state;
    const cartCount = cart.reduce((total, p) => total + p.count, 0);

    return (
      <div className="center-align">
        <div className="app">
          <Navbar cartCount={cartCount} />
          <ProductList addToCart={this.addToCart} />
          <Cart products={cart} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}
