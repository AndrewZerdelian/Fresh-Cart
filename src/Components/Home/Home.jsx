import React from "react";
//import Style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import SearchBar from "../SearchBar/SearchBar";
export default function Home() {
  return (
    <div>
      <MainSlider />
      <CategorySlider />
      <SearchBar/>
      <FeaturedProducts />
    </div>
  );
}
