import axios from "axios";
import React, { createContext } from "react";

export const CartContext = createContext();

export default function CreateContextProvider(props) {
  const UserToken = localStorage.getItem("UserToken");
  const headers = { token: UserToken };

  //klmit token de billzat gaya mn post man copy paste 3ashan el backend mi7tag y2raha

  function AddToOCart(x) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: x,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((err) => err);
  }

  async function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((response) => response)
      .catch((err) => err);
  }

  async function UpdateCartProductQuantity(productID) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr/api/v1/cart/`,
        {
          count: productID,
        },
        {
          HEADERS: headers,
        }
      );
      if (response.status === 200) {
        console.log("Product quantity updated successfully.");
      } else {
        console.error("Failed to update product quantity.");
      }
    } catch (error) {
      console.log("Errors FROM UpdateCartProductQuantity");
    }
  }


    async function RemoveCartItem(productID) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }
  
  /** 
    async function RemoveCartItem(productID) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,

        {
          headers,
        }
      );
      if (response.status === 200) {
        console.log("Product quantity updated successfully.");
      } else {
        console.error("Failed to update product quantity.");
      }
    } catch (error) {
      console.log("Errors FROM RemoveCartItem",error);
    }
  }
 */
  return (
    <CartContext.Provider
      value={{
        AddToOCart,
        getLoggedUserCart,
        UpdateCartProductQuantity,
        RemoveCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
/**
 *     try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers: headers,
        }
      );
      // Return the response data
      return response.data;
    } catch (error) {
      // Handle any errors here
      console.error("Error adding to cart:", error);
      throw error; // Rethrow the error
    }
 */

/**import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext();

export default function CreateContextProvider(props) {
  let headers = {
    token: localStorage.getItem("UserToken"),
  };

  function AddToCart(x) {
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: x,
        },
        {
          headers: headers,
        }
      )
      .then((response) => response)
      .catch((err) => err);
  }
  return (
    <CartContext.Provider value={{ AddToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
*/
/**
 * 
 * import axios from "axios";
import React, { createContext } from "react";
//import Style from "./CartContext.module.css";

export const CartContext = createContext();
let headers = {
  token: localStorage.getItem("UserToken"),
};
export default function CartContextProvider(props) {
  async function AddtoCart(x) {
    let x = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId:x
      },
      {
        headers: headers,
      }
    );
  }
  return <CartContext.Provider value={{}}>Content</CartContext.Provider>;
}

 */

/**
  *   const headers = {
    token: localStorage.getItem("UserToken"), 
  };
  */

/**
   *     try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: headers,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
   * 
   */
