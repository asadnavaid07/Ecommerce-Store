import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "../src/store/Store";
import { Provider } from "react-redux";
import router from '../src/routes/main'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
