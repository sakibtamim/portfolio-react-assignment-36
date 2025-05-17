import React from "react";
import "./about.css";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Bootstrap from "../../assets/bootstrap.png";
import JavaScript from "../../assets/Js.png";
import Figma from "../../assets/figma.png";
import Git from "../../assets/git.png";
import Sass from "../../assets/sass.png";
const About = () => {
  return (
    <>
      <section id="about">
        <div class="container">
          <div class="about_head">
            <div class="row">
              <div class="col-lg-3">
                <h2>About</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-11 offset-lg-1 col-10 offset-2">
                <p>
                  Hey there! I'm a passionate Frontend Developer dedicated to
                  crafting sleek, dynamic, and user-friendly web experiences.
                  With strong expertise in HTML, CSS, Bootstrap, and JavaScript,
                  I thrive on turning ideas into interactive realities.
                  <span>
                    I am trustworthy, creative, and an effective communicator.
                  </span>
                  I enjoy solving challenges, optimizing performance, and
                  building products that not only look great but feel amazing to
                  use. Dive into my portfolio and explore the projects I’ve been
                  creating — let's build something awesome together!
                </p>
              </div>
            </div>
          </div>

          <div class="about_body">
            <div class="row">
              <div class="col-lg-3 mx-auto text-center">
                <h2>my skills</h2>
              </div>
            </div>
            <div class="row row-gap-4 justify-content-center">
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Html} alt="html" />
                  <h6>Html5</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Css} alt="css" />
                  <h6>css3</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Bootstrap} alt="bootstrap" />
                  <h6>Bootstrap</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={JavaScript} alt="JavaScript" />
                  <h6>JavaScript</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Figma} alt="figma" />
                  <h6>figma</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Git} alt="git" />
                  <h6>git</h6>
                </div>
              </div>
              <div class="col-lg-3 col-6 col-md-4">
                <div class="inner text-center">
                  <img src={Sass} alt="sass" />
                  <h6>sass</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
