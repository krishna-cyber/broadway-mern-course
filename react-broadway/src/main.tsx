import  {  StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./assets/css/main.css"
import {  Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import RouterConfig from "./config/router.config";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      
    <PersistGate loading={null} persistor={persistor}>
    <ToastContainer autoClose={1000} limit={2} transition={Slide} />
    <RouterConfig />
    </PersistGate>
    </Provider>
    </QueryClientProvider>
  </StrictMode>
);
