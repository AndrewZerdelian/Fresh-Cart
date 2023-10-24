import React, { useContext, useEffect, useState } from "react";
import { WishList } from "../../Context/WishListContext";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";

export default function Wishlist() {
  const {
    GetLoggedUserWishlist,
    RemoveProductFromWishlist,
    setWishListNotifications,
  } = useContext(WishList);

  const [Rendering, setRendering] = useState([]);
  const { AddToOCart } = useContext(CartContext);
  const [Add, setAdd] = useState([]);

  async function LoggedUserWishlist() {
    try {
      const { data } = await GetLoggedUserWishlist();
      setRendering(data);
      console.log(data);
      setWishListNotifications(data?.data?.length);
    } catch (error) {
      console.error("ERR FROM WISHLIST PAGE " + error);
    }
  }

  useEffect(() => {
    LoggedUserWishlist();
  }, []);

  async function DeletingWishList(productId) {
    try {
      const { data } = await RemoveProductFromWishlist(productId);
      // Fetch the updated wishlist data
      const updatedWishlist = await GetLoggedUserWishlist();
      setRendering(updatedWishlist.data); // Update the state with the updated data
      console.log(updatedWishlist.data);
      setWishListNotifications(data?.data?.length);
      console.log(data);
      toast.success("Product removed successfully From your wishlist");
    } catch (error) {
      console.error(error);
    }
  }

  async function AddtoCartFromFeaturedDetails(productId) {
    try {
      const { data } = await AddToOCart(productId);
      setAdd(data);
      console.log("Item added to cart");
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      toast.error("something went wrong");
    }
  }

  useEffect(() => {}, [AddtoCartFromFeaturedDetails]);

  return (
    <main className="pt-5">
      <div className="container bg-main-light">
        <h1 className="fw-bolder pt-5">WishList</h1>
        {Rendering && (
          <h3 className="fw-bolder pt-3 ">
            Items
            <span className="fw-bolder"> {Rendering.count}</span>
          </h3>
        )}

        <div>
          {Rendering?.data?.map((Item) => (
            <div key={Item.id}>
              <div className="d-flex justify-content-start align-items-center py-2">
                <div className="w-25">
                  <img
                    className="w-100"
                    src={Item.imageCover}
                    alt={Item.title}
                  />
                </div>
                <div className="w-75 px-5">
                  <h2 className="fw-bolder text-main pt-5">
                    {Item.title
                      ? Item.title.split(" ").slice(0, 2).join(" ")
                      : "Title Not Available"}
                  </h2>
                  <h2 className="fw-bolder text-main pt-5">{Item.price} EGP</h2>
                  <div className="py-5 d-flex justify-content-start gap-5">
                    <button
                      onClick={() => AddtoCartFromFeaturedDetails(Item.id)}
                      className="btn w-25 bg-primary fw-bolder text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <button
                    onClick={() => DeletingWishList(Item.id)}
                    className="btn w-25"
                  >
                    <li className=" text-danger fas fa-trash-can"> </li> Remove
                    Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/**
 * ADD TO CART WORKS 
 * import React, { useContext, useEffect, useState } from "react";
import { WishList } from "../../Context/WishListContext";
import { CartContext } from "../CartContext/CartContext";

export default function Wishlist() {
  const {
    GetLoggedUserWishlist,
    RemoveProductFromWishlist,
    setWishListNotifications,
  } = useContext(WishList);

  const [Rendering, setRendering] = useState([]);
  const { AddToOCart } = useContext(CartContext);
  const [Add, setAdd] = useState([]);
  async function LoggedUserWishlist() {
    try {
      const { data } = await GetLoggedUserWishlist();
      setRendering(data);
      console.log(data);
      console.log(data?.data?.length);
      setWishListNotifications(data?.data?.length);
    } catch (error) {
      console.error("ERR FROM WISHLIST PAGE " + error);
    }
  }

  useEffect(() => {
    LoggedUserWishlist();
  }, []);

  ///////////////////DELETING WISHLIST////////////////////////

  async function DeletingWishList(productId) {
    try {
      const { data } = await RemoveProductFromWishlist(productId);
      //window.location.reload();
      setRendering(data);
      console.log(data?.data?.length);
    } catch (error) {
      console.error(error);
    }
  }
  /////////////////////////Add to CART////////////////


  async function AddtoCartFromFeaturedDetails(productId) {
    try {
      const { data } = await AddToOCart(productId);
      setAdd(data);
      console.log("Item added to cart");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {}, [AddtoCartFromFeaturedDetails]);

  return (
    <main className="pt-5">
      <div className="container  bg-main-light">
        <h1 className="fw-bolder pt-5">WishList</h1>
        <h3 className="fw-bolder pt-3 ">
          Items
          <span className="fw-bolder"> {Rendering.count}</span>
        </h3>

        <div className="">
          {Rendering?.data?.map((Item) => (
            <div className="" key={Item.id}>
              <div className="d-flex justify-content-start align-items-center py-2">
                <div className="w-25 ">
                  <img
                    className="w-100"
                    src={Item.imageCover}
                    alt={Item.title}
                  />
                </div>
                <div className="w-75 px-5">
                  <h2 className="fw-bolder text-main pt-5">
                    {Item.title.split(" ").slice(0, 2).join(" ")}
                  </h2>
                  <h2 className="fw-bolder text-main pt-5">
                    {Item.price} EGP{" "}
                  </h2>
                  <div className="py-5 d-flex justify-content-start gap-5">
                    <button
                      onClick={() => AddtoCartFromFeaturedDetails(Item._id)}
                      className="btn w-25 bg-primary fw-bolder text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <button
                    onClick={() => DeletingWishList(Item.id)}
                    className="btn w-25"
                  >
                    <li className=" text-danger fas fa-trash-can"> </li> Remove
                    Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
**/
