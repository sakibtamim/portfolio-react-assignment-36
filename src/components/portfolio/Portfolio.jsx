import React from "react";
import "./portfolio.css";
import Crud from "../../assets/crud.png";
import GuessingGame from "../../assets/guessing_game.png";
import Zarrin from "../../assets/zarrin.png";
import Calculator from "../../assets/calculator.png";
import StrongPassword from "../../assets/password-strong.png";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div class="container">
          <div class="portfolio_head">
            <div class="row">
              <div class="col-lg-3 mx-auto text-center">
                <h2>Portfolio</h2>
              </div>
            </div>
          </div>
          <div class="portfolio_main">
            <div class="row row-gap-4 justify-content-center">
              <div class="col-lg-4 col-10 col-md-6">
                <div class="portfolio_body">
                  <img src={Crud} class="w-100 h-100" alt="" />
                  <div class="overlay text-center">
                    <h3>Simple JavaScript CRUD App</h3>
                    <a
                      href="https://sakibtamim.github.io/simple-crud-js/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-10 col-md-6">
                <div class="portfolio_body">
                  <img src={GuessingGame} class="w-100 h-100" alt="" />
                  <div class="overlay text-center">
                    <h3>Number guessing</h3>
                    <a
                      href="https://sakibtamim.github.io/Number-Guessing-Js/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-10 col-md-6">
                <div class="portfolio_body">
                  <img src={Zarrin} class="w-100 h-100" alt="" />
                  <div class="overlay text-center">
                    <h3>Zarrin WebPage</h3>
                    <a
                      href="https://sakibtamim.github.io/Zarrin-Website-Html/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-10 col-md-6">
                <div class="portfolio_body">
                  <img src={Calculator} class="w-100 h-100" alt="" />
                  <div class="overlay text-center">
                    <h3>simple javascript calculator</h3>
                    <a
                      href="https://sakibtamim.github.io/simple-calculator-js/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-10 col-md-6">
                <div class="portfolio_body">
                  <img src={StrongPassword} class="w-100 h-100" alt="" />
                  <div class="overlay text-center">
                    <h3>password strength checker js</h3>
                    <a
                      href="https://sakibtamim.github.io/Password-Strength-Checker-js/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
