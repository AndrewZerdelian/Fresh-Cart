import axios from "axios";
import React, { createContext } from "react";

export const ForgetPassword = createContext();

export default function ForgotPasswordContextProvider({children}) {
  async function POSTForgotPassword(email) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,email);
      //console.log("forget password was activated");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ForgetPassword.Provider value={{ POSTForgotPassword }}>
      {children}
    </ForgetPassword.Provider>
  );
}
