import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "./components";
import { FilterProvider, CartProvider } from "./context";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
);
