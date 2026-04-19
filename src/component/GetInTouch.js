import React, { Component } from "react";
import { connect } from "react-redux";
import { addMail } from "../store/actions/mailActions";
import emailjs from "emailjs-com";
class GetInTouch extends Component {
  state = {
    from_name: "",
    email: "",
    subject: "",
    message: "",
    error: "",
    result: "",
  };
  sendEmail = (e) => {
    e.preventDefault();
    this.props.addMail(this.state);
    console.log(e.target.value);
    emailjs
      .sendForm(
        "service_16pmixb",
        "template_nvc41wp",
        e.target,
        // this.state,
        "user_K1HFLIxunnu8zzNNgFVms"
      )
      .then(
        (result) => {
          // console.log(result.text);
          this.setState({
            result: result.text,
          });
        },
        (error) => {
          // console.log(error.text);
          this.setState({
            error: error.text,
          });
        }
      );
    e.target.reset();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    try {
      await this.props.addMail(this.state);
      emailjs
        .sendForm(
          "service_fkqv27o",
          "template_4sp0lz6",
          e.target,
          // this.state,
          // "user_t5zpf8ZCYq4CW8EmLKMIY"
          this.state.email
        )
        .then(
          (result) => {
            // console.log(result.text);
            this.setState({
              result: result.text,
            });
          },
          (error) => {
            // console.log(error.text);
            this.setState({
              error: error.text,
            });
          }
        );

      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      this.setState({ error: error.message });
      // console.log("There was an error");
    }
    // e.target.reset();
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <section
        className="contact section-padding bg-img"
        // data-overlay-dark="8"
        data-overlay-dark="7"
        data-background="https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fintouch.jpg?alt=media&token=75192e75-6424-447d-ad34-bbf5f88de251"
        // data-background={touch}
        data-scroll-index="7"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fintouch.jpg?alt=media&token=75192e75-6424-447d-ad34-bbf5f88de251")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="section-head full-width mb-50">
              <h4 className="title education">Get In Touch</h4>
            </div>

            <form
              // onSubmit={this.handleSubmit}
              onSubmit={this.sendEmail}
              className="form full-width"
            >
              <input
                type="hidden"
                name="_token"
                value="uEFYS9N3CSSEMTDghlurBrlaaayvl1LK7CZD1c3W"
              />
              <div className="messages"></div>

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="from_name"
                        type="text"
                        name="from_name"
                        placeholder="Name *"
                        onChange={this.handleChange}
                        required
                        value={name}
                        style={{ background: "white", color: "black" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email *"
                        onChange={this.handleChange}
                        value={email}
                        required
                        style={{ background: "white", color: "black" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={this.handleChange}
                        required
                        placeholder="Subject *"
                        style={{ background: "white", color: "black" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message *"
                        rows="4"
                        value={message}
                        onChange={this.handleChange}
                        required
                        style={{ background: "white", color: "black" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <span
                        className="buton buton-lg button-diff text-center"
                        style={{ width: "100%", margin: "auto" }}
                      >
                        <button
                          type="submit"
                          front="Send Message"
                          back=""
                          className="disabled"
                        ></button>
                      </span>
                      {/* <button
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          background: "navy",
                          color: "#fff",
                          transition: "0.3s",
                          height: "40px",
                          width: "141px",
                          margin: "auto",
                          cursor: "pointer",
                        }}
                        type="submit"
                      >
                        {/* <div
                          style={{
                            height: "40px",
                            width: "141px",
                            margin: "auto",
                          }}
                        > */}
                      {/* Send Message */}
                      {/* </div> */}
                      {/* </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMail: (mail) => dispatch(addMail(mail)),
  };
};

export default connect(null, mapDispatchToProps)(GetInTouch);
