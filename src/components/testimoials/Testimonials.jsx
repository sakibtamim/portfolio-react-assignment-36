import React from "react";
import "./testimonials.css";
import TestiPerson from "../../assets/testimonial-per.jpeg";
const Testimonials = () => {
  return (
    <>
      <section id="testimonial">
        <div class="container">
          <div class="row row-gap-5 justify-content-between align-items-center">
            <div class="col-lg-6 col-12 col-md-6">
              <div class="testi_head">
                <div class="row">
                  <div class="col-lg-6">
                    <h2>testimonial</h2>
                  </div>
                </div>
              </div>
              <div class="testi_body">
                <p>
                  A <span>hardworking student</span> in our Frontend Development
                  with React course. They have solid skills in HTML, CSS,
                  Bootstrap, and JavaScript, and consistently complete their
                  work on time. Their ability to solve problems and communicate
                  effectively shows promise for a<span>successful career</span>
                  in frontend development.
                </p>
                <h5>md. razibur rahman</h5>
                <h6>Senior faculty (web & software)</h6>
              </div>
            </div>
            <div class="col-lg-4 col-4 col-md-4">
              <div class="box_photo">
                <img src={TestiPerson} class="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
