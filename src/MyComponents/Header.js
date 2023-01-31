import React from "react";
import SlideA from "./images/home/SlideA.jpg";
import SlideB from "./images/home/SlideB.jpg";
import SlideC from "./images/home/SlideC.jpg";
import SlideD from "./images/home/SlideD.jpg";
import SlideE from "./images/home/SlideE.jpg";
import PortfolioLogo from "./images/logo/Logo.png";
import { BsCircleFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <section id="home_page_design">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="carousel_a">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="true"
                >
                  <div className="carousel-inner home_carousel">
                    <div className="carousel-item active">
                      <img
                        src={SlideA}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={SlideB}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={SlideC}
                        className="d-block w-100 img-fluid"
                        alt="..."
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="carousel_icons">
                  <div className="d-flex flex-column">
                    <i
                      className="bi bi-circle-fill text-white"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <BsCircleFill />
                    </i>
                    <i
                      className="bi bi-circle-fill text-white"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <BsCircleFill />
                    </i>
                    <i
                      className="bi bi-circle-fill text-white"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <BsCircleFill />
                    </i>
                  </div>
                </div>
                <div className="work_station">
                  <div className="">
                    <h3 className="mb-0">WORK HISTORY</h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="my_button pt-2 pb-2">
                      ENTER INSITE
                    </button>
                  </div>
                </div>
                <div className="footer_social_links">
                  <div className="d-flex justify-content-center pb-2 mb-1">
                    <div className="social_links">
                      <div className="social_links_hover">
                        <span className="my_twitter mb-0 ps-5 small">
                          Behance
                        </span>
                      </div>
                    </div>
                    <div className="social_links">
                      <div className="social_links_hover">
                        <span className="my_twitter mb-0 ps-5 small">
                          Facebook
                        </span>
                      </div>
                    </div>
                    <div className="social_links">
                      <div className="social_links_hover">
                        <span className="my_twitter mb-0 ps-5 small">
                          Twitter
                        </span>
                      </div>
                    </div>
                    <div className="social_links">
                      <div className="social_links_hover small">
                        <span className="my_twitter mb-0 ps-5">Instagram</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio_logo">
                <div className="">
                  <img src={PortfolioLogo} className="img-fluid" alt=""></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="carousel_b">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="true"
                >
                  <div className="carousel-inner home_carousel">
                    <div className="carousel-item active">
                      <img
                        src={SlideD}
                        className="d-block img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={SlideC}
                        className="d-block  img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={SlideE}
                        className="d-block  img-fluid"
                        alt="..."
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="carousel_icons_b">
                  <div className="">
                    <div className="d-flex flex-column">
                      <i
                        className="bi bi-circle-fill text-white"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        aria-current="true"
                        aria-label="Slide 1"
                      >
                        <BsCircleFill />
                      </i>
                      <i
                        className="bi bi-circle-fill text-white"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      >
                        <BsCircleFill />
                      </i>
                      <i
                        className="bi bi-circle-fill text-white"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      >
                        <BsCircleFill />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="work_station">
                  <div className="">
                    <h3 className="mb-0">WORK STATION</h3>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="my_button ps-0 pt-2 pb-2">
                      <Link to="/new_page" className="pt-2 pb-2 ps-4">
                        ENTER INSITE
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="creater_msg">
                  <div className="my_note">
                    <p className="mb-0 text-center pb-3 ps-3 pe-3">
                      &copy; Copyright <a href="#">PlomX</a>- Created by{" "}
                      <a href="https://www.linkedin.com/in/usman-saleem-541425253">
                        Usman Saleem
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
