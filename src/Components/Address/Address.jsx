import { useFormik } from "formik";
import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export default function Address() {
  let { POSTCheckoutSession,CartID } = useContext(CartContext);

  async function handleAdressSubmit(values) {
    try {
      const response = await POSTCheckoutSession(
        CartID,
        "http://localhost:3000",
        values
      );
      window.location.href = response?.data.session.url;

      console.log(response.data.session);
    } catch (error) {
      console.log(error);
    }
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handleAdressSubmit,
  });
  // const response = await POSTCheckoutSession("65212ed67aa5335f22971d72","http://localhost:3000",values);
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">Details:</label>
        <input
          value={formik.values.details}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="form-control md-2"
          name="details"
          id="details"
        ></input>

        <label htmlFor="details">phone:</label>
        <input
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="tel"
          className="form-control md-2"
          name="phone"
          id="phone"
        ></input>

        <label htmlFor="details">city:</label>
        <input
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="form-control md-2"
          name="city"
          id="city"
        ></input>
        <button type="submit" className="btn text-white bg-main fw-bold ">
          Submit Info
        </button>
      </form>
    </div>
  );
}

/**
 * import React from "react";
import Style from "./Address.module.css";
import { Formik, useFormik } from "formik";

export default function Address() {
  function HandleSubmit(value) {
    console.log(value);
  }
  const FORMIK = useFormik({
    initialValues: {
      details: "",
      phone: "01010700999",
      city: "Cairo",
    },

    onSubmit: HandleSubmit,
  });

  return (
    <main className="container pt-5">
      <div>
        <form onSubmit={Formik.HandleSubmit}>
          <div className="mb-3">
            <label html="exampleFormControlInput1" className="form-label">
              details
            </label>
            <input
              onBlur={FORMIK.handleBlur}
              value={FORMIK.values.details}
              onChange={FORMIK.handleChange}
              type="text"
              className="form-control"
              id="details"
              placeholder="details"
            />
          </div>

          <div className="mb-3">
            <label html="exampleFormControlInput1" className="form-label">
              Phone Number
            </label>
            <input
              onBlur={FORMIK.handleBlur}
              value={FORMIK.values.phone}
              onChange={FORMIK.handleChange}
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-3">
            <label
              placeholder="exampleFormControlTextarea1"
              className="form-label"
            >
              Full Address
            </label>
            <textarea
              onBlur={FORMIK.handleBlur}
              value={FORMIK.values.city}
              onChange={FORMIK.handleChange}
              className="form-control"
              id="city"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn bg-main text-white fw-bold w-25">
            Submit Info
          </button>
        </form>
      </div>
    </main>
  );
}

 */
