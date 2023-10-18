import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { ForgetPassword } from "../../Context/ForgotPasswordContext";
//import Style from "./ForgotPassword.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { POSTForgotPassword } = useContext(ForgetPassword);
  const Navigate = useNavigate()
  const FogetPaswordFormik = useFormik({
    initialValues: {
      email: " ",
    },
    onSubmit(values) {
      async function activatingSubmit() {
        try {
          const response = await POSTForgotPassword(values);

          toast.success(response.data.message);
          Navigate("/ResetCode");
          console.log(response.data.message);
        } catch (error) {
          toast.error("something went wrong please check your Email info");
        }
      }
      activatingSubmit();
    },
  });

  return (
    <main>
      <h2 className="text-center fw-bolder pt-5 text-main">Password Reset</h2>
      <form
        onSubmit={FogetPaswordFormik.handleSubmit}
        typeof="submit"
        className="w-50 mx-auto mt-5"
      >
        <div className="mb-3">
          <input
            value={FogetPaswordFormik.values.email}
            onChange={FogetPaswordFormik.handleChange}
            name="email"
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary mb-3 align-items-center w-50 "
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
/**
 * onSubmit(value) {
      async function activatingSubmit() {
        try {
          const response = await POSTForgotPassword(value);
          //SetNotification(response);
          console.log(response);
          
        } catch (error) {
          console.error(error);
        }
      }
      activatingSubmit();
    },
 */
/**
     * try {
          await POSTForgotPassword(value)
          SetNotification(POSTForgotPassword)
          //console.log(value);
          //toast.success("Reset code sent to your email")
        } catch (error) {
          //console.log(error);
          //toast.error("There is no user registered with this email address")
        }
     */

/**
     *     onSubmit: function (value) {
      console.log("submit", value);
    },
     */
