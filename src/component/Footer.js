import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row copyright_div">
          <div className="col-md-8">
            <p>Copyright © Adebayo J. Adeloye. All Rights Reserved.</p>
          </div>

          <div className="col-md-4 footer-social-icons">
            <ul className="social-icons">
              <li>
                <a
                  href="https://twitter.com/intent/tweet?url=https://researchportal.hw.ac.uk/en/persons/adebayo-j-adeloye%3Futm_source%3Dtwitter%26utm_medium%3Dsocial%26utm_campaign%3Dsharelink&text=Check+out+this+researcher+at+Heriot-Watt+Research+Portal%3A+Adebayo+J.+Adeloye"
                  className="social-icon"
                  target="blank"
                >
                  {" "}
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/shareArticle?mini=true&url=https://researchportal.hw.ac.uk/en/persons/adebayo-j-adeloye%3Futm_source%3Dlinkedin%26utm_medium%3Dsocial%26utm_campaign%3Dsharelink&summary=Check+out+this+researcher+at+Heriot-Watt+Research+Portal%3A+Adebayo+J.+Adeloye"
                  className="social-icon"
                  target="blank"
                >
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sharer.php?u=https://researchportal.hw.ac.uk/en/persons/adebayo-j-adeloye%3Futm_source%3Dfacebook%26utm_medium%3Dsocial%26utm_campaign%3Dsharelink&p[summary]=Check+out+this+researcher+at+Heriot-Watt+Research+Portal%3A+Adebayo+J.+Adeloye"
                  className="social-icon"
                  target="blank"
                >
                  {" "}
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
