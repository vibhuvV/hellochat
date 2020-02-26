import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HelloChat
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          datatoggle="collapse"
          datatarget="#collapsibleNavId"
          ariacontrols="collapsibleNavId"
          ariaexpanded="false"
          arialabel="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="nav-link" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
