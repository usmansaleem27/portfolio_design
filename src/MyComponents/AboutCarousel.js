import React from 'react'
import AboutA from './contact/AboutA.jpg'
import AboutB from './contact/AboutB.jpg'
import AboutC from './contact/AboutC.jpg'
import { BsCircleFill } from "react-icons/bs";


const AboutCarousel = () => {
  return (
    <div>
      
    <div className="pt-lg-5 pt-md-3 pt-3 mt-5">
        <div className="container-fluid g-0">
            <div className="row g-0">
                <div className="col-12">
                    <div className="">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-inner contact_carousel">
                                <div className="carousel-item active">
                                    <img src={AboutA} className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={AboutB} className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={AboutC} className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="">
                                    <div className="contact_carousel_icons text-center text-white">
                                        <i className="bi bi-circle-fill pe-2 small"
                                            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                            classNameName="active" aria-current="true" aria-label="Slide 1"><BsCircleFill/></i>
                                        <i className="bi bi-circle-fill pe-2 small"
                                            data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                            aria-label="Slide 2"><BsCircleFill/></i>
                                        <i className="bi bi-circle-fill small" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="2" aria-label="Slide 3"><BsCircleFill/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutCarousel

  