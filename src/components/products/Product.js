import React from "react";
import { PropTypes as T } from "prop-types";
import { Subscribe } from "unstated";
import CartContainer from "../cart/CartContainer";
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

const Product = ({ product }) => (
  <Subscribe to={[CartContainer]}>
    {cart => (
      <section className="product-wrapper">
        <div className="product-card">
          <div className="product">
            <div className="image-wrapper">
              <img className="image" src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <span className="name">{product.name}</span>
              {renderProductPrice(product.price)}
            </div>
          </div>
          <button
            className="add-to-cart"
            onClick={() => cart.addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </section>
    )}
  </Subscribe>
);

export const productPropType = {
  image: T.string.isRequired,
  name: T.string.isRequired,
  price: T.number.isRequired
};

Product.propTypes = {
  product: T.shape(productPropType)
};

export default Product;
