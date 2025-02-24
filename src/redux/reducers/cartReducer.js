import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        capsicumPizza: {
          quantity: 0,
          price: 200,
        },
        paneerPizza: {
          quantity: 0,
          price: 500,
        },
        sweatCornPizza: {
          quantity: 0,
          price: 1800,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  capsicumPizzaIncrement: (state) => {
    state.cartItems.capsicumPizza.quantity += 1;
  },
  paneerPizzaIncrement: (state) => {
    state.cartItems.paneerPizza.quantity += 1;
  },
  sweatCornPizzaIncrement: (state) => {
    state.cartItems.sweatCornPizza.quantity += 1;
  },
  capsicumPizzaDecrement: (state) => {
    state.cartItems.capsicumPizza.quantity -= 1;
  },
  paneerPizzaDecrement: (state) => {
    state.cartItems.paneerPizza.quantity -= 1;
  },
  sweatCornPizzaDecrement: (state) => {
    state.cartItems.sweatCornPizza.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.capsicumPizza.price *
        state.cartItems.capsicumPizza.quantity +
      state.cartItems.paneerPizza.price *
        state.cartItems.paneerPizza.quantity +
      state.cartItems.sweatCornPizza.price *
        state.cartItems.sweatCornPizza.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      capsicumPizza: {
        quantity: 0,
        price: 200,
      },
      paneerPizza: {
        quantity: 0,
        price: 500,
      },
      sweatCornPizza: {
        quantity: 0,
        price: 1800,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});