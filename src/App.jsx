import React, { useContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Brands from "./Components/Brands/Brands";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Catgories from "./Components/Catgories/Catgories";
import UserContextProvider, { userContext } from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
//Importing and Routing

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element:  <ProtectedRoute><Home/></ProtectedRoute> },
      { path: "Layout", element: <ProtectedRoute><Layout /></ProtectedRoute>  },
      { path: "Login", element: <Login /> },
      { path: "Brands", element: <Brands /> },
      { path: "Cart", element: <ProtectedRoute><Cart /></ProtectedRoute>  },
      { path: "Products", element: <Products /> },
      { path: "Register", element: <Register /> },
      { path: "Catgories", element: <Catgories /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {

  return (
    <UserContextProvider>
      <div>
        <RouterProvider router={Routers}></RouterProvider>
      </div>
    </UserContextProvider>
  );
}
