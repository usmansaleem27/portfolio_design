import React from 'react'
import AboutUsA from './images/home/AboutUsA.jpg'
import AboutUsB from './images/home/AboutUsB.jpg'
import AboutUSSummer from './images/home/AboutUSSummer.jpg'

const AboutUs = () => {
  return (
    <div>
       <div class="about_cards pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="pt-lg-5 mt-3 pt-3 pb-lg-0 pb-md-0 pb-4">
                        <div class="about_top">
                            <h4 class="text-center">About</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-lg-5 mt-lg-5 pt-3 mt-3">
                <div class="col-lg-6 col-12">
                    <div class="about_img">
                        <img src={AboutUsA} class="img-fluid" alt=""></img>

                        <div class="custom_opacity">
                            <div class="image_inner_text">01</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="d-flex align-items-center h-100">
                        <p class="mb-0 interior_p pt-lg-0 pt-md-0 pt-4">As an interior room, the space is enclosed with a glass partition and
                            a sliding CNC milled panel to encourage the flow of air and light into the nursery. Lit from
                            a cove above, the surface of the milled panel was carved with a delicate fluid pattern and a
                            subtly undulating surface to encourage the play of light in a relatively dark space A
                            peekaboo game of visibility is played around the bedroom, with felt drapery panels in the
                            glass corner, the sliding panel opening and closing between the bedroom and the desk,</p>
                    </div>
                </div>
            </div>
            <div class="row pt-3 mt-3">
                <div class="col-lg-6 col-12">
                    <div class="about_img">
                        <img src={AboutUsB} class="img-fluid" alt=""></img>

                        <div class="custom_opacity">
                            <div class="image_inner_text">02</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="d-flex align-items-center h-100">
                        <p class="mb-0 interior_p pt-lg-0 pt-md-0 pt-4">As an interior room, the space is enclosed with a glass partition and
                            a sliding CNC milled panel to encourage the flow of air and light into the nursery. Lit from
                            a cove above, the surface of the milled panel was carved with a delicate fluid pattern and a
                            subtly undulating surface to encourage the play of light in a relatively dark space A
                            peekaboo game of visibility is played around the bedroom, with felt drapery panels in the
                            glass corner, the sliding panel opening and closing between the bedroom and the desk,</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="pt-lg-5 mt-3 pt-3">
                        <div class="about_top">
                            <h4 class="text-center">Concept</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="summer_intensive pt-lg-5 pt-4 pb-lg-5 pb-4">
                        <h4>SUMMER INTENSIVE</h4>
                        <p>Develop fluency in prototyping and the practical application of visionary ideas</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="">
                        <img src={AboutUSSummer} class="img-fluid" alt=""></img>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="">
                        <div class="ps-lg-4 ms-1 ps-3">
                            <span class="summer_numbers">01</span>
                            <span class="summer_paragraphs text-black-50 ps-lg-4 ps-md-3 ps-2">Develop technical
                                proficiency</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="ps-lg-4 ms-1 ps-3">
                            <span class="summer_numbers">02</span>
                            <span class="summer_paragraphs text-black-50 ps-lg-4 ps-md-3 ps-2">Create innovative
                                approaches to human</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="ps-lg-4 ms-1 ps-3">
                            <span class="summer_numbers">03</span>
                            <span class="summer_paragraphs text-black-50 ps-lg-4 ps-md-3 ps-2">Create a collaborative
                                studio life and culture</span>
                        </div>
                    </div>
                    <div class="">
                        <div class="ps-lg-4 ms-1 ps-3">
                            <span class="summer_numbers">04</span>
                            <span class="summer_paragraphs text-black-50 ps-lg-4 ps-md-3 ps-2">Develop fluency in
                                prototyping and practical</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="pt-lg-5 mt-3 pt-3 pb-lg-5 pb-3">
                        <div class="about_top">
                            <h4 class="text-center">Team Member</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default AboutUs
