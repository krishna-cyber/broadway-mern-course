import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  wishList: null,
};

export const cartSlice: Slice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      // Add user to the state array
      state.cart = action.payload;
    },
    addItemsToWishList: (state, action) => {
      // Add user to the state array
      state.cart = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addItemsToCart } = cartSlice.actions;

export default cartSlice.reducer;
