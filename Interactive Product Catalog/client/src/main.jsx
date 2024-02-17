import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Errors from "./components/Error/Errors.jsx";
import Shimmer from "./components/Shimmer/Shimmer.jsx";

const ProductPage = lazy(() =>
  import("../src/components/ProductPage/ProductPage.jsx")
);
const Success = lazy(() => import("./components/Payment/Success.jsx"));
const Cancel = lazy(() => import("./components/Payment/Cancel.jsx"));
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const SingleProductPage = lazy(() =>
  import("./components/SingleProductPage/SingleProductPage.jsx")
);

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
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/product-details/:productId",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <SingleProductPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/success",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Success />
          </Suspense>
        ),
      },
      {
        path: "/cancel",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <Cancel />
          </Suspense>
        ),
      },
      {
        path: '/shimmer',
        element: <Shimmer/>
      }
    ],
    errorElement: <Errors />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
