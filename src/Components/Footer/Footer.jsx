import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  function Confirm () {
    console.log("just don't there is no use for this xD ");
  }
  return (
    <main className={`bg-light pt-4 //${Style.footer}`}>
      <div className="container">
        <h6 className="h1 fw-bolder text-main">Fresh Cart</h6>
        <p className="h3 fw-bolder ">Get in touch with us </p>
      
      <div>
        <label htmlFor="exampleInputEmail1" className=" px-2 form-label fw-bolder">
          Email address
        </label>
        <div className="mb-3 d-flex">
          <input
            type="email"
            className="form-control w-50"
            aria-describedby="emailHelp"
          />
          <button onClick={Confirm} className="btn bg-main w-25 mx-5 fw-bolder text-white">Confirm</button>
        </div>
      </div>
      </div>
    </main>
  );
}
