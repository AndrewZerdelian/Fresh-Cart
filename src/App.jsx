//import React, { useContext, useEffect } from "react";
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
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import FeaturedDetails from "./Components/FeaturedDetails/FeaturedDetails";
import CreateContextProvider from "./Components/CartContext/CartContext";
import { Toaster } from "react-hot-toast";
import Profile from "./Components/Profile/Profile";
import CatgoriesContextprovider from "../src/Context/CategoriesContext";
import BrandsContextProvider from "./Context/BrandsContext";

//Importing and Routing

let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "Layout", element: <Layout /> },
      { path: "Login", element: <Login /> },
      {
        path: "Brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "Products",
        element: (
          <ProtectedRoute>
            {" "}
            <Products />
          </ProtectedRoute>
        ),
      },
      { path: "Register", element: <Register /> },
      {
        path: "Catgories",
        element: (
          <ProtectedRoute>
            {" "}
            <Catgories />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "FeaturedDetails/:id",
        element: (
          <ProtectedRoute>
            {" "}
            <FeaturedDetails />{" "}
          </ProtectedRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return (
    <BrandsContextProvider>
    <CreateContextProvider>
      <UserContextProvider>
        <CatgoriesContextprovider>
          <div>
            <RouterProvider router={Routers}></RouterProvider>
          </div>
        </CatgoriesContextprovider>
      </UserContextProvider>

      <Toaster />
    </CreateContextProvider>
    </BrandsContextProvider>
  );
}
