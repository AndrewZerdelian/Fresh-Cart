import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";

//import Style from "./CategorySlider.module.css";

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
  };

  function GetCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let { data, isLoading, isError } = useQuery(
    "CategorySlider", // Rename the query key
    GetCategories // Use the function that fetches data
  );
  //console.log(data?.data.data);

  return (
    <div className="container pb-5">
      {data?.data?.data ? (
        <Slider {...settings}>
          {data?.data?.data?.map((category) => (
            <div key={category._id} className="container py-5">
              <img
                src={category.image}
                className="w-100 "
                height={250}
                alt="cat"
              />
            </div>
          ))}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
}
