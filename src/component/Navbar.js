import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
// import Register from './Register';
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const { loginWithRedirect } = useAuth0();
  const state = useSelector((state) => state.HandleCart);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  // let navigate = useNavigate();
  // const routeChange = () =>{
  //   let path = `https://dev-ghonmewjt648swlp.us.auth0.com/u/signup?state=hKFo2SBZaEpqSW9rWlNoYzRwV1c4bFRGM2l3RTVxdDc1NzBWRqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEdmeGdyRXF1dnl3STQ4aXFHU3UwQ1cyNmNvQzV2c0NWo2NpZNkgMGRIRlpJN3dWaWVocGtUYmFlcTZhdEdTcHMzT0FGemo`;
  //   navigate(path);
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            SHOPPING COLLECTION
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial">
                  Testimonial
                </NavLink>
              </li>
            </ul>
            {isAuthenticated && (
              <div>
                <img
                  src={user.picture}
                  alt={user.name}
                  className="logoimg"
                  height="40px"
                />
                {/* <h2>{user.name}</h2> */}
                {/* <p>{user.email}</p> */}
              </div>
            )}
            <div className="buttons">
              {isAuthenticated ? (
                <NavLink
                  to="/login"
                  className="btn btn-outline-dark ms-2"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="btn btn-outline-dark"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </NavLink>
              )}

              <NavLink
                to="/register"
                className="btn btn-outline-dark ms-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://dev-ghonmewjt648swlp.us.auth0.com/u/signup?state=hKFo2SBZaEpqSW9rWlNoYzRwV1c4bFRGM2l3RTVxdDc1NzBWRqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEdmeGdyRXF1dnl3STQ4aXFHU3UwQ1cyNmNvQzV2c0NWo2NpZNkgMGRIRlpJN3dWaWVocGtUYmFlcTZhdEdTcHMzT0FGemo";
                }}
              >
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                Cart({state.length})
              </NavLink>
              <NavLink to="/download" className="btn btn-outline-dark ms-2">
                DownLoad App
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
