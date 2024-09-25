import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const router = createBrowserRouter(AppRoutes());

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
