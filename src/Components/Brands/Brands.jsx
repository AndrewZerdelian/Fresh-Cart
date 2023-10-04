import React, { useContext, useEffect, useState } from "react";
import { BrandsContext } from "../../Context/BrandsContext";
import { InfinitySpin } from "react-loader-spinner";
import Styles from "./Brands.module.css";
export default function Brands() {
  const { GetBrandsAPI } = useContext(BrandsContext);
  const [APIMAPPING, setAPIMAPPING] = useState([]);
  const [ISLoading, SetISLoading] = useState(false);

  async function BrandsList() {
    try {
      SetISLoading(true);
      let response = await GetBrandsAPI();
      setAPIMAPPING(response);
      console.log(response);
      SetISLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    BrandsList();
  }, []);

  return (
    <main>
      {ISLoading ? (
        <div className="mx-auto  d-flex justify-content-center align-items-center py-5 ">
          <InfinitySpin width="300" color="#4fa94d" />
        </div>
      ) : (
        <div>
          <div className="text-center text-main pt-5">
            <h1 className="fw-bolder">ALL Brands</h1>
          </div>

          <div className="container">
            <div className="row pt-5">
              {APIMAPPING.data?.data.map((item) => (
                <div
                  key={item._id}
                  className={`col-md-4 d-flex justify-content-center align-items-center shadow p-5 ${Styles.card}`}
                >
                  <div>
                    <img src={item.image} alt={item.name} />

                    <p className="text-center fw-bolder">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/**
 *   return (
    <div>
      {ISLoading? <h1>LOADING...</h1> : <div>
      <h1>ALL Brands{APIMAPPING.status}</h1>
      <div>{APIMAPPING.data?.results}</div></div>}
      <h1>{APIMAPPING.data?.data.map((item) =>(<div key={item._id}>

        <img src={item.image} alt={item.name}/>


        {item.name}
        
        
        </div>))} </h1>
      
    </div>
  );
 */
/**
 *     <h1>ALL Brands{APIMAPPING.status}</h1>
      <div>{APIMAPPING.data.results}</div>
 */
//<h1>all the names {APIMAPPING.data.data.map((item) =>(<div key={item._id}>{item.name}</div>))} </h1>

/**
 * //THE WORKING COPY 
 * 
 * import React, { useContext, useEffect, useState } from "react";
import { BrandsContext } from "../../Context/BrandsContext";

export default function Brands() {
  const { GetBrandsAPI } = useContext(BrandsContext);
  const [APIMAPPING, setAPIMAPPING] = useState([]);

  async function BrandsList() {
    try {
      let { data } = await GetBrandsAPI();
      setAPIMAPPING(data.data);
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

      <h1>all the names {APIMAPPING.map((item) =>(<div key={item._id}>{item.name}</div>))} </h1>
    </div>
  );
}

 
 */

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
