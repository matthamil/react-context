import React from "react";
import { PropTypes as T } from "prop-types";
import "./Product.css";

const renderProductPrice = price => {
  const formattedPrice = Number.parseFloat(price).toFixed(2);
  const [wholeNum, decimal] = formattedPrice.split(".");

  return (
    <div className="price">
      <sup>$</sup>
      <span className="price-whole-num">{wholeNum}</span>
      <sup>{decimal}</sup>
    </div>
  );
};

const Product = ({ image, name, price, addToCart }) => (
  <section className="product-wrapper">
    <div className="product-card">
      <div className="product">
        <div className="image-wrapper">
          <img className="image" src={image} alt={name} />
        </div>
        <div className="product-info">
          <span className="name">{name}</span>
          {renderProductPrice(price)}
        </div>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  </section>
);

export const productPropType = {
  image: T.string.isRequired,
  name: T.string.isRequired,
  price: T.number.isRequired
};

Product.propTypes = {
  ...productPropType,
  addToCart: T.func.isRequired
};

export default Product;
