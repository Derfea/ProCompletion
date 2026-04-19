import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Pagination from "./needed/Pagination";

export class Testimonials extends Component {
  render() {
    if (this.props.testimonials) {
      const { testimonials } = this.props;

      // const selectedTestimonials = testimonials.map((testimonial) =>
      //   testimonial.showing === true ? testimonial : ""
      // );
      const selectedTestimonials = testimonials.filter(
        (testimonial) => testimonial.showing === true
      );
      return (
        <section
          className="testimonials section-padding bg-img"
          data-overlay-dark="7"
          data-background="https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fb2.jpg?alt=media&token=a09eb76a-77c7-47af-b66e-6c92826e6636"
          data-scroll-index="5"
          style={{
            backgroundImage:
              'url("https://firebasestorage.googleapis.com/v0/b/adebayo-adeloye.appspot.com/o/images%2Fb2.jpg?alt=media&token=a09eb76a-77c7-47af-b66e-6c92826e6636")',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="section-head full-width mb-50">
                <span className="icon icon-quote"></span>
                <br />
                <h4 className="title education">Testimonials</h4>
              </div>

              <div className="offset-md-1 col-md-10 text-center">
                {testimonials ? (
                  // <Carousel itemsToShow={1}>
                  //   {selectedTestimonials &&
                  //     selectedTestimonials.map((testimonial, index) => {
                  //       return (
                  //         <div class="citem" key={index}>
                  //           <div>
                  //             {" "}
                  //             <p>{testimonial.message}</p>
                  //             <h5>
                  //               {testimonial.name}, {testimonial.about}
                  //             </h5>
                  //           </div>
                  //         </div>
                  //       );
                  //     })}
                  // </Carousel>
                  <Pagination testimonials={selectedTestimonials}></Pagination>
                ) : null}
                <span className="buton text-center" style={{ padding: "30px" }}>
                  {/* eslint-disable-next-line */}
                  <a
                    href="/add-testomonial"
                    front="Add a Testimonial"
                    back=""
                    className=""
                  ></a>
                </span>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  const testimonials = state.firestore.ordered.testimonials;
  return {
    testimonials: testimonials,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "testimonials" }])
)(Testimonials);
