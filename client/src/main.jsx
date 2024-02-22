import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Errors from "./components/Error/Errors.jsx";
import Shimmer from "./components/Shimmer/Shimmer.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Cart from "./components/Cart/Cart.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Cancel from "./components/Payment/Cancel.jsx";
import Success from "./components/Payment/Success.jsx";
import NikeStore from "./components/Store/NikeStore.jsx";

const ProductPage = lazy(() =>
  import("../src/components/ProductPage/ProductPage.jsx")
);
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
          <Suspense fallback={<Shimmer />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/product-details/:productId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SingleProductPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
        path: "/shimmer",
        element: <Shimmer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: '/nikestore',
        element: <NikeStore/>
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
