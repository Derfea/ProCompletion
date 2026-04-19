import React, { Component } from "react";
import image from "../img/Adeloye_Prof AJ.jpg";

export class About extends Component {
  render() {
    return (
      <div>
        <section
          className="resume bg-img section-padding about_me"
          data-overlay-dark="7"
          data-scroll-index="1"
          style={{
            backgroundPosition: "0px 0px",
            backgroundImage:
              'url("https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fcomputer.jpg?alt=media&token=659d9976-d8ac-4665-bade-48ab838b21d4")',
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="item" style={{ margin: "auto", width: "70%" }}>
                <br />
                <article className="row single-post mt-5 no-gutters">
                  <div className="col-md-12">
                    <div
                      className="hero-img mb-md50 image-wrapper float-left"
                      style={{ width: "36%" }}
                    >
                      <img
                        src={image}
                        alt="imgUrl"
                        style={{ marginRight: "30px", paddingRight: "30px" }}
                      />
                    </div>
                    <div className="content single-post-content-wrapper">
                      <h4 className="title title-left education">Biography</h4>

                      <p
                        style={{
                          border: "solid 1px white",
                          fontSize: "17px",
                          background: "black",
                          padding: "10px",
                          marginTop: "-27px",
                        }}
                      >
                        
                        Professor Adeloye is Professor of water resources
                        management at the Institute for Infrastructure and
                        Environment, Heriot-Watt University, Edinburgh, UK.
                        <br />
                        <br />
                        Professor Adeloye obtained his Bachelor Honours degree
                        (First Class, First Position) in Agricultural
                        Engineering from the University of Ife (Nigeria), as a
                        result of which he was the recipient of the Faculty of
                        Technology Prize for being the best overall student in
                        the 1977 graduating Year at the University. He also
                        holds the MSc and PhD degrees in Water Resources
                        Management from Newcastle University, England. His
                        research has focused on the development of robust tools
                        for the sustainable planning and management of
                        reservoirs, for which he has developed rapid but
                        accurate assessment methodologies which remove the need
                        for time series data that are often lacking, especially
                        in developing economies. A further area of focus is the
                        assessment of climate change impacts and its
                        uncertainties on water resources and flooding, and their
                        use for designing robust adaptation strategies. Work has
                        also been extended to groundwater resources and its
                        integrated management with surface water resources.
                        <br />
                        <br />
                        Latterly, he has been developing machine learning,
                        artificial intelligence paradigms, such as supervised
                        and unsupervised artificial neural networks, fuzzy
                        inference and data mining for analysing complex
                        environmental systems, including water quality,
                        wastewater treatment plants operation and control and
                        crop evapotranspiration. His research has been
                        extensively published; his highly successful book “Water
                        Resources Yield” (
                        <a href="https://www.wrpllc.com">www.wrpllc.com</a>) is
                        widely used for graduate training and practice
                        worldwide.
                        <br />
                        <br />
                        He has also attracted external funding for his research
                        and he was recently the lead-PI for “MICCI- Mitigating
                        climate change impacts on Indian agriculture through
                        improved irrigation water management”, one of five
                        projects jointly funded by the UK-NERC and India-MOES
                        under the Indo-UK changing water cycle (South Asia)
                        thematic programme.
                        <br />
                        An alumnus of the prestigious Fellowship of the Royal
                        Commission for the Exhibition of 1851
                        (www.royalcommission1851.org.uk), Professor Adeloye is a
                        chartered Engineer (UK), Chartered Water and
                        Environmental Manager, Member Chartered Institution of
                        Water and Environmental Management, and Fellow of the UK
                        Higher Education Academy.
                        <br />
                        <br />
                        Professor Adeloye is also a seasoned Educator and has
                        taught in Europe, Africa, Asia (including the Middle
                        East) and the Americas, in addition to supervising
                        successfully several doctoral and Masters’ candidates
                        from different parts of the world. Some of Professor
                        Adeloye’s former students are now occupying positions of
                        high responsibility in their various countries.
                        Recently, he has advised the Director General of the
                        Nigeria Hydrological Services Agency (NIHSA) on
                        technical aspects of floods, droughts and water
                        resources management.
                      </p>

                      <span className="buton text-center">
                        {/* eslint-disable-next-line */}
                        <a
                          href="#0"
                          front="GET IN TOUCH"
                          back=""
                          data-scroll-nav="7"
                          className=""
                        ></a>
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
