import { Navigate } from "react-router-dom";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";

export default function AppRoutes() {
  return [
    {
      element: <Layout />,
      children: [{ path: "/home", index: true, element: <Home /> }],
    },
    { path: "*", element: <Navigate to="/home" replace /> },
  ];
}
