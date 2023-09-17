import React from "react";
//import Style from "./Register.module.css";
import { useFormik } from "formik";

export default function Register() {
  function SubmitRegister(values) {
    console.log(values);
  }

  const Form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },

    onSubmit: SubmitRegister,
  });

  return (
    <form onSubmit={Form.handleSubmit} className="w-25 mx-auto mt-5">
      <div class="mb-3">
        <input
          value={Form.values.name}
          onBlur={Form.handleBlur}
          name="name"
          onChange={Form.handleChange}
          type="name"
          class="form-control"
          placeholder="Name"
        />
      </div>

      <div class="mb-3">
        <input
          value={Form.values.email}
          onBlur={Form.handleBlur}
          name="email"
          onChange={Form.handleChange}
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <input
          value={Form.values.phone}
          onBlur={Form.handleBlur}
          name="phone"
          onChange={Form.handleChange}
          type="phone"
          class="form-control"
          placeholder="010123456789"
        />
      </div>

      <div class="mb-3">
        <input
          value={Form.values.password}
          onBlur={Form.handleBlur}
          name="password"
          onChange={Form.handleChange}
          type="password"
          class="form-control"
          placeholder="password"
        />
      </div>

      <div class="mb-3">
        <input
          value={Form.values.rePassword}
          onBlur={Form.handleBlur}
          name="rePassword"
          onChange={Form.handleChange}
          type="password"
          class="form-control"
          placeholder="ReWrite Password"
        />
      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </form>
  );
}
