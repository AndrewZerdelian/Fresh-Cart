import axios from "axios";
import React, { createContext } from "react";
//import Style from "./CatgoriesContext.module.css";

const CatContext = createContext();
const BaseURL = `https://ecommerce.routemisr.com`;
const CategoriesEndPoint = `/api/v1/categories`;
const UserToken = localStorage.getItem("UserToken");

export default function CatgoriesContextprovider() {
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

  return (
    <CatContext.Provider value={{ GetCategoriesList }}></CatContext.Provider>
  );
}
