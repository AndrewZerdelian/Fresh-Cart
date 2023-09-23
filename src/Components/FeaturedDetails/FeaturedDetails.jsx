import axios from "axios";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";

export default function FeaturedDetails() {
  let params = useParams();
  function GetFeaturedDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data } = useQuery("productDetails", () =>
    GetFeaturedDetails(params.id)
  );
  

  return (
    <main className="">
      <div>
        {data.data.data ? (
          <div className="row py-2 align-items-center">
            <div className="col-md-4 ">
              <img
                src={data.data.data.imageCover}
                alt={data.data.data.title}
                className="w-100"
              />
            </div>
            <div className="col-md-8">
              <h2 className="h5">{data.data.data.title}</h2>
              <p>{data.data.data.description}</p>
              <h6 className="text-main">{data.data.data.category.name}</h6>
              <h6 className="text-main">Price: {data.data.data.price} EGP </h6>
              <div className="d-flex justify-content-between">
                <span> RatingsQuantity :{data.data.data.ratingsQuantity}</span>
                <span>
                  <i className="fas fa-star rating-color"></i>
                  {data.data.data.ratingAverage}
                </span>
              </div>
              <button className="btn bg-main text-white w-100 mt-2 ">
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mx-auto  d-flex justify-content-center align-items-center py-5">
              <InfinitySpin width="300" color="#4fa94d" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
