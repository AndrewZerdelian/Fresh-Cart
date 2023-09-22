import React, { useContext, useEffect } from "react";
import Style from "./Layout.module.css";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { userContext } from "../../Context/UserContext";

export default function Layout() {
  let { setUserToken } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem("UserToken") !== null) {
      setUserToken(localStorage.getItem("UserToken"));
    } else {
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
