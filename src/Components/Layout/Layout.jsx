import React, { useContext, useEffect } from "react";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
import { Offline, Online } from "react-detect-offline";
import CatgoriesContextprovider from "../../Context/CategoriesContext";

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
      <Offline>
        <h2>
          you are currently offline <br /> Check your internet connection
        </h2>
      </Offline>
      <Online>
        <NavBar />
        <Outlet />
        <Footer />
      </Online>
    </div>
  );
}
