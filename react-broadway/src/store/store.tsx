import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user.reducer";
import cartReducer from "./reducer/cart.reducer";
import productViewReducer from "./reducer/productView.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ProductView: productViewReducer,
  },
});
