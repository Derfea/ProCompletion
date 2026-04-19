import React, { Component } from "react";
// import about from "../img/about.jpg";
import Navbar from "./Navbar";
import StartPage from "./StartPage";
import About from "./About";
import Work from "./Work";
import Publications from "./Publications";
import Multimedia from "./Multimedia";
import Testimonials from "./Testimonials";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="loading" style={{ display: "none" }}>
          <div className="text-center middle">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <Navbar />
        <StartPage />
        <About />
        <Work />
        <Publications />
        <Multimedia />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}

export default Home;
