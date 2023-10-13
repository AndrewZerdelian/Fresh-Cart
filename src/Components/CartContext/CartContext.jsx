import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CreateContextProvider(props) {
  const UserToken = localStorage.getItem("UserToken");
  const headers = { token: UserToken };

  //klmit token de billzat gaya mn post man copy paste 3ashan el backend mi7tag y2raha

  const [CartID, setCartID] = useState(null);
  async function GetperchasedCartItems() {
    try {
      let { data } = await getLoggedUserCart();
      setCartID(data?.data?._id);
      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetperchasedCartItems();
    //console.log("Logging");
  }, []);
  const [CartNotification, setCartNotification] = useState([0]);

  async function AddToOCart(x) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: x,
        },
        {
          headers,
        }
      );
      console.log(response.data.numOfCartItems);
      setCartNotification(response?.data?.numOfCartItems);
      return response;
    } catch (error) {}
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
          headers: headers,
        }
      );
      console.log(response.data);
      setCartNotification(response?.data?.numOfCartItems);
      return response;
    } catch (error) {
      console.error(error);
    }
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
  async function RemoveCartItem(productID) {
    try {
      const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}`, {
        headers,
      })
      setCartNotification(response?.data?.numOfCartItems);
      return response
    } catch (error) {
      console.log(error);
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

  async function UpdateCartProduct(btates, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${btates}`,
        {
          count,
        },
        {
          headers,
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
        { headers: headers }
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
          headers,
        }
      );
      console.log("Logged from Perchasing API ");
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  //////////////////// /////////////////////

  //////////////////////Update cart product quantity///////////////////

  async function UpdateCartProductQuantity(COUNTERID, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${COUNTERID}`,
        {
          count: "8",
        },
        {
          headers,
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  //`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/65212ed67aa5335f22971d72?url=http://localhost:3000`,
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
        CartID,
        CartNotification,
        setCartNotification,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

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
