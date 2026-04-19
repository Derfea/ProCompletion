import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
// import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "./needed/MessagesPagination";

class Messages extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.createPublication(this.state);
      this.setState({
        link: "",
        title: "",
        error: "",
        year: 0,
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };
  render() {
    const { auth, messages } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div
          style={{
            height: "120vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Navbar />
          <div style={{ width: "90%" }}>
            {messages !== undefined ? (
              <Pagination messages={messages}></Pagination>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  const messages = state.firestore.ordered.mail;
  return {
    auth: state.firebase.auth,
    messages: messages,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "mail" }])
)(Messages);
