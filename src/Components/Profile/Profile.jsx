import jwtDecode from "jwt-decode";
import React from "react";
// import Style from "./Profile.module.css";

export default function Profile() {
   let EnCodedToken = localStorage.getItem("UserToken");
   let DeCodedToken = jwtDecode(EnCodedToken);
  //
  return (
    <div>
      <h3>Hello {DeCodedToken.name} </h3>
    </div>
  );
}
