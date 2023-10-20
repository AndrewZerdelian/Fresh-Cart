import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Assets/freshcart-logo.svg";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext";
import { CartContext } from "../CartContext/CartContext";
import { WishList } from "../../Context/WishListContext";

export default function NavBar() {
  let navigate = useNavigate();
  let { UserToken, setUserToken } = useContext(userContext);
  const { CartNotification } = useContext(CartContext);
  const { WishListNotifications } = useContext(WishList);
  const [IsNotification, SetIsNotification] = useState(null);

  function Logout() {
    localStorage.removeItem("UserToken");
    setUserToken(null);
    navigate("/Login");
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="FreshCart" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {UserToken !== null ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="Catgories">
                      Catgories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="Brands">
                      Brands
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link position-relative" to="Cart">
                      Cart
                      {CartNotification > 0 ? (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {CartNotification}+
                        </span>
                      ) : (
                        ""
                      )}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link position-relative"
                      to="WishList"
                    >
                      WishList
                      {WishListNotifications > 0 ? (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {WishListNotifications}+
                        </span>
                      ) : (
                        ""
                      )}
                    </NavLink>
                  </li>
                </ul>
              ) : (
                ""
              )}

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <ul className="nav-item d-flex align-items-center ms-auto">
                  <li className="fab fa-facebook mx-2"></li>
                  <li className="fab fa-twitter mx-2"></li>
                  <li className="fab fa-instagram mx-2"></li>
                  <li className="fab fa-tiktok mx-2"></li>
                </ul>

                {UserToken !== null ? (
                  <div className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                    {" "}
                    <li className="nav-item">
                      <button onClick={Logout} className="nav-link" href="/">
                        Logout
                      </button>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="Login">
                        Login
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="Register">
                        Register
                      </NavLink>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

