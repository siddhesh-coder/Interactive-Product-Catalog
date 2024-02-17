import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ProductPage from "../src/components/ProductPage/ProductPage.jsx";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Success from "./components/Payment/Success.jsx";
import Cancel from "./components/Payment/Cancel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product-page/:categoryId",
        element: <ProductPage />,
      },
      {
        path: '/product-details/:productId',
        element: <SingleProductPage/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/success',
        element: <Success/>
      },
      {
        path: '/cancel',
        element: <Cancel/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
