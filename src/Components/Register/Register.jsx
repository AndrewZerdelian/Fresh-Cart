import React, { useState } from "react";
//import Style from "./Register.module.css";
import { useFormik } from "formik";
import * as YUP from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
export default function Register() {
  let navigate = useNavigate();

  const [Error, setError] = useState(null);

  const [IsLoading, setIsLoading] = useState(false);

  async function SubmitRegister(value) {
    setIsLoading(true);
    const { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, value)
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        //console.log(err.response.data.message)
      });

    if (data.message === "success") {
      navigate("/login");
    }
  }

  const EgyptianPhoneNumberRegex = /^(010|011|012|015)[0-9]{8}$/;

  const PasswordRequirment = /^(?=.*[A-Z])(?=.*[@#$%^&*])(?=.*[0-9])/;

  const validationSchema = YUP.object({
    name: YUP.string()
      .min(3, "minimum lenth is 3")
      .max(16, "maximum lenth is 16")
      .required("name is requierd"),
    email: YUP.string()
      .email(`Email is required`)
      .required(`Email is required`),
    phone: YUP.string().matches(EgyptianPhoneNumberRegex, `Phone is required`),
    password: YUP.string().matches(
      PasswordRequirment,
      `Password must includes Capital letter, Number,and a Symbol`
    ),
    rePassword: YUP.string()
      .oneOf([YUP.ref("password")], "password must be Mached")
      .required(`password is not matched`),
  });

  const Form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,

    onSubmit: SubmitRegister,
  });
  // {Form.errors.name && Form.touched.name ? <div className="alert p-2 mt-2 alert-danger">{Form.errors.name}</div>: "" }
  //{Form.errors.name && Form.touched.name && <div className="alert p-2 mt-2 alert-danger">{Form.errors.name}</div>}

  return (
    <main className="w-75 mx-auto py-4">
      <h2 className="mx-auto">REGISTERATION FORM </h2>
      {Error ? (
        <div className="alert p-2 mt-2 alert-danger w-75 mx-auto">{Error}</div>
      ) : (
        ""
      )}
      <form onSubmit={Form.handleSubmit} className="w-25 mx-auto mt-5">
        <div className="mb-3">
          <input
            value={Form.values.name}
            onBlur={Form.handleBlur}
            name="name"
            onChange={Form.handleChange}
            type="name"
            className="form-control"
            placeholder="Name"
          />
          {Form.errors.name && Form.touched.name ? (
            <div className="alert p-2 mt-2 alert-danger">
              {Form.errors.name}
            </div>
          ) : (
            ""
          )}
        </div>

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
            value={Form.values.phone}
            onBlur={Form.handleBlur}
            name="phone"
            onChange={Form.handleChange}
            type="phone"
            className="form-control"
            placeholder="010123456789"
          />
          {Form.errors.phone && Form.touched.phone ? (
            <div className="alert p-2 mt-2 alert-danger">
              {Form.errors.phone}
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

        <div className="mb-3">
          <input
            value={Form.values.rePassword}
            onBlur={Form.handleBlur}
            name="rePassword"
            onChange={Form.handleChange}
            type="password"
            className="form-control"
            placeholder="ReWrite Password"
          />
          {Form.errors.rePassword && Form.touched.rePassword ? (
            <div className="alert p-2 mt-2 alert-danger">
              {Form.errors.rePassword}
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
