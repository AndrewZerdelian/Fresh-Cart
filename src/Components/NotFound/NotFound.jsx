import React from "react";
import Style from "./NotFound.module.css";
import Erorr from "../../Assets/ERORR404.PNG";

export default function NotFound() {
  return (
    <div>
      <h2>
        OH NO! <br /> it look like the page that you are looking for is NotFound
      </h2>
      <img src={Erorr} alt="erorr" className="w-100" />
    </div>
  );
}
