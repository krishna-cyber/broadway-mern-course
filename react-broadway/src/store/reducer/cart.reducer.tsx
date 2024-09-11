import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  wishList: [],
  cartNumber: 0,
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
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
