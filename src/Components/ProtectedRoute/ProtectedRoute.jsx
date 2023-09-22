import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("UserToken") !== null) {
    console.log("UserToken Fetched");
    return props.children;
  } else {
    console.log("Redirection for protection");
    return <Navigate to={"/Login"} />;
  }
}
