import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Marathon from "./pages/Rental";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/lund/:rental",
    element: <Marathon />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
