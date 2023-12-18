import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const WishList = createContext();
//const BaseURL = `https://ecommerce.routemisr.com`;
//const ENDPOINT = `/api/v1/wishlist`;
//const UserToken = localStorage.getItem("UserToken");
//const headers = { token: UserToken };
export default function WishListContextProvider({ children }) {
  const [WishListNotifications, setWishListNotifications] = useState([0]);
  async function AddProductToWishlistAPI(productId) {
    try {
      let response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId, //<=======
        },
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      setWishListNotifications(response?.data?.data?.length);
      console.log(response);
      return response;
    } catch (error) {
      alert.error(error);
    }
  }

  async function GetLoggedUserWishlist() {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      setWishListNotifications(response?.data?.data?.length);
      //console.log(response);
      //console.log(response?.data?.data?.length);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
 /**
  *  useEffect(() => {
    
  }, []); //fix for wishlist notification
  */
  async function RemoveProductFromWishlist(productId) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      setWishListNotifications(response?.data?.data?.length);
      console.log(response);
      console.log(`item go deleted`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <WishList.Provider
      value={{
        AddProductToWishlistAPI,
        RemoveProductFromWishlist,
        GetLoggedUserWishlist,
        WishListNotifications,
        setWishListNotifications,
      }}
    >
      {children}
    </WishList.Provider>
  );
}
