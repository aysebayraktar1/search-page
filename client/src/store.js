import { createStore, action } from "easy-peasy";

export const store = createStore({
  cart: JSON.parse(localStorage.getItem("cart")),

  addShoppingCart: action((state, payload) => {
    const isHave = state.cart?.find(
      (cartVal) => cartVal.item.id === payload.item.id
    );
    if (!isHave) {
      state.cart.push(payload);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }),

  deleteShoppingCart: action((state, payload) => {
    state.cart = state.cart.filter((cart) => cart.item.id !== payload.id);
    localStorage.setItem("cart", state.cart);
  }),
});
