import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "../node_modules/react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import data from "./data.json";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

let router = createHashRouter([
  {
    path: "adasa-psi",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "blog",
        element: <Blog />,
      },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "about", element: <About /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
