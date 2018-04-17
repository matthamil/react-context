import React from "react";
import "./Cart.css";
import Card from "../shared/Card";
import { CartContext } from "./CartContext";

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

const Cart = () => (
  <CartContext.Consumer>
    {({ cart, cartPrice, removeFromCart }) => (
      <Card title="Cart" gridColumn={3}>
        {cart.length ? (
          cart.map(product => (
            <LineItem
              key={`${product.sku}-cart`}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <EmptyCartMessage />
        )}
        <TotalPrice total={cartPrice} />
      </Card>
    )}
  </CartContext.Consumer>
);

export default Cart;
