import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ModalVid from "./modals/VideoModal";
import ModalPic from "./modals/PictureModal";

export class Multimedia extends Component {
  state = {
    active: "videos",
    isShowingVideo: false,
    isShowingPicture: false,
  };

  openModalHandlerVid = () => {
    this.setState({
      isShowingVideo: true,
    });
  };

  closeModalHandlerVid = () => {
    this.setState({
      isShowingVideo: false,
    });
  };

  openModalHandlerPic = () => {
    this.setState({
      isShowingPicture: true,
    });
  };

  closeModalHandlerPic = () => {
    this.setState({
      isShowingPicture: false,
    });
  };

  handleClickPhoto = (e) => {
    e.preventDefault();

    this.setState({
      active: "photos",
    });
  };

  handleClickVideo = (e) => {
    e.preventDefault();
    this.setState({
      active: "videos",
    });
  };

  render() {
    console.log(this.state.active);
    const { auth } = this.props;
    return (
      <section
        className="portfolio section-padding"
        // style={{ height: "4400px" }}
        data-scroll-index="4"
      >
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}
        <div className="container">
          <div className="row">
            <div className="full-width">
              <h4 className="title">Multimedia</h4>
            </div>
          </div>
          <ul
            // id="page-numbers"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "150px",
              margin: "20px auto",
            }}
          >
            <li style={{ cursor: "pointer" }} id="photos">
              {/* <div
                onClick={this.handleClickPhoto}
                style={{
                  transition: "all 250ms ease",
                  border: "none",
                  margin: "10px",
                  backgroundColor: "rgb(0, 0, 128)",
                  // backgroundColor: "rgba(0, 0, 128, .5)",
                  fontSize: "1.3em",
                  content: "",
                  // height: "50px",
                  // width: "113px",
                  padding: "5px",
                  color: "white",
                  boxShadow: "0 0 1px 3px rgba(0, 0, 128, 1)",
                  borderRadius: "10%",
                }}
              >
                Photographs
              </div> */}
              <button
                onClick={this.handleClickPhoto}
                style={{
                  border: "none",
                  margin: "10px",
                  backgroundColor: "rgb(0, 0, 128)",
                  // backgroundColor: "rgba(0, 0, 128, .5)",
                  fontSize: "1.3em",
                  cursor: "pointer",
                  // height: "50px",
                  // width: "113px",
                  padding: "5px",
                  color: "white",
                  boxShadow: "0 0 1px 3px rgba(0, 0, 128, 1)",
                  borderRadius: "10%",
                }}
              >
                Photographs
              </button>
            </li>
            <li style={{ cursor: "pointer" }} id="videos">
              <div
                onClick={this.handleClickVideo}
                style={{
                  transition: "all 250ms ease",
                  border: "none",
                  margin: "10px",
                  cursor: "pointer",
                  backgroundColor: "rgb(0, 0, 128)",
                  // backgroundColor: "rgba(0, 0, 128, .5)",
                  fontSize: "1.3em",
                  content: "",
                  padding: "5px",
                  // height: "50px",
                  color: "white",
                  // width: "60px",
                  boxShadow: "0 0 1px 3px rgba(0, 0, 128, 1)",
                  borderRadius: "10%",
                }}
              >
                Videos
              </div>
            </li>
          </ul>
          <div className="row justify-content-center">
            {/* <div className="filtering text-center mb-50"></div> */}
            <div
              className="gallery full-width"
              style={{
                display: "flex",
                // flexWrap: "wrap",
              }}
            >
              {this.state.active === "videos" ? (
                <div
                  // className="col text-center"
                  style={{
                    flexWrap: "wrap",
                    display: "flex",
                    justifyContent: "center",
                    // width: "150px",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <div
                    className=" items video"
                    // style={{
                    //   position: "absolute",
                    //   left: "0px",
                    //   top: "0px",
                    // }}
                  >
                    <div className="item-img">
                      <iframe
                        title="Vid1"
                        src="https://www.youtube.com/embed/-1AVneXmPbk"
                        frameBorder="0"
                        width="350px"
                        height="350px"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div
                    className=" items video"
                    // style={{
                    //   position: "absolute",
                    //   left: "360px",
                    //   top: "0px",
                    // }}
                  >
                    <div className="item-img">
                      <iframe
                        title="Vid2"
                        src="https://www.youtube.com/embed/jFzZo1NSRYc"
                        frameBorder="0"
                        width="350px"
                        height="350px"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  {auth.uid ? (
                    <div
                      className=" items video"
                      // style={{
                      //   position: "absolute",
                      //   left: "360px",
                      //   top: "0px",
                      // }}
                    >
                      <div className="item-img">
                        <button
                          style={{
                            outline: "none",
                            border: "none",
                            background: "transparent",
                          }}
                          onClick={this.openModalHandlerVid}
                        >
                          <svg
                            width="350"
                            height="350"
                            viewBox="0 0 350 350"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="340"
                              height="340"
                              stroke="#CCCCCC"
                              stroke-width="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              style={{
                                strokeDasharray: "15px",
                              }}
                            />
                            <path
                              d="M187.219 162.172H244.312V186.781H187.219V251.469H161.062V186.781H103.969V162.172H161.062V102.406H187.219V162.172Z"
                              fill="#CCCCCC"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* <Modal onClose={this.showModal} show={this.state.show}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet
                    repellendus non fuga omnis a sed impedit explicabo
                    accusantium nihil doloremque consequuntur.
                  </Modal> */}
                  <ModalVid
                    className="modal"
                    show={this.state.isShowingVideo}
                    close={this.closeModalHandlerVid}
                  >
                    Maybe aircrafts fly very high because they don't want to be
                    seen in plane sight?
                  </ModalVid>
                </div>
              ) : (
                <div
                  style={{
                    flexWrap: "wrap",
                    display: "flex",
                    justifyContent: "center",
                    // width: "150px",
                    width: "100%",
                    margin: "auto",
                  }}
                  // className="col text-center"
                >
                  {/* <span
                  style={{
                    marginBottom: "30px",
                    fontSize: "2rem",
                    // textDecoration: "underline",
                  }}
                >
                  Photographs
                </span> */}
                  <div
                    className=" items photos"
                    style={{
                      // position: "absolute",
                      // left: "479px",
                      // top: "1060px",
                      // top: "0px",
                      width: "400px",
                    }}
                  >
                    <div className="item-img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fbeautiful.jpg?alt=media&token=bbd898b3-047f-45a7-9272-418cd85c3517"
                        alt="imageUrl"
                      />
                      <div className="item-img-overlay text-center valign">
                        <div className="overlay-info vertical-center full-width">
                          <h5>Algarve - Portugal</h5>
                          <h6>© adebayo adeloye</h6>
                        </div>
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fbeautiful.jpg?alt=media&token=bbd898b3-047f-45a7-9272-418cd85c3517"
                          target="blank"
                          className="link"
                        >
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className=" items photos"
                    style={{
                      // position: "absolute",
                      // left: "0px",
                      // top: "1152px",
                      width: "400px",
                    }}
                  >
                    <div className="item-img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fhills.jpg?alt=media&token=4e2dfdc3-0a44-45fe-a017-fa64c57da37b"
                        alt="imageUrl"
                      />
                      <div className="item-img-overlay text-center valign">
                        <div className="overlay-info vertical-center full-width">
                          <h6>© adebayo adeloye</h6>
                        </div>
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fhills.jpg?alt=media&token=4e2dfdc3-0a44-45fe-a017-fa64c57da37b"
                          className="link"
                          target="blank"
                        >
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" items photos"
                    style={{
                      width: "400px",
                      // position: "absolute",
                      // left: "759px",
                      // top: "1556px",
                    }}
                  >
                    <div className="item-img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fducks.jpg?alt=media&token=ba2d05ac-9262-4ee0-9934-b0c9925f7d83"
                        alt="imageUrl"
                      />
                      <div className="item-img-overlay text-center valign">
                        <div className="overlay-info vertical-center full-width">
                          <h5>London - England</h5>
                          <h6>© adebayo adeloye</h6>
                        </div>
                        <a
                          href="https://firebasestorage.googleapis.com/v0/b/ade-ade.appspot.com/o/images%2Fducks.jpg?alt=media&token=ba2d05ac-9262-4ee0-9934-b0c9925f7d83"
                          className="link"
                          target="blank"
                        >
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {auth.uid ? (
                    <div className=" items photos">
                      <div className="item-img">
                        <button
                          style={{
                            outline: "none",
                            border: "none",
                            background: "transparent",
                          }}
                          onClick={this.openModalHandlerPic}
                        >
                          <svg
                            width="350"
                            height="350"
                            viewBox="0 0 350 350"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="340"
                              height="340"
                              stroke="#CCCCCC"
                              stroke-width="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              style={{
                                strokeDasharray: "15px",
                              }}
                            />
                            <path
                              d="M187.219 162.172H244.312V186.781H187.219V251.469H161.062V186.781H103.969V162.172H161.062V102.406H187.219V162.172Z"
                              fill="#CCCCCC"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <ModalPic
                    className="modal"
                    show={this.state.isShowingPicture}
                    close={this.closeModalHandlerPic}
                  >
                    Maybe aircrafts fly very high because they don't want to be
                    seen in plane sight?
                  </ModalPic>
                </div>
              )}
              {/* <div className="clearfix"></div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const multimedia = state.firestore.ordered.multimedia;
  return {
    multimedia: multimedia,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "photos",
      // orderBy: ["yearItHappened", "desc"],
      // limit: 5,
    },
    {
      collection: "videos",
      // orderBy: ["yearItHappened", "desc"],
      // limit: 5,
    },
  ])
)(Multimedia);
