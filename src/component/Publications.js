import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

export class Publications extends Component {
  state = {
    postsPerPage: 1,
    currentPage: 1,
    pageNumers: [],
  };
  render() {
    const { publications } = this.props;

    return (
      <section
        className="testimonials section-padding bg-img publications"
        style={{
          // height: "844px",
          // overflowY: "scroll",
          // height: "600px",
          height: "100vh",
        }}
      >
        <div
          data-scroll-index="3"
          data-overlay-dark="7"
          style={{
            backgroundImage:
              'url("https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fb3.jpg?alt=media&token=4f2f9409-e356-443a-ba17-8145f8ec20b4")',
            // marginTop: "30px",
            height: "95vh",
          }}
        >
          <div className="container" style={{ paddingTop: "50px" }}>
            <div className="row">
              <div className="section-head full-width mb-50">
                <span className="icon icon-quote"></span>
                <br />
                <h4 className="title education">Publications</h4>
              </div>

              <div className="">
                <div className="good">
                  <ul
                    style={{
                      width: "100%",
                      // height: "500px",
                      // textAlign: "center",
                    }}
                  >
                    {publications &&
                      publications.map((publication, index) => {
                        // console.log(publication);
                        return (
                          <a
                            style={{
                              color: "white",
                              width: "90%",
                            }}
                            href={publication.link}
                            target="blank"
                            key={index}
                          >
                            <li
                              style={{
                                listStyle: "none",
                                margin: "15px",
                                width: "100%",
                                display: "flex",
                              }}
                              // className="row"
                            >
                              <div
                                className="hide"
                                style={{
                                  textOverflow: "ellipsis",
                                  width: "65%",
                                  marginRight: "5%",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  overflowX: "hidden",
                                  // -webkit-line-clamp: '1'; /* number of lines to show */
                                  // -webkit-box-orient: vertical;
                                }}
                              >
                                {publication.title}
                              </div>
                              <div style={{ width: "30%" }}>
                                {moment(publication.yearItHappened).format(
                                  "MMMM Do YYYY"
                                )}
                              </div>
                            </li>
                          </a>
                        );
                      })}
                    <a
                      style={{ color: "white", width: "90%" }}
                      href="/publications"
                      // target="blank"
                    >
                      <li
                        style={{ listStyle: "none", margin: "15px" }}
                        // className="row"
                      >
                        <div
                          style={{
                            textDecoration: "underline",
                          }}
                        >
                          Click here for more publications
                        </div>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const publications = state.firestore.ordered.publications;
  return {
    publications: publications,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "publications",
      orderBy: ["yearItHappened", "desc"],
      limit: 5,
    },
  ])
)(Publications);
