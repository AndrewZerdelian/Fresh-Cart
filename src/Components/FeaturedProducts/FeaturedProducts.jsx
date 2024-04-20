import axios from "axios";
//import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Style from "./FeaturedProducts.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { Await, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";
import { WishList } from "../../Context/WishListContext";
//import { BsFillHeartFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Formik, useFormik } from "formik";
//import { clear } from "@testing-library/user-event/dist/clear";

export default function FeaturedProducts() {
  let { AddToOCart } = useContext(CartContext);
  const { AddProductToWishlistAPI, setWishListNotifications } =
    useContext(WishList);
  //const [isClick, setClick] = useState(false);
  const [WishListDetails, setWishListDetails] = useState(null);
  const [HeartIcon, SetHeartIcon] = useState(false);

  async function Addproduct(productId) {
    let response = await AddToOCart(productId);
    console.log(response);
    if (response?.data?.status === "success") {
      toast.success(response.data.message, {
        duration: 2000,
      });
    } else {
      toast.error("Error adding product: ");
    }
    console.log(response);
  }

  async function GetFeaturedProducts() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  //refetch isError
  //isFetching

  const { isLoading, data } = useQuery(
    "FeaturedProducts",
    GetFeaturedProducts,
    {
      cacheTime: 10000, // Cache time for 10 seconds
      staleTime: 120000, // refresh data every 120 seconds
      //refetchInterval:3000 // for multiple refreshes
    }
  );

  ////////////////////Handle Search from UseQuery //////////////////////////////////////////////////
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
    GetFeaturedProducts(event.target.value);
    event.preventDefault();
    console.log(query);
  }

  ////////////////////////////WISHLIST //////////////////////////////////
  return (
    <main>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="container py-5 d-flex justify-content-center"
      >
        <div className="w-100">
          <div className="mb-3">
            <input
              onChange={handleChange}
              id="title"
              name="title"
              type="text"
              className="form-control fw-bold"
              placeholder="Searching for...."
            />
          </div>
        </div>
      </form>
      {isLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5 ">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div className="container py-2 pt-5 ">
          <div className="row">
            {data?.data?.data
              ?.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((product) => (
                <div
                  key={product.id}
                  className={`col-md-3 col-6 py-3 px-2 cursor-pointer scale-25 ${Style.card}`}
                >
                  <Link
                    to={`/FeaturedDetails/${product.id}`}
                    className="text-decoration-none"
                  >
                    <img
                      src={product.imageCover}
                      alt={product.title}
                      className="w-100"
                    />
                    <span className="text-main font-sm fw-bolder">
                      {product.category.name}
                    </span>
                    <h2 className="h6">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h2>
                    <div className="d-flex justify-content-between mt-3">
                      <span>{product.price} EGP</span>
                      <span>
                        <i className="fas fa-star rating-color md-2"></i>
                        {product.ratingsAverage}
                      </span>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => Addproduct(product.id)}
                      className="btn bg-main text-white   w-75 btn-sm"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
//////////////////////////*****************////////////////
/**
 *   async function getWishList(productId) {
    try {
      const response = await AddProductToWishlistAPI(productId);
      setWishListDetails(response);
      console.log(response);
      setWishListNotifications(response?.data?.data?.length);
      console.log(response?.data?.data?.length);

      SetHeartIcon(!HeartIcon);
      toast.success("Item added to wish list", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("Error adding product: ");
      console.error(error);
    }
  }
  useEffect(() => {}, []);

 * 
 * <div onClick={() => getWishList(product.id)} className="">
                      {HeartIcon ? (
                        <FaHeart color="red" size="2em" />
                      ) : (
                        <FaRegHeart color="black" size="2em" />
                      )}
                    </div>
 */

///////////////////////Searches for Products list //////////////////////////////////////////////////

/**
  * //const [Mapping, SetMapping] = useState([])
  *  async function GetSearchApi(){
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      SetMapping(response?.data?.data)
      console.log(response);
      return response
    } catch (error) {
      
    }
  } 
  */
//////////////////FROM USING FORMIK /////////////////
/**
 *
 * 
 *  const [searchResults, setSearchResults] = useState([]);


  async function SubmitForm(values) {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?title=${values.title}`
      );
      console.log(response?.data?.data);
      setSearchResults(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: SubmitForm,
  });
      <form
        onSubmit={formik.handleSubmit}
        className="container py-5 d-flex justify-content-center"
      >
        <div className="w-100">
          <div className="mb-3">
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              className="form-control fw-bold"
              placeholder="Searching for...."
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn bg-main w-25 text-white fw-bolder"
            >
              Search
            </button>
          </div>
        </div>
      </form>

          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        
      
      <div></div>
 */

/**FORM 
 * 
 *       <form
        onSubmit={formik.handleSubmit}
      className="container py-5 d-flex justify-content-center">
        <div className="w-100">
          <div className="mb-3">
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              className="form-control fw-bold"
              placeholder="Searching for...."
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              
              className="btn bg-main w-25 text-white fw-bolder"
            >
              Search
            </button>
          </div>
        </div>
      </form>
 */

/**
 * second choice 
 * 
 * import axios from "axios";
import { useQuery } from "react-query";
import Style from "./FeaturedProducts.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";
import { WishList } from "../../Context/WishListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FeaturedProducts() {
  let { AddToOCart } = useContext(CartContext);
  const { AddProductToWishlistAPI } = useContext(WishList);
  const [favoriteProducts, setFavoriteProducts] = useState({});
  const [toggledProducts, setToggledProducts] = useState([]);

  async function Addproduct(productId) {
    let response = await AddToOCart(productId);
    if (response?.data?.status === "success") {
      toast.success("Item added successfully", {
        duration: 2000,
      });
    } else {
      toast.error("Error adding product: ");
    }
  }

  async function GetFeaturedProducts() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  const { isLoading, data } = useQuery(
    "FeaturedProducts",
    GetFeaturedProducts,
    {
      cacheTime: 10000,
      staleTime: 120000,
    }
  );

  async function toggleFavorite(productId) {
    // Check if the product has already been toggled
    if (toggledProducts.includes(productId)) {
      return;
    }

    try {
      const response = await AddProductToWishlistAPI(productId);

      setFavoriteProducts((prev) => ({
        ...prev,
        [productId]: true,
      }));

      setToggledProducts((prev) => [...prev, productId]);

      toast.success("Item added to wish list", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("Error adding product: ");
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  return (
    <main>
      {isLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5 ">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div className="container py-2 pt-5 ">
          <div className="row">
            {data?.data?.data?.map((product) => (
              <div
                key={product.id}
                className={`col-md-3 py-3 px-2 cursor-pointer scale-25 ${Style.card}`}
              >
                <Link
                  to={`/FeaturedDetails/${product.id}`}
                  className="text-decoration-none"
                >
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-100"
                  />
                  <span className="text-main font-sm fw-bolder">
                    {product.category.name}
                  </span>
                  <h2 className="h6">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h2>
                  <div className="d-flex justify-content-between mt-3">
                    <span>{product.price} EGP</span>
                    <span>
                      <i className="fas fa-star rating-color md-2"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>

                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => Addproduct(product.id)}
                    className="btn bg-main text-white w-75 btn-sm"
                  >
                    Add Item
                  </button>

                  <div onClick={() => toggleFavorite(product.id)} className="">
                    {favoriteProducts[product.id] ? (
                      <FaHeart color="red" size="2em" />
                    ) : (
                      <FaRegHeart color="black" size="2em" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

 * 
 */

/**
 * 
 * import axios from "axios";
import { useQuery } from "react-query";
import Style from "./FeaturedProducts.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";
import { WishList } from "../../Context/WishListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FeaturedProducts() {
  let { AddToOCart } = useContext(CartContext);
  const { AddProductToWishlistAPI } = useContext(WishList);
  const [favoriteProducts, setFavoriteProducts] = useState({});

  async function Addproduct(productId) {
    let response = await AddToOCart(productId);
    if (response?.data?.status === "success") {
      toast.success("Item added successfully", {
        duration: 2000,
      });
    } else {
      toast.error("Error adding product: ");
    }
  }

  async function GetFeaturedProducts() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  const { isLoading, data } = useQuery(
    "FeaturedProducts",
    GetFeaturedProducts,
    {
      cacheTime: 10000,
      staleTime: 120000,
    }
  );

  async function toggleFavorite(productId) {
    try {
      const response = await AddProductToWishlistAPI(productId);

      setFavoriteProducts((prev) => ({
        ...prev,
        [productId]: !prev[productId],
      }));

      toast.success("Item added to wish list", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("Error adding product: ");
      console.log(error);
    }
  }

  useEffect(() => {}, [toggleFavorite]);

  return (
    <main>
      {isLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5 ">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div className="container py-2 pt-5 ">
          <div className="row">
            {data?.data?.data?.map((product) => (
              <div
                key={product.id}
                className={`col-md-3 py-3 px-2 cursor-pointer scale-25 ${Style.card}`}
              >
                <Link
                  to={`/FeaturedDetails/${product.id}`}
                  className="text-decoration-none"
                >
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-100"
                  />
                  <span className="text-main font-sm fw-bolder">
                    {product.category.name}
                  </span>
                  <h2 className="h6">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h2>
                  <div className="d-flex justify-content-between mt-3">
                    <span>{product.price} EGP</span>
                    <span>
                      <i className="fas fa-star rating-color md-2"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>

                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => Addproduct(product.id)}
                    className="btn bg-main text-white w-75 btn-sm"
                  >
                    Add Item
                  </button>

                  <div onClick={() => toggleFavorite(product.id)} className="">
                    {favoriteProducts[product.id] ? (
                      <FaHeart color="red" size="2em" />
                    ) : (
                      <FaRegHeart color="black" size="2em" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
 */

/**
 * <div onClick={() => getWishList(product.id)} className="">
                    {HeartIcon ? (
                      <FaHeart color="red" size="2em" />
                    ) : (
                      <FaRegHeart color="black" size="2em" />
                    )}
                  </div>
 */
