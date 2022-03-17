import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/useeffect">
                  {props.contactText}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fetchingapi">
                  UseEffect Api
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todolist">
                  ToDo List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/statearray">
                  UseState Array
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/objectupdated">
                  Update Object
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usereducer">
                  Use Reducer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/uncontrolled">
                  UnControlled Components
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                checkbox{" "}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
Navbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string,
  homeText: propTypes.string,
  contactText: propTypes.string,
};
Navbar.defaultProps = {
  title: "default title",
  aboutText: "default about",
  homeText: "default home",
  contactText: "defaultContact",
};
