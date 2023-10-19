import React, { useContext, useEffect, useState } from "react";
//import Style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import SearchBar from "../SearchBar/SearchBar";
import { CartContext } from "../CartContext/CartContext";
export default function Home() {
  /**
   * a bug that i am trying to fix witch i have to refresh on homepage every time login
   * due to the fetching is happing from the login page and it cant reach anything
   * then it stops working...
   */

  let { getLoggedUserCart } = useContext(CartContext);
  async function refetchingData() {
    try {
      const response = await getLoggedUserCart();
      console.log(response);
      if (response === undefined) {
        window.location.reload();
      } else {
      }
      return response;
    } catch (error) {}
  }
  useEffect(() => {
    refetchingData();
  }, []);

  return (
    <div>
      <MainSlider />
      <CategorySlider />
      <SearchBar />
      <FeaturedProducts />
    </div>
  );
}
