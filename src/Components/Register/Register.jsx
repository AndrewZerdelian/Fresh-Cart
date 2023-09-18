import React from "react";
//import Style from "./Register.module.css";
import { useFormik } from "formik";
import * as YUP from "yup";

export default function Register() {
  function SubmitRegister(values) {
    console.log(values);
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
    <main>
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
          <button
            disabled={!(Form.isValid && Form.dirty)}
            type="submit"
            className="btn btn-primary mb-3"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
