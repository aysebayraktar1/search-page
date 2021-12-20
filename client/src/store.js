import { createStore, action } from "easy-peasy";

export const store = createStore({
  cart: [],
  addShoppingCart: action((state, payload) => {
    state.cart.push(payload);
    // localStorage.setItem("cart", state);
  }),
  deleteShoppingCart: action((state, payload) => {
    state.cart = state.cart.filter((cart) => cart.id !== payload.id);
    // localStorage.setItem("cart", JSON.stringify(state.cart));
  }),
});
