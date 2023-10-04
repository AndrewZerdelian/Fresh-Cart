import axios from "axios";
import React, { createContext } from "react";

export let CatContext = createContext();
const BaseURL = `https://ecommerce.routemisr.com`;
const CategoriesEndPoint = `/api/v1/categories`;
//const UserToken = localStorage.getItem("UserToken");

export default function CatgoriesContextprovider({ children }) {
  async function GetCategoriesList() {
    try {
      const response = await axios.get(BaseURL + CategoriesEndPoint);

      if (response.status === 200) {
        //console.log("Product quantity updated successfully From Context.");
      } else {
        console.log("Failed to update product quantity From Context.");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
  /////////////////////////Categorie Details Function /////////////////////////////////////

  async function GetSpecificCategory(_id) {
    try {
      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${_id}`);
      console.log(response.data);
      
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CatContext.Provider value={{ GetCategoriesList, GetSpecificCategory }}>
      {children}
    </CatContext.Provider>
  );
}
/**
   * async function GetCategoriesList() {
    try {
      const response = await axios.get(BaseURL + CategoriesEndPoint);
      
      if (response.status === 200) {
        console.log("Product quantity updated successfully From Context.");
      } else {
        console.log("Failed to update product quantity From Context.");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }
   */
