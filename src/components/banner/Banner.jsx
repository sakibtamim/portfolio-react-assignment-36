import React from "react";
import "./banner.css";
import SakibPic from "../../assets/sakib.png";
const Banner = () => {
  return (
    <>
      <section id="banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-6">
              <div class="ban_head">
                <h1>
                  I'm <span class="type"> Md nazmus sakib tamim</span>
                </h1>
                <p>Front-end developer with react</p>
                <a href="#">Contact me</a>
              </div>
            </div>
          </div>
        </div>

        <div class="banner_bg text-end">
          <div class="container">
            <img class="sakibBw" src={SakibPic} alt="sakib" />
          </div>
        </div>
        <div class="socials">
          <div class="container">
            <div class="social_icons d-flex flex-column align-items-end row-gap-3">
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
      </section>
    </>
  );
};

export default Banner;
