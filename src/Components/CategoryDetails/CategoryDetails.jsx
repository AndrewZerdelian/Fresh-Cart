import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatContext } from "../../Context/CategoriesContext";

export default function CategoryDetails() {
  const { _id } = useParams();
  console.log(_id);
  const { GetSpecificCategory } = useContext(CatContext);
  const [CategoriesList, setCategoriesList] = useState([]);

  async function SpecificCategoryList(_id) {
    try {
      const response = await GetSpecificCategory(_id);
      setCategoriesList(response);
      console.log("i got called in CategoryDetails");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SpecificCategoryList(_id);
  }, []);
  return (
    <main>
      <div>
        <h1 className="text-center fw-bolder text-main p-5">CategoryDetails</h1>

        <div className="container shadow">
        <div className="row align-items-center ">
        <div className="col-md-4">
          <img src={CategoriesList?.data?.data?.image} alt={CategoriesList?.data?.data?.name} className="container "/>
        </div>
        <div className="col-md-8 ">
        <p className="fw-bolder h3"> Category: <span className="fw-bolder  text-main" >{CategoriesList?.data?.data?.name}</span></p>
        <p className="fw-bolder h3 pt-2"> From Section: <span className="fw-bolder  text-main">{CategoriesList?.data?.data?.slug}</span></p>
        </div>
        </div>

        </div>
      
      </div>
    </main>
  );
}

/**
 * import React, { useContext, useEffect, useState } from "react";
//import Style from "./CategoryDetails.module.css";
import { CatContext } from "../../Context/CategoriesContext";
import { useParams } from "react-router-dom";

export default function CategoryDetails() {
  const { GetSpecificCategory } = useContext(CatContext);
  const [CategoriesList, setCategoriesList] = useState([]);
  
  useParams(`_id`)
  async function SpecificCategoryList(CategorieID) {
    try {
      const response = await GetSpecificCategory(CategorieID);
      setCategoriesList(response);
      console.log(response + "Logged FROM CATEGORY DETAILS Successfully");
    } catch (error) {
      console.log(error + "Failed to load from Category Details ");
    }
  }

  useEffect(()=> {
    SpecificCategoryList()
  },[])
  return <div>CategoryDetailssss</div>;
}

 */
