import React, { useContext, useEffect, useState } from "react";
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

  return <main>
  
  </main>;
}

/**
 * 
 *        {Categories.map((item) => (
        <div key={item.data.data.data._id}>item= {item}</div>
      ))}


      
 *    try {
      const response = await GetCategoriesList();
      setCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
 */
/**
 *      {Categories.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
 */
/**      {Categories.map((item) => (
        <div key={item.data.data.data._id}>item= {item}</div>
      ))} */
/**
 *         {Categories.map((item) => (
        <div key={item.data.data.data._id}>item= {item}</div>
      ))}
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
