import React, { Component } from "react";
import bio from "../img/bioligy.png";
import evi from "../img/eviourmental.png";
import eng from "../img/engineering.png";
import soc from "../img/social.png";
import ene from "../img/energy.png";
import com from "../img/computerscience.png";
import che from "../img/chemicalengineering.png";
import biochem from "../img/biochemistry.png";
import art from "../img/artsandhumanities.png";

export class Work extends Component {
  render() {
    return (
      <section className="services section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="section-head full-width">
              <h4 className="title">Areas of Work</h4>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/technology assessment and foresight.png"
                  src={bio}
                  style={{ width: "100px", paddingBottom: "30px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Technology Assessment and Foresight */}
                  Agriculture & Biology
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 active bolt">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/globalgovernance_.png"
                  src={evi}
                  style={{ width: "80px", marginBottom: "8px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Global Governance,
                  <br /> Policy and Standards */}
                  Earth & Environmental Sciences
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/legal and regulatory analysis2.png"
                  src={eng}
                  style={{ width: "100px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Legal and Regulatory Analysis */}
                  Engineerings
                </h6>
              </div>
            </div>

            <div className="bord full-width"></div>

            <div className="col-lg-4 col-md-6">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/internet of things smart cities 2.png"
                  src={soc}
                  style={{ width: "100px", paddingBottom: "30px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* IoT, Digital Identity, <br />
                  Smart Cities, AI */}
                  Social Sciences
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 active bolt">
              <div className="item mb-sm50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/technology_ society and sustainability.png"
                  src={ene}
                  style={{ width: "100px", paddingBottom: "30px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Technology, Society and Sustainability */}
                  Energy
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/publicrelations2.png"
                  src={com}
                  style={{ width: "100px", paddingBottom: "30px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Public Relations and Stakeholder Engagement */}
                  Computer Science
                </h6>
              </div>
            </div>

            <div className="bord full-width"></div>

            <div className="col-lg-4 col-md-6">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/meetingfacilitation.png"
                  src={che}
                  style={{ width: "100px", paddingBottom: "30px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Meeting Facilitation and Design */}
                  Chemical Engineering
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 active bolt">
              <div className="item mb-sm50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/mediation and conflict2.png"
                  src={biochem}
                  style={{ width: "100px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Mediation and <br />
                  Conflict Resolution */}
                  Biochemistry, Genetics
                  <br />
                  and Molecular Biology
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item mb-md50">
                <img
                  // src="https://www.laravastava.com/frontend/img/services/business mentoring leadership2.png"
                  src={art}
                  style={{ width: "100px" }}
                  alt="imageUrl"
                  className="itemImg"
                />
                <h6>
                  {/* Business Mentoring and Leadership Coaching */}
                  Arts and Humanities
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
