import React from "react";
import { Provider } from "unstated";
import Cart from "./components/cart/Cart";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/navbar/Navbar";
import CartContainer from "./components/cart/CartContainer";
import "./App.css";

const cart = new CartContainer();

export default class App extends React.Component {
  render() {
    return (
      <div className="center-align">
        <div className="app">
          <Provider inject={[cart]}>
            <Navbar />
            <ProductList />
            <Cart />
          </Provider>
        </div>
      </div>
    );
  }
}
