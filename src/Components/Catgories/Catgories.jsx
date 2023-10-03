import React, { useContext, useEffect, useState } from "react";
import { CatContext } from "../../Context/CategoriesContext";
import Catgoriess from "./Catgories.module.css";

export default function Catgories() {
  const { GetCategoriesList } = useContext(CatContext);
  let [Categories, setCategories] = useState([]);
  //const [Testing, SetTesting] = useState([]);

  async function CatList() {
    try {
      const { data } = await GetCategoriesList();
      // SetTesting(data.data);
      setCategories(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("we cough an error");
    }
  }

  useEffect(() => {
    CatList();
  }, []);

  return (
    <main className="">
      <div className="container pt-5 ">
        <div className="row ">
          {Categories.map((x) => (
            <div
              key={x._id}
              className={` col-md-4 cursor-pointer card  d-flex justify-content-center align-items-center ${Catgoriess.card}`}
            >
              <img src={x.image} className="w-100 h-75" alt={x.name} />
              <h3 className="fw-bolder text-center text-main">{x.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
//className={`${Catgoriess.card} + ${Catgoriess.Scale}`}
//
/**
 *   return (
    <main>
      {Categories.map((x) => (
        <div key={x._id} className="container" >
          <div className="row">
            <img src={x.image} className="col-3" alt={x.name} />
            <h3 className="">{x.name}</h3>
          </div>
        </div>
      ))}
    </main>
  );
 * 
 */

/**
 *  import React, { useContext, useEffect, useState } from "react";
import { CatContext } from "../../Context/CategoriesContext";

export default function Catgories() {
  const { GetCategoriesList } = useContext(CatContext);
  let [Categories, setCategories] = useState([]);

  async function CatList() {
    const response = await GetCategoriesList();
    setCategories(response);

    if (response.status === 200) {
      console.log("Product quantity updated successfully From Catgories.");
    } else {
      console.error("Failed to update product quantity From Catgories.");
    }
    console.log(response);
  }

  useEffect(() => {
    CatList();
  }, []);

  return <main></main>;
}


        {Categories.map((item) => (
        <div key={item.data.data.data._id}>item= {item}</div>
      ))}
 


 */

/**
 * number of Items is {Categories}
      {Testing.map((x) => (
        <div key={x._id}>{x.name}</div>
      ))}
 */
