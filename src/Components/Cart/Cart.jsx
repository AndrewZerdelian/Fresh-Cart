import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
//import Style from "./Cart.module.css";


export default function Cart() {
  let { getLoggedUserCart, RemoveCartItem, UpdateCartProductQuantity } =
    useContext(CartContext);

  const [CartDetails, setCartDetails] = useState(null);

  async function getCart() {
    const { data } = await getLoggedUserCart();
    setCartDetails(data);
    //console.log(data);
  }
  //////////////////
  async function DeletedItems(productID) {
    const { data } = await RemoveCartItem(productID);
    setCartDetails(data);
  }
  useEffect(() => {
    getCart();
  }, []);

  /**async function DeletedItems(productID) {
    try {
      const response = await RemoveCartItem(productID);
  
      // Check if the response is an error (if it has an 'error' property, for example)
      if (response.error) {
        console.error('Error:', response.error);
        // Handle the error here, e.g., show an error message to the user
      } else {
        // Assuming the response is successful, update the state with the data
        setCartDetails(response);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle other errors (e.g., network errors) here
    }
  }
  */

  return (
    <main>
      {CartDetails ? (
        <div>
          <div className="w-75 mx-auto p-3 bg-main-light">
            <h3>Shopping Cart</h3>
            <h4 className="h6 text-main fw-bolder">
              Cart Items : {CartDetails.numOfCartItems}
            </h4>
            <h4 className="h6 text-main fw-bolder md-4">
              Total Price {CartDetails.data.totalCartPrice} EGP
            </h4>
            {CartDetails.data.products.map((product) => (
              <div
                key={product.product.id}
                className="row border-bottom py-2 px-2"
              >
                <div className="col-md-1">
                  <img
                    className="w-100"
                    src={product.product.imageCover}
                    alt="product"
                  />
                </div>

                <div className="col-md-11">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6">
                        {" "}
                        {product.product.title.split(" ").slice(0, 3).join(" ")}
                      </h3>
                      <h6 className="text-main">Price : {product.price}</h6>
                    </div>
                    <div>
                      <button className="btn brdr-main  text-info">+</button>
                      <span className="mx-3">{product.count}</span>
                      <button className="btn brdr-main  text-danger">-</button>
                    </div>
                  </div>
                  <button
                    onClick={() => DeletedItems(product.product.id)}
                    className="btn p-0"
                  >
                    {" "}
                    <li className=" text-danger fas fa-trash-can"> </li> Remove
                    Item{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

/**  async function DisplayCartItems() {
    await GetLoggedUserCart();

    console.log(GetLoggedUserCart);
  } */
