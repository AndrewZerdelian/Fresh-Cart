import React, { useContext } from "react";
import { ForgetPassword } from "../../Context/ForgotPasswordContext";
import { useFormik } from "formik";

export default function UpdateLoggedUserPassword() {
  const { PUTUpdateLoggedUserPassword } = useContext(ForgetPassword);

  async function ResettingPassword() {
    try {
      const { data } = await PUTUpdateLoggedUserPassword();

      console.log(data);
    } catch (error) {}

    const PasFormik = useFormik({
      // <================
      initialValues: {
        currentPassword: "",
        password: "",
        rePassword: "",
      },

      onSubmit: ResettingPassword,
    });
  }
  return (
    <main>
      <h2 className="text-center fw-bolder pt-5 text-main">
        Setting new password
      </h2>
      <form onSubmit={PasFormik} className="w-50 mx-auto mt-5">
        <div className="mb-3">
          <input
            id="currentPassword"
            name="currentPassword"
            type="password"
            className="form-control"
            placeholder="currentPassword"
          />
        </div>
        <div className="mb-3">
          <input
            //value={ResetFormik.values.resetCode}
            //onChange={ResetFormik.handleChange}
            id="resetCode"
            name="resetCode"
            type="text"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="mb-3">
          <input
            //value={ResetFormik.values.resetCode}
            //onChange={ResetFormik.handleChange}
            id="resetCode"
            name="resetCode"
            type="text"
            className="form-control"
            placeholder="rePassword"
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
