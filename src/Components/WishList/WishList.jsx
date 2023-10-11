import React from 'react'

export default function WishList() {
  return (
    <div>WishListItems</div>
  )
}


/**
   * import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Style from "./WishList.module.css";

export default function WishList() {
  const { AddProductToWishlistAPI } = useContext(WishList);
  const [WishListDetails, SetWishListDetails] = useState(null);

  async function GetWishListDetails() {
    try {
      const { data } = await AddProductToWishlistAPI();
      SetWishListDetails(data);
      // console.log(data.data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetWishListDetails();
  }, []);
  return (
    <main>
    {WishListDetails ? (
      <div className="pt-2">
        <div className="d-flex justify-content-start align-items-center pb-3 container">
          <button
            className="btn btn-danger w-25"
            onClick={() => {
              // Handle DELETE ALL button click here
            }}
          >
            DELETE ALL
          </button>
        </div>
        <div className="w-75 mx-auto p-3 bg-main-light">
          <h3>Shopping Cart</h3>
          <h4 className="h6 text-main fw-bolder">
            Cart Items: {WishListDetails.numOfCartItems}
          </h4>
          <h4 className="h6 text-main fw-bolder md-4">
            Total Price {WishListDetails.data.totalCartPrice} EGP
          </h4>
          {WishListDetails.data.products.map((product) => (
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
                      {product.product.title.split(" ").slice(0, 3).join(" ")}
                    </h3>
                    <h6 className="text-main">Price: {product.price}</h6>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        // Handle increment button click here
                      }}
                      className="btn brdr-main text-info"
                    >
                      +
                    </button>
                    <span className="mx-3">{product.count}</span>
                    <button
                      onClick={() => {
                        // Handle decrement button click here
                      }}
                      className="btn brdr-main text-danger"
                    >
                      -
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Handle Remove Item button click here
                    
                  }}
                  className="btn p-0"
                >
                  {" "}
                  <li className="text-danger fas fa-trash-can"> </li> Remove
                  Item{" "}
                </button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between pt-3">
            <Link
              to={`/Address`}
              className="btn bg-main text-white fw-bold w-25"
            >
              Online Payment
            </Link>
            <Link className="btn bg-main text-white fw-bold w-25">
              Cash on Delivery
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div className="w-75 mx-auto p-3 bg-main-light">
        <h3>Shopping Cart</h3>
        <h4 className="h6 text-main fw-bolder">Cart Items: 0</h4>
        <h4 className="h6 text-main fw-bolder md-4">Total Price 0 EGP</h4>
        <h1 className="fw-bolder text-main text-center p-5">
          Cart Items is Empty
        </h1>
      </div>
    )}
  </main>
  );
}

 */