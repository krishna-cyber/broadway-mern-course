import { reduce } from "@ant-design/plots/es/core/utils";
import { createSlice, original, Slice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  wishList: [],
  cartNumber: 0,
  originalPrice: 0,
  storePickup: 0,
  taxAmount: 0,
  totalAmount: 0,

  };

export const cartSlice: Slice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If the item does not exist, add it to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
      cartSlice.caseReducers.cartDetails(state);
    },
    reduceFromCart: (state, action) => {
      const existingItem = state.items.find(item => item._id === action.payload);
      if (existingItem) {
        // If the item already exists, decrease the quantity
        existingItem.quantity -= 1;
      } 
      cartSlice.caseReducers.cartDetails(state);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(item => item._id !== action.payload);
      cartSlice.caseReducers.cartDetails(state);
    },
    cartDetails: (state) => {
      state.cartNumber = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.originalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      state.storePickup = 99;
      state.taxAmount = 0.13 * state.originalPrice;
      state.totalAmount = state.originalPrice + state.storePickup + state.taxAmount;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,clearCart,reduceFromCart } = cartSlice.actions;

export default cartSlice.reducer;
