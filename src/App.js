import React from "react";
import Cart from "./components/cart/Cart";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="center-align">
        <div className="app">
          <Navbar />
          <ProductList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
