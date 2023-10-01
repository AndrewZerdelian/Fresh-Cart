import React, { useContext } from "react";
import { CatContext } from "../../Context/CategoriesContext";
//import Style from "./Catgories.module.css";

export default function Catgories() {
  const { GetCategoriesList } = useContext(CatContext);

  return <main>Content we btates </main>;
}
