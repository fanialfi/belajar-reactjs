import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import HomePage from "./Pages/home";
import ErrorPage from "./Pages/404";
import ProductsPage from "./Pages/products";
import Dashboard from "./Pages/dashboard";
import { Navigate } from "react-router-dom";
import ProductDetailPage from "./Pages/productDetail";
import CartPage from "./Pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        index: true,
        element: <Navigate to={"/dashboard/products"} replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
