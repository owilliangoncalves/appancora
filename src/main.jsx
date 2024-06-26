import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loja from "./routes/loja/loja";
import BuscaPlaca from "./routes/buscaPlaca/buscaPlaca";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loja",
    element: <Loja />,
  },
  {
    path: '/buscaPlaca',
    element: <BuscaPlaca />
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
