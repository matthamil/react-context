import { createStore } from "redux";
import cartReducer from "../reducers/cartReducer";

export default function configureStore() {
  return createStore(cartReducer);
}
