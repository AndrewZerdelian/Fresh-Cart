import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
//import Style from "./CategorySlider.module.css";

export default function CategorySlider() {
  function GetCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let { data } = useQuery(
    "CategorySliderData", // Rename the query key
    GetCategories // Use the function that fetches data
  );

  return <div>CategorySlider</div>;
}
