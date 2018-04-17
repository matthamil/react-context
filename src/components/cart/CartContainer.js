import { Container } from "unstated";

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
    case CartContainer.stateChangeTypes.addToCart:
      return addToCart(state, change);
    case CartContainer.stateChangeTypes.removeFromCart:
      return removeFromCart(state, change);
    default:
      return change;
  }
};

const getAddToCartChange = product => ({
  type: CartContainer.stateChangeTypes.addToCart,
  payload: { product }
});

const getRemoveFromCartChange = sku => ({
  type: CartContainer.stateChangeTypes.removeFromCart,
  payload: { sku }
});

export default class CartContainer extends Container {
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
}
