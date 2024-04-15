import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Error404 from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/cart",
    element: <div>Cart</div>,
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
