import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("UserToken") !== null) {
    console.log("ok1");
    return props.children;
  } else {
    console.log("tha navigate ");
    return <Navigate to={"/Login"} />;
  }
}
