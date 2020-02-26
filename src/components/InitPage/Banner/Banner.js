import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="jumbotron">
      <div className="row">
        <div className="col-md-3 sideLImg"></div>
        <div className="col-md-6">
          <h1 className="display-3">Welcome to HelloChat</h1>
          <p className="lead">Chat With Your Friends</p>
          <hr className="my-2" />
          <br />
          <p className="lead">
            <Link
              className="btn btn-primary btn-lg ml-2 rounded-lg"
              to="/Login"
            >
              Sign In
            </Link>
            <Link
              className="btn btn-primary btn-lg ml-2 rounded-lg"
              to="/SignUp"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="col-md-3 sideRImg"></div>
      </div>
    </section>
  );
};

export default Banner;
