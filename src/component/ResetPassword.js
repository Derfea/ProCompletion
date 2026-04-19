import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
// import { auth } from "../service/fbConfig";
import { resetPassword } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class ResetPassword extends Component {
  state = {
    email: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.resetPassword(this.state);
    } catch (error) {
      this.setState({ error: error.message });
      // console.log("There's an error");
      // console.log(error);
    }
    // try {
    //   const { email } = this.state;
    //   const config = {
    //     url: "https://adebayo-adeloye.web.app/signin",
    //   };
    //   await auth
    //     .sendPasswordResetEmail(email, config)
    //     .then(() => {
    //       console.log("Password has reseted");
    //     })
    //     .catch(() => {
    //       console.log("Something went wrong");
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  };
  render() {
    const { email } = this.state;
    const { resetSuccess, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
        <form
          style={{
            margin: "auto",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "black solid 2px",
            borderRadius: "10px",
          }}
          onSubmit={this.handleSubmit}
          className="paper"
          // onSubmit={handleSubmit}
        >
          <div style={{ margin: "30px", textAlign: "center" }}>
            {resetSuccess ? (
              <h5
                style={{
                  color: "green",
                  padding: "10px",
                  border: "1px solid green",
                  borderRadius: "10px",
                  margin: "10px",
                  backgroundColor: "greenyellow",
                }}
              >
                {resetSuccess}
              </h5>
            ) : null}
            <div className="heading">
              <h2>Reset your Password</h2>
            </div>
            <br />{" "}
            <div className="inputs">
              <input
                name="email"
                value={email}
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
                style={{
                  marginBottom: "30px",
                  marginTop: "10px",
                  height: "40px",
                  width: "100%",
                }}
              />
            </div>
            <div className="button">
              <button
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  outline: "none",
                  // outline: "black 1px solid",
                  // border: "none",
                  border: "black 1px solid",
                  backgroundColor: "navy",
                  color: "white",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    resetSuccess: state.auth.resetSuccess,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // signIn: (creds) => dispatch(signIn(creds)),
    resetPassword: (creds) => dispatch(resetPassword(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
