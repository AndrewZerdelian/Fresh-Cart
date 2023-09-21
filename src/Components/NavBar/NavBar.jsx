import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Assets/freshcart-logo.svg";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext";
//import Style from "./NavBar.module.css";

export default function NavBar() {
  let { UserToken ,setUserToken } = useContext(userContext);
  let navigate = useNavigate()

  function LogOut() {
    localStorage.removeItem("token");
    setUserToken(null)
    navigate('/login')
  }
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
                      <NavLink className="nav-link" href="/" onClick={LogOut}>
                        Logout
                      </NavLink>
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

/**
 * import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/freshcart-logo.svg";
import { useContext } from "react";
import { userContext } from "../../Context/UserContext";
//import Style from "./NavBar.module.css";

export default function NavBar() {
  let { UserToken } = useContext(userContext);
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
                {UserToken !== null ? (
                  <div>
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
                  </div>
                ) : (
                  ""
                )}
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <ul className="nav-item d-flex align-items-center">
                  <li className="fab fa-facebook mx-2"></li>
                  <li className="fab fa-twitter mx-2"></li>
                  <li className="fab fa-instagram mx-2"></li>
                  <li className="fab fa-tiktok mx-2"></li>
                </ul>


                {UserToken !== null ? (
                  <div>
                    {" "}
                    <li className="nav-item">
                      <NavLink className="nav-link" href="/">
                        Logout
                      </NavLink>
                    </li>
                  </div>
                ) : (
                  <>
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

                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

 */
