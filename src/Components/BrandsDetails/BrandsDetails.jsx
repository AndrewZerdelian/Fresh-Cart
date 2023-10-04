import React, { useContext, useEffect, useState } from "react";
//import Style from "./BrandsDetails.module.css";
import { useParams } from "react-router-dom";
import { BrandsContext } from "../../Context/BrandsContext";

export default function BrandsDetails() {
  const { _id } = useParams();
  const { GetSpecificBrand } = useContext(BrandsContext);
  const [GetBrandDetails, setGetBrandDetails] = useState([]);

  async function BrandsInsideDetails(_id) {
    try {
      const response = await GetSpecificBrand(_id);
      setGetBrandDetails(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    BrandsInsideDetails(_id);
  }, []);
  return (
    <main>
      <div>
        <h1 className="text-center fw-bolder text-main p-5">Brands Details</h1>

        <div className="container shadow">
          <div className="row align-items-center ">
            <div className="col-md-4">
              <img
                src={GetBrandDetails?.data?.data?.image}
                alt={GetBrandDetails?.data?.data?.name}
                className="container "
              />
            </div>
            <div className="col-md-8 ">
              <p className="fw-bolder h3">
                {" "}
                Category:{" "}
                <span className="fw-bolder  text-main">
                  {GetBrandDetails?.data?.data?.name}
                </span>
              </p>
              <p className="fw-bolder h3 pt-2">
                {" "}
                From Section:{" "}
                <span className="fw-bolder  text-main">
                  {GetBrandDetails?.data?.data?.slug}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
