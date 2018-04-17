import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../actions/actionCreators";
import { productPropType } from "../products/Product";
import "./Cart.css";
import Card from "../shared/Card";

const formatNumber = n => Number.parseFloat(n).toFixed(2);

const LineItem = ({ product, removeFromCart }) => (
  <section className="line-item-wrapper">
    <div className="line-item">
      <div className="product-info">
        <span className="title">{product.name}</span>
        <span className="line-item-price">
          ${formatNumber(product.price)} ea.
        </span>
      </div>
      <div className="line-item--right">
        <button
          className="remove-from-cart"
          onClick={() => removeFromCart(product.sku)}
        >
          Remove
        </button>
        <span className="line-item-count">x {product.count}</span>
        <span className="total-line-item-price">
          ${formatNumber(product.price * product.count)}
        </span>
      </div>
    </div>
  </section>
);

const EmptyCartMessage = () => (
  <div className="empty-cart">
    <span>
      <span role="img" aria-label="warning">
        ⚠️
      </span>{" "}
      Your cart is empty.
    </span>
  </div>
);

const TotalPrice = ({ total }) => (
  <div className="total-price">
    <span>Total: ${formatNumber(total)}</span>
  </div>
);

const Cart = ({ products, totalPrice, removeFromCart }) => (
  <Card title="Cart" gridColumn={3}>
    {products.length ? (
      products.map(product => (
        <LineItem
          key={`${product.sku}-cart`}
          product={product}
          removeFromCart={removeFromCart}
        />
      ))
    ) : (
      <EmptyCartMessage />
    )}
    <TotalPrice total={totalPrice} />
  </Card>
);

Cart.propTypes = {
  products: T.arrayOf(
    T.shape({ ...productPropType, count: T.number.isRequired })
  ).isRequired,
  removeFromCart: T.func.isRequired,
  totalPrice: T.number.isRequired
};

Cart.defaultProps = {
  products: []
};

const mapStateToProps = state => ({
  products: state.cart,
  totalPrice: state.cart.reduce((total, p) => total + p.price * p.count, 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeFromCart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
