import axios from "axios";
//import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
//import Style from "./FeaturedProducts.module.css";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import toast from "react-hot-toast";

export default function FeaturedProducts() {
  let { AddToOCart } = useContext(CartContext);

  async function Addproduct(productId) {
    let response = await AddToOCart(productId);
    if (response.data.status === "success") {
      toast.success("Item added successfully", {
        duration: 5000,
      });
    } else {
      toast.error("Error adding product: ");
    }
    //console.log(response); // betbain el product
  }

  function GetFeaturedProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
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

  //console.log(data?.data.data.product);

  return (
    <main>
      {isLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div className="container py-2 ">
          <div className="row">
            {data.data.data.map((product) => (
              <div
                key={product.id}
                className="col-md-2 py-3 px-2 cursor-pointer scale-25"
              >
                <Link to={`/FeaturedDetails/${product.id}`} className="">
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

                <button
                  onClick={() => Addproduct(product.id)}
                  className="btn bg-main text-white w-100 btn-sm"
                >
                  Add Item
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

/**
 * 
 * const [Products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  async function GetFeaturedProducts() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data);
    
    setIsLoading(false);
  }

  useEffect(() => {
    GetFeaturedProducts();
  }, []);

 * 
 */
