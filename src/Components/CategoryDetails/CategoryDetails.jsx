import React, { useContext, useEffect, useState } from "react";
//import Style from "./CategoryDetails.module.css";
import { CatContext } from "../../Context/CategoriesContext";

export default function CategoryDetails() {
  const { GetSpecificCategory } = useContext(CatContext);
  const [CategoriesList, setCategoriesList] = useState([]);

  async function SpecificCategoryList(CategorieID) {
    try {
      const response = await GetSpecificCategory(CategorieID);
      setCategoriesList(response);
      console.log(response + "Logged FROM CATEGORY DETAILS SUCCESFULLY");
    } catch (error) {
      console.log(error + "faild to load from Category Details ");
    }
  }

  useEffect(()=> {
    SpecificCategoryList()
  },[])
  return <div>CategoryDetailssss</div>;
}
