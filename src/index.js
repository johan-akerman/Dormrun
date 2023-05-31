import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rental from "./pages/Rental";
import New from "./pages/New";
import ReactGA from "react-ga";

const trackingID = "G-76FM0PB6C2";
ReactGA.initialize(trackingID);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/lund/:rental",
    element: <Rental />,
  },

  {
    path: "/new-dorm",
    element: <New />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
