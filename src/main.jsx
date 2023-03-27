import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.scss";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const store = configureStore().store;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer closeOnClick={false} />

        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
