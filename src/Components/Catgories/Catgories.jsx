import React, { useContext, useEffect, useState } from "react";
import { CatContext } from "../../Context/CategoriesContext";

export default function Catgories() {
  const { GetCategoriesList } = useContext(CatContext);
  let [Categories, setCategories] = useState([]);
  const [Testing, SetTesting] = useState([]);

  async function CatList() {
    const { data } = await GetCategoriesList();
    try {
      SetTesting(data.data);
      setCategories(data.data.length);
      console.log(data.data);
    } catch (error) {
      console.error("we cough an error");
    }
  }

  useEffect(() => {
    CatList();
  }, []);

  return (
    <main>
      number of Items is {Categories}
      {Testing.map((x) => (
        <div key={x._id}>{x.name}</div>
      ))}
    </main>
  );
}
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
