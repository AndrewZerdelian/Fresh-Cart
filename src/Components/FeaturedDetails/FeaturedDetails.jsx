import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { CartContext } from "../CartContext/CartContext";

export default function FeaturedDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  let params = useParams();
  function GetFeaturedDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  let { data } = useQuery("productDetails", () =>
    GetFeaturedDetails(params.id)
  );

  ////////////////Add To Cart //////////////////
  const { AddToOCart } = useContext(CartContext);
  const [Add, setAdd] = useState([]);
  async function AddtoCartFromFeaturedDetails(productId) {
    try {
      const { data } = await AddToOCart(productId);
      setAdd(data);
      console.log("Item added to cart");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    
  },[AddtoCartFromFeaturedDetails])

  return (
    <main className=" w-75 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        {data?.data.data ? (
          <div className="row py-2 align-items-center">
            <div className="col-md-4 ">
              <Slider {...settings}>
                {data.data.data.images.map((img, index) => (
                  <div key={index}>
                    <img className="w-100 container" src={img} alt="images" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="col-md-8">
              <h2 className="h5">{data.data.data.title}</h2>
              <p>{data.data.data.description}</p>
              <h6 className="text-main">{data.data.data.brand.name}</h6>
              <h6 className="text-main">{data.data.data.category.name}</h6>
              <h6 className="text-main fw-bold">
                Price: {data.data.data.price} EGP{" "}
              </h6>
              <div className="d-flex justify-content-between">
                <span> RatingsQuantity :{data.data.data.ratingsQuantity}</span>
                <span>
                  <i className="fas fa-star rating-color"></i>
                  {data.data.data.ratingsAverage}
                </span>
              </div>
              <button
              onClick={() => AddtoCartFromFeaturedDetails(data?.data?.data?._id)}
              className="btn bg-main text-white w-100 mt-2 ">
                
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

/**
 *             <img
                src={data.data.data.imageCover}
                alt={data.data.data.title}
                className="w-75 container"
              />
 */
