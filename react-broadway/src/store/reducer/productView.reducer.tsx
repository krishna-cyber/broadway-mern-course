import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

export const productView: Slice = createSlice({
  name: "ProductView",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      // Add user to the state array
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectProduct } = productView.actions;

export default productView.reducer;
