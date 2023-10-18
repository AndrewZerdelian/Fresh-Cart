import axios from "axios";
import React, { createContext } from "react";
import toast from "react-hot-toast";

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
      toast(error.message);
      console.log(error);
    }
  }
  ///////////////////////POST Verify Reset Code////////////////////16/10/2023

  async function POSTVerifyResetCode(resetCode) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        {
          resetCode,
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      toast.error("something went wrong please check your code");
      console.error(error);
    }
  }

  /////////////////////PUT Update Logged user password/////////////////

  async function PUTUpdateLoggedUserPassword(
    headers,
    currentPassword,
    password,
    rePassword
  ) {
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        {
          currentPassword,
          password,
          rePassword,
        },
        {
          headers,
        }
      );

      console.log("logged successfully from Context");

      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ForgetPassword.Provider
      value={{ POSTForgotPassword, POSTVerifyResetCode ,PUTUpdateLoggedUserPassword}}
    >
      {children}
    </ForgetPassword.Provider>
  );
}
