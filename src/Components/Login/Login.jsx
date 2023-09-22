import React, { useState } from "react";
import { useFormik } from "formik";
import * as YUP from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext";

export default function Register() {
  let navigate = useNavigate();

  const [Error, setError] = useState(null);

  const [IsLoading, setIsLoading] = useState(false);
  let { setUserToken } = useContext(userContext);
  async function SubmitLogin(value) {
    setIsLoading(true);
    const { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, value)
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        //console.log(err.response.data.message)
      });

    if (data.message === "success") {
      setIsLoading(false);
      localStorage.setItem("UserToken", data.token);
      setUserToken(data.token);
      navigate("/Home");
    }
  }

  const PasswordRequirment = /^(?=.*[A-Z])(?=.*[@#$%^&*])(?=.*[0-9])/;

  const validationSchema = YUP.object({
    email: YUP.string()
      .email(`Email is required`)
      .required(`Email is required`),

    password: YUP.string().matches(
      PasswordRequirment,
      `Password must includes Capital letter, Number,and a Symbol`
    ),
  });

  const Form = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    validationSchema,

    onSubmit: SubmitLogin,
  });
  // {Form.errors.name && Form.touched.name ? <div className="alert p-2 mt-2 alert-danger">{Form.errors.name}</div>: "" }
  //{Form.errors.name && Form.touched.name && <div className="alert p-2 mt-2 alert-danger">{Form.errors.name}</div>}

  return (
    <main className="w-75 mx-auto py-4">
      <h2 className="mx-auto">LOGIN FORM </h2>
      {Error ? (
        <div className="alert p-2 mt-2 alert-danger w-75 mx-auto">{Error}</div>
      ) : (
        ""
      )}
      <form onSubmit={Form.handleSubmit} className="w-25 mx-auto mt-5">
        <div className="mb-3">
          <input
            value={Form.values.email}
            onBlur={Form.handleBlur}
            name="email"
            onChange={Form.handleChange}
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          {Form.errors.email && Form.touched.email ? (
            <div className="alert p-2 mt-2 alert-danger">
              {Form.errors.email}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="mb-3">
          <input
            value={Form.values.password}
            onBlur={Form.handleBlur}
            name="password"
            onChange={Form.handleChange}
            type="password"
            className="form-control"
            placeholder="password"
          />
          {Form.errors.password && Form.touched.password ? (
            <div className="alert p-2 mt-2 alert-danger">
              {Form.errors.password}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="col-auto">
          {IsLoading ? (
            <button disabled={!(Form.isValid && Form.dirty)} type="button">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </button>
          ) : (
            <button
              disabled={!(Form.isValid && Form.dirty)}
              type="submit"
              className="btn btn-primary mb-3"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

/**
 *   async function SubmitRegister(values) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
  
      if (data.message === "success") {
        navigate("/login");
      } else {
        
      }
  
      console.log(values);
    } catch (err) {
      console.error(err);
    }
  }
 */
