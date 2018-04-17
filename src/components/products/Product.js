import React from "react";
import { PropTypes as T } from "prop-types";
import "./Product.css";
import { CartContext } from "../cart/CartContext";
import { CurrencyContext } from "../i18n/CurrencyContext";

const splitPriceForProductCard = price => {
  const formattedPrice = Number.parseFloat(price).toFixed(2);
  return formattedPrice.split(".");
};

const renderProductPrice = price => {
  return (
    <CurrencyContext.Consumer>
      {({ currency, convertFromUSD }) => {
        const [wholeNum, decimal] = splitPriceForProductCard(
          convertFromUSD(price)
        );
        return (
          <div className="price">
            <sup>{currency.symbol}</sup>
            <span className="price-whole-num">{wholeNum}</span>
            <sup>{decimal}</sup>
          </div>
        );
      }}
    </CurrencyContext.Consumer>
  );
};

const Product = ({ product }) => (
  <CartContext.Consumer>
    {({ addToCart }) => (
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
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </section>
    )}
  </CartContext.Consumer>
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
