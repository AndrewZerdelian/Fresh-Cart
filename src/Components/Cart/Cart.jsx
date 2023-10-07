import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
//import Style from "./Cart.module.css";

export default function Cart() {
  let {
    getLoggedUserCart,
    RemoveCartItem,
    UpdateCartProduct,
    ClearAllUserCart,
  } = useContext(CartContext);

  const [CartDetails, setCartDetails] = useState(null);

  const [IsLoading, setIsLoading] = useState(false);
  const [ClearUserCart, setClearUserCart] = useState([]);
  async function updateCartCount(zalabia, count) {
    let { data } = await UpdateCartProduct(zalabia, count);
    setCartDetails(data);
  }

  async function getCart() {
  try {
    const { data } = await getLoggedUserCart();
    setCartDetails(data);
    // console.log(data.data.products);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  }
  //////////////////
  async function DeletedItems(productID) {
    const { data } = await RemoveCartItem(productID);
    setCartDetails(data);
  }

  useEffect(() => {
    getCart();
  }, []); ////////////////////

  useEffect(() => {}, [GETClearAllUserCart]); //////////////

  async function GETClearAllUserCart() {
    try {
      const { data } = await ClearAllUserCart();
      setClearUserCart(data);
      window.location.reload()
      console.log(data);
    } catch (error) {
      console.error("error in clearing all items from CART ");
    }
  }

  return (
    <main>
      {CartDetails ? (
        <div className="pt-2">
          <div className="d-flex justify-content-start align-items-center pb-3  container">
            <button
              className="btn btn-danger w-25 "
              onClick={GETClearAllUserCart}
            >
              DELETE ALL
            </button>
          </div>
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
                      <button
                        onClick={() =>
                          updateCartCount(product.product.id, product.count + 1)
                        }
                        className="btn brdr-main  text-info"
                      >
                        +
                      </button>
                      <span className="mx-3">{product.count}</span>
                      <button
                        onClick={() =>
                          updateCartCount(product.product.id, product.count - 1)
                        }
                        className="btn brdr-main  text-danger"
                      >
                        -
                      </button>
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
            <div className="d-flex justify-content-between pt-3">
              <Link
                to={`/Address`}
                className="btn bg-main text-white fw-bold w-25 "
              >
                Online Payment
              </Link>

              <Link className="btn bg-main text-white fw-bold  w-25">
                Cash on Delivery
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-75 mx-auto p-3 bg-main-light">
          <h3>Shopping Cart</h3>
          <h4 className="h6 text-main fw-bolder">Cart Items : 0</h4>
          <h4 className="h6 text-main fw-bolder md-4">Total Price 0 EGP</h4>
          <h1 className="fw-bolder text-main text center p-5">
            Cart Items is Empty
          </h1>
        </div>
      )}
    </main>
  );
}

/**
 * <div>
          {IsLoading ? (
            <div>
              <div className="mx-auto  d-flex justify-content-center align-items-center py-5">
                <InfinitySpin width="300" color="#4fa94d" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
 */

/**  async function DisplayCartItems() {
    await GetLoggedUserCart();

    console.log(GetLoggedUserCart);
  } */
