import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CreateContextProvider(props) {
  //const UserToken = localStorage.getItem("UserToken");
  //const headers = { token: UserToken };

  const [CartNotification, setCartNotification] = useState([0]);

  async function AddToOCart(productId) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      console.log(response.data.numOfCartItems);
      setCartNotification(response?.data?.numOfCartItems);

      return response;
    } catch (error) {
      alert(`if you are not logged in log in to add to your cart and check out `)
    }
  }

  /**
 *   function AddToOCart(x) {
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

 */

  async function getLoggedUserCart() {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      //console.log(response.data);
      setCartNotification(response?.data?.numOfCartItems);
      return response;
    } catch (error) {
      console.warn(
        "Cart is empty thats why there is no data to fetch or to show in the notification icon mainly its caused from the clear all items api in cart only  "
      );
    }
  }

  async function RemoveCartItem(productID) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      setCartNotification(response?.data?.numOfCartItems);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function RemoveCartItem(productID) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
        headers: { token: localStorage.getItem("UserToken") },
      })
      .then((response) => response)
      .catch((error) => error);
  }

  async function UpdateCartProduct(btates, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${btates}`,
        {
          count,
        },
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );

      if (response.status === 200) {
        console.log("Product quantity updated successfully.");
      } else {
        console.error("Failed to update product quantity.");
      }

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function ClearAllUserCart() {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers: { token: localStorage.getItem("UserToken") } }
      );
      console.log(response + " Clear ALL ITEMS FROM CONTEST ");
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  ///////////////////PAYMENT////////////////////

  async function POSTCheckoutSession(id, url, values) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,
        {
          shippingAddress: values,
        },

        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      console.log("Logged from Perchasing API ");
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function UpdateCartProductQuantity(COUNTERID, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${COUNTERID}`,
        {
          count: "8",
        },
        {
          headers: { token: localStorage.getItem("UserToken") },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        AddToOCart,
        getLoggedUserCart,
        UpdateCartProduct,
        RemoveCartItem,
        ClearAllUserCart,
        POSTCheckoutSession,
        UpdateCartProductQuantity,
        //CartID,
        CartNotification,
        setCartNotification,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

/**
   * originally
   * async function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })

      .then((response) => response)
      .catch((err) => err);
  }
   */

/**
   *  async function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((response) => response)
      .catch((err) => err);
  }
   */

/**async function UpdateCartProduct(productID) {
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
      return response;
    } catch (error) {
      console.log("Errors FROM UpdateCartProductQuantity");
    }
  }
*/

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
