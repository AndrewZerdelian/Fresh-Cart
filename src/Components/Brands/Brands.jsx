import React, { useContext, useEffect, useState } from "react";
import { BrandsContext } from "../../Context/BrandsContext";

export default function Brands() {
  const { GetBrandsAPI } = useContext(BrandsContext);
  const [APIMAPPING, setAPIMAPPING] = useState([]);

  async function BrandsList() {
    try {
      let { data } = await GetBrandsAPI();
      setAPIMAPPING(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    BrandsList();
  }, []);

  return (
    <div>
      <h1>ALL Brands {APIMAPPING.results}</h1>
    </div>
  );
}

/**
 * import React, { useContext, useEffect } from "react";
import { BrandsContext } from "../../Context/BrandsContext";
//import Style from "./Brands.module.css";

export default function Brands() {
  const { GetBrandsAPI } = useContext(BrandsContext);

  async function BrandsList() {
    try {
      const { data } = await GetBrandsAPI();
      console.log(data + "btates mn Brands");
      console.log();
      return data;
    } catch (error) {
      console.log(error + "something went wrong inside BrandsPage");
    }
  }

  useEffect(() => {
    BrandsList();
  }, []);
  return (
    <div>
      <h1>ALL Brands</h1>
    </div>
  );
}

 * 
 */
