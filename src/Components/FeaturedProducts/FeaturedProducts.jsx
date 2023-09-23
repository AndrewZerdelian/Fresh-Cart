import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
//import Style from "./FeaturedProducts.module.css";
import { InfinitySpin } from "react-loader-spinner";

export default function FeaturedProducts() {
  function GetFeaturedProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  const { isLoading, isError, data, isFetching, refetch } = useQuery(
    "FeaturedProducts",
    GetFeaturedProducts,
    {
      cacheTime: 10000, // Cache time for 10 seconds
      staleTime: 120000, // refresh data every 120 seconds
      //refetchInterval:3000 // for multiple refreshes
    }
  );
  console.log(isLoading, "am Loading the Data");
  console.log(isFetching, "am fetching data");
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
    console.log(data);
    setIsLoading(false);
  }

  useEffect(() => {
    GetFeaturedProducts();
  }, []);

 * 
 */

  return (
    <main>
      {isLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div className="container py-2">
          <div className="row">
            {data?.data.data.map((products) => (
              <div
                key={products.id}
                className="col-md-2 py-3 px-2 cursor-pointer"
              >
                <img
                  src={products.imageCover}
                  alt={products.title}
                  className="w-100"
                />
                <span className="text-main font-sm fw-bolder">
                  {products.category.name}
                </span>
                <h2 className="h6">
                  {products.title.split(" ").slice(0, 2).join(" ")}
                </h2>
                <div className="d-flex justify-content-between mt-3">
                  <span>{products.price} EGP </span>
                  <span>
                    <i className="fas fa-star rating-color md-2"></i>
                    {products.ratingsAverage}
                  </span>
                </div>
                <button className="btn bg-main text-white w-100 btn-sm">
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
