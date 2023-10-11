import axios from "axios";
import React, { createContext } from "react";

export const WishList = createContext();
//const BaseURL = `https://ecommerce.routemisr.com`;
//const ENDPOINT = `/api/v1/wishlist`;
const UserToken = localStorage.getItem("UserToken");
const headers = { token: UserToken };
export default function WishListContextProvider({ children }) {
  async function AddProductToWishlistAPI(productId) {
    try {
      let response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
            productId, //<=======
        },
        {
          headers,
        }
      );
      console.log(response?.data?.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function GetLoggedUserWishlist(){
    try {
      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers,
      })
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  async function RemoveProductFromWishlist (productId){
    try {
      const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        headers
      })
      console.log(`item go deleted`);
      return response;
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <WishList.Provider value={{ AddProductToWishlistAPI,RemoveProductFromWishlist }}>
      {children}
    </WishList.Provider>
  );
}
