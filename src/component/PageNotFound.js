import React, { Component } from "react";
import WordLimit from "react-word-limit";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <div className="text-capitalize">
            <h1>404 Page no found</h1>
          </div>
          <br />
          <br />
          <div className="">
            <h3>
              <WordLimit limit={30}>{this.props.location.pathname}</WordLimit>
            </h3>
          </div>
          <div className="">
            <Link to="/" style={{ textDecoration: "underline" }}>
              <h5>Go back to the homepage</h5>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
