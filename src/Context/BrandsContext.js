import axios from "axios";
import { createContext } from "react";

export let BrandsContext = createContext();
const BaseURL = `https://ecommerce.routemisr.com`;
const BrandsEndPoint = `/api/v1/brands`;
export default function BrandsContextProvider({ children }) {
  async function GetBrandsAPI() {
    try {
      const response = await axios.get(BaseURL + BrandsEndPoint);
      console.log(response);
      //console.log("i got called from BrandsContext");
      return response;
    } catch (error) {
      console.error(error + "something went wrong in BrandsContext ");
    }
  }
  async function GetSpecificBrand(_id) {
      try {
        const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${_id}`)
        console.log(response+"response from BrandsContext Details ");
        return response;
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <BrandsContext.Provider value={{ GetBrandsAPI , GetSpecificBrand }}>
      {children}
    </BrandsContext.Provider>
  );
}

/**
 * import axios from "axios";
import { createContext } from "react";

export let BrandsContext = createContext();
const BaseURL = `https://ecommerce.routemisr.com`;
const BrandsEndPoint = `/api/v1/brands`;
export default function BrandsContextProvider({ Children }) {
  async function GetBrandsAPI() {
    try {
      const response = await axios.get(BaseURL + BrandsEndPoint);
      console.log(response);

      return response;
    } catch (error) {
      console.error(error + "something went wrong inside BrandsContext");
    }
  }
  return (
    <BrandsContext.Provider value={{ GetBrandsAPI }}>
      {Children}
    </BrandsContext.Provider>
  );
}

 */
