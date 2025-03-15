import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homescreen from "./components/screens/Homescreen";
import Loginscreen from "./components/screens/Loginscreen";
import Cart from "./components/screens/Cart";
import Signupscreen from "./components/screens/Signupscreen";
import ProductScreen from "./components/screens/ProductScreen";
import store from "./Store";
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homescreen /> }, 
      { path: "product/:id", element: <ProductScreen/> },
      { path: "login", element: <Loginscreen /> },
      { path: "signup", element: <Signupscreen /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}><RouterProvider router={router} /></Provider>
    
  </React.StrictMode>
);
