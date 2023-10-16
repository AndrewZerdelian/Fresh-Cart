import axios from "axios";
import React, { createContext } from "react";

export const ForgetPassword = createContext();

export default function ForgotPasswordContextProvider({ children }) {
  async function POSTForgotPassword(email) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        email
      );
      //console.log("forget password was activated");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  ///////////////////////POST Verify Reset Code////////////////////16/10/2023

  async function POSTVerifyResetCode(resetCode) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        {
          resetCode,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ForgetPassword.Provider
      value={{ POSTForgotPassword, POSTVerifyResetCode }}
    >
      {children}
    </ForgetPassword.Provider>
  );
}
