import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user.reducer";
import cartReducer from "./reducer/cart.reducer";
import productViewReducer from "./reducer/productView.reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 






const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(
  { ...persistConfig, key: "cart" },
  cartReducer
);

const persistedUserReducer = persistReducer(
  { ...persistConfig, key: "user" },
  userReducer
);


 const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart: persistedCartReducer,
    productView: productViewReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
