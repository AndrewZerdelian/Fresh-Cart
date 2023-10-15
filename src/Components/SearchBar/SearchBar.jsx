import { useFormik } from "formik";
import React from "react";

export default function SearchBar() {
  const Formik = useFormik;

  return (
    <main className="container py-5 d-flex justify-content-center">
      <div className="w-100">
        <div className="mb-3">
          <input
            type="text"
            className="form-control fw-bold"
            id=""
            placeholder="Searching for...."
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn bg-main w-25 text-white fw-bolder">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
