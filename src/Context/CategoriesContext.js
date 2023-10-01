import axios from "axios";
import React, { createContext } from "react";
//import Style from "./CatgoriesContext.module.css";

export let CatContext = createContext();
const BaseURL = `https://ecommerce.routemisr.com`;
const CategoriesEndPoint = `/api/v1/categories`;
//const UserToken = localStorage.getItem("UserToken");

export default function CatgoriesContextprovider({ children }) {
  async function GetCategoriesList() {
    try {
      const response = await axios.get(BaseURL + CategoriesEndPoint);

      if (200 === true) {
        console.log("Product quantity updated successfully.");
      } else {
        console.error("Failed to update product quantity.");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  //class Catgories = CatgoriesContextprovider

  return (
    <CatContext.Provider value={{ GetCategoriesList }}>
      {children}
    </CatContext.Provider>
  );
}
