import  {  StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./assets/css/main.css"
import {  Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import RouterConfig from "./config/router.config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer autoClose={1000} limit={2} transition={Slide} />
    <RouterConfig />
  </StrictMode>
);
