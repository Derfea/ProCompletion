import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const testimonialDetails = ({ message, auth, id }) => {
  // console.log(id);

  // console.log(message);
  if (!auth.uid) return <Redirect to="/" />;
  if (message) {
    return (
      <div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar />
          <div className="container section project-details">
            <div className="card z-depth-0" style={{ height: "400px" }}>
              <div
                className="card-content"
                style={{ margin: "0 auto 0 auto", padding: "30px" }}
              >
                <h1 className="card-title">{message.message.subject}</h1>
                <h6>{message.message.html}</h6>
                <p>From {message.from}</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar />
          <div className="container center">
            <p>Loading project...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const messages = state.firestore.data.mail;
  const message = messages ? messages[id] : null;
  return {
    message: message,
    id: id,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "mail" }])
)(testimonialDetails);
