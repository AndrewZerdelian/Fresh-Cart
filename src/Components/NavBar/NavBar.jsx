import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/freshcart-logo.svg";
//import Style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="blabla" />
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
                  <NavLink className="nav-link" to="Products">
                    Products
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
                  <NavLink className="nav-link" to="Cart">
                    Cart
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item d-flex align-items-center">
                  <li className="fab fa-facebook mx-2"></li>
                  <li className="fab fa-twitter mx-2"></li>
                  <li className="fab fa-instagram mx-2"></li>
                  <li className="fab fa-tiktok mx-2"></li>
                </li>

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

                <li className="nav-item">
                  <NavLink className="nav-link" href="/">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
