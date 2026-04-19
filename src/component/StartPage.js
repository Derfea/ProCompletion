import React, { Component } from "react";
import per from "../img/person.png";

export class StartPage extends Component {
  render() {
    return (
      <header
        className="header valign bg-img"
        data-scroll-index="0"
        // data-overlay-dark="5"
        data-overlay-dark="3"
        data-background="https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fwater.jpeg?alt=media&token=9b88a16e-41d6-4600-8483-822afa51029e"
        // data-background={about}
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fwater.jpeg?alt=media&token=9b88a16e-41d6-4600-8483-822afa51029e")',
          // backgroundPosition: " 0px 862.667px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 vertical-center full-width text-center">
              <h1
                style={{ color: "lime", fontSize: "70px", marginTop: "150px" }}
              >
                <strong>Adebayo Adeloye</strong>
              </h1>
              <h2 className="caption clip" style={{ marginTop: "30px" }}>
                <span className="blc">
                  {/* Tech Foresight Expert. <br /> Lawyer and Policy Advisor.{" "}
                  <br /> */}
                  Professor of Water Resources Management. <br />{" "}
                </span>
              </h2>
            </div>
            <div className="col" style={{ width: "1%" }}>
              <img src={per} alt="person" />
            </div>
          </div>
        </div>

        <div className="arrow">
          <span
            data-scroll-nav="1"
            className="active"
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </header>
    );
  }
}

export default StartPage;
