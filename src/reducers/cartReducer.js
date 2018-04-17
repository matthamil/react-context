import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const addToCart = (state, action) => {
  const { product } = action.payload;
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

const removeFromCart = (state, action) => {
  const { sku } = action.payload;
  const { cart } = state;

  const index = cart.findIndex(p => p.sku === sku);

  return {
    ...state,
    cart: [...cart.slice(0, index), ...cart.slice(index + 1)]
  };
};

const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cartReducer;
