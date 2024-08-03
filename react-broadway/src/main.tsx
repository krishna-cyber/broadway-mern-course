import  {  StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./assets/css/main.css"
import {  Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import RouterConfig from "./config/router.config";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer autoClose={1000} limit={2} transition={Slide} />
    <RouterConfig />
    </Provider>
  </StrictMode>
);
