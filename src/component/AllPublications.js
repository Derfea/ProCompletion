import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
// import TextField from "@material-ui/core/TextField";
// import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "./needed/PublicationsPagination";

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
    const { publications } = this.props;
    // if (!auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div
          style={{
            // height: "160vh",
            // minHeight: "160vh",
            // maxHeight: "190vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="height"
        >
          <Navbar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Messages;
