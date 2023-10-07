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
      console.log(response?.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <WishList.Provider value={{ AddProductToWishlistAPI }}>
      {children}
    </WishList.Provider>
  );
}
