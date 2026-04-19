import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { signOut } from "../store/actions/authActions";

function Navbar(props) {
  const { auth, signOut } = props;
  return (
    <div>
      {auth.uid ? (
        <nav className="navbar navbars navbar-expand-lg nav-scroll">
          <div className="container">
            <a className="logo" href="/">
              <img
                // src="https://www.laravastava.com/frontend/img/logo_new2.png"
                src={logo}
                alt="imageUrl"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" style={{ color: "white" }}>
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="0"
                  >
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="1"
                    href="/"
                  >
                    About Me
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="2"
                  >
                    Work
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="3"
                  >
                    Publications
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="4"
                  >
                    Multimedia
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="5"
                  >
                    Testimonials
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="7"
                  >
                    Contact
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/select-testimonial"
                    className="nav-link"
                  >
                    Select Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/add-publication"
                    className="nav-link"
                  >
                    Add Publication
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/messages"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>

                <li className="nav-item" onClick={signOut}>
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbars navbar-expand-lg nav-scroll">
          <div className="container">
            <a className="logo" href="/">
              <img
                // src="https://www.laravastava.com/frontend/img/logo_new2.png"
                src={logo}
                alt="imageUrl"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" style={{ color: "white" }}>
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="0"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="1"
                    href="/"
                  >
                    About Me
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="2"
                  >
                    Work
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="3"
                  >
                    Publications
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="4"
                  >
                    Multimedia
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="5"
                  >
                    Testimonials
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ color: "white", cursor: "pointer" }}
                    data-scroll-nav="7"
                  >
                    Contact
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/signin"
                    className="nav-link"
                  >
                    Admin
                  </a>
                </li>
              </ul>
              {/* <button
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  outline: "none",
                  // outline: "black 1px solid",
                  // border: "none",
                  border: "black 1px solid",
                  // backgroundColor: "navy",
                  backgroundColor: "blue",
                  color: "white",
                  cursor: "pointer",
                }}
                type="submit"
              >
                <a style={{ textDecoration: "none" }} href="/signin">
                  Admin
                </a>
              </button> */}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (creds) => dispatch(signOut(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
