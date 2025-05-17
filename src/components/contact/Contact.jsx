import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <div class="container">
          <div class="con_head">
            <div class="row">
              <div class="col-lg-4 mx-auto text-center">
                <h2>contact me</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center row-gap-3">
            <div class="col-lg-2"></div>
            <div class="col-lg-4 col-8 col-md-6 text-center">
              <div class="con_inner">
                <p>
                  <i class="fa-solid fa-envelope"></i> sakib.tamim@gmail.com
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-8 col-md-6 text-center">
              <div class="con_inner">
                <p>
                  <i class="fa-solid fa-phone"></i> +880-162186-9540
                </p>
              </div>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-4 col-8 col-md-6 text-center">
              <div class="con_inner">
                <p>
                  <i class="fa-solid fa-location-dot"></i> Sobhanbagh, Savar,
                  Dhaka - 1340
                </p>
              </div>
            </div>
          </div>

          <div class="con_bottom_icons">
            <div class="row">
              <div class="d-flex justify-content-around col-lg-4 col-6 mx-auto text-center">
                <a href="www.facebook.com">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="www.twitter.com">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="www.linkedin.com">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="www.whatsapp.cpm">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
