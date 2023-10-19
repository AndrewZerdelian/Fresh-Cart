import { useFormik } from "formik";
import React, { useContext } from "react";
import { ForgetPassword } from "../../Context/ForgotPasswordContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
  const { POSTVerifyResetCode } = useContext(ForgetPassword);
  const Navigate = useNavigate();
  //////////workings////////
  async function SubmitingValue(value) {
    try {
      const response = await POSTVerifyResetCode(value.resetCode); // have to be the same as the initial value
      if (response.data.status === "Success") {
        toast.success(response?.data?.status);
        Navigate("/UpdateLoggedUserPassword");  
      }

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const ResetFormik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: SubmitingValue,

    /**
   *       ////////////second way //////////
    onSubmit: (values) => {
        try {
          const response = POSTVerifyResetCode(values.resetCode)
          console.log(response);
          
        } catch (error) {
          console.error(error);
        }
      }

   */
  });
  return (
    <main>
      <h2 className="text-center fw-bolder pt-5 text-main">Confirm Code</h2>
      <form onSubmit={ResetFormik.handleSubmit} className="w-50 mx-auto mt-5">
        <div className="mb-3">
          <input
            value={ResetFormik.values.resetCode}
            onChange={ResetFormik.handleChange}
            id="resetCode"
            name="resetCode"
            type="text"
            className="form-control"
            placeholder="Reset Code here..."
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
