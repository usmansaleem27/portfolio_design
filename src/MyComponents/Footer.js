import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
          <hr class="mb-0"></hr>

    <div class="footer_hr">
        <div class="container-fluid g-0">
            <div class="row g-0">
                <div class="col-6">
                    <div class="footer_vr">
                    </div>
                </div>
                <div class="col-6"></div>
            </div>
        </div>
        <div class="">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer_creater_note">
                            <p class="mb-0 text-center pt-5 pb-3 ps-3 pe-3">
                                &copy; Copyright <Link to="/submit">PlomX</Link>
                                - Created by <br></br> <Link to="/states">Usman
                                    Saleem</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="pb-lg-5 mb-3 pt-3">
                <div class="d-flex justify-content-center pb-2 mb-1">
                    <div class="social_links">
                            <div class="social_links_hover">
                                <span class="my_links mb-0 ps-5 small">Behance</span>
                            </div>
                    </div>
                    <div class="social_links">
                            <div class="social_links_hover">
                                <span class="my_links mb-0 ps-5 small">Facebook</span>
                            </div>
                    </div>
                    <div class="social_links">
                            <div class="social_links_hover">
                                <span class="my_links mb-0 ps-5 small">Twitter</span>
                            </div>
                    </div>
                    <div class="social_links">
                        <div class="d-none d-lg-block d-md-block">
                            <div class="social_links_hover small">
                                <span class="my_links mb-0 ps-5">Instagram</span>
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

export default Footer
   