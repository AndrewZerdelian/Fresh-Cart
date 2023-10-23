import React, { useContext } from "react";
import { ForgetPassword } from "../../Context/ForgotPasswordContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function UpdateLoggedUserPassword() {
  let { PUTUpdateLoggedUserPassword } = useContext(ForgetPassword);
  //let { setUserToken } = useContext(userContext);
  let Navigate = useNavigate();
  async function ResetPassword(value) {
    try {
      const response = await PUTUpdateLoggedUserPassword(
        value.currentPassword,
        value.password,
        value.rePassword
      );
      //localStorage.setItem("UserToken", response);
      //setUserToken(response);
      console.log(response);
      localStorage.removeItem("UserToken", response);
      Navigate("/login");
      
    } catch (error) {
      console.error(error);
    }
  }

  let passwordformik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },

    onSubmit: ResetPassword,
  });
  return (
    <main className="container pt-5">
      <h2 className="text-center fw-bolder pt-5 text-main">
        Updating password
      </h2>
      <form onSubmit={passwordformik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            currentPassword
          </label>

          <input
            value={passwordformik.values.currentPassword}
            onChange={passwordformik.handleChange}
            id="currentPassword"
            name="currentPassword"
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New password
          </label>
          <input
            value={passwordformik.values.password}
            onChange={passwordformik.handleChange}
            id="password"
            name="password"
            type="password"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            rePassword
          </label>
          <input
            value={passwordformik.values.rePassword}
            onChange={passwordformik.handleChange}
            id="rePassword"
            name="rePassword"
            type="password"
            className="form-control"
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

