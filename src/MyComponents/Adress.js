import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";


const Adress = () => {
  return (
    <div>
        <div class="adress_font pt-lg-5 pb-lg-5 mb-lg-5 mt-lg-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-12">
                    <div class="">
                        <div class="pt-lg-0 pt-md-0 pt-3">
                            <h5>Contact Info</h5>
                        </div>
                    </div>
                    <p class="footer_font">+88 01682648101</p>
                    <p class="footer_font">+88 01682648101</p>
                    <p class="footer_font">info@backpiperarch.com</p>
                    <p class="footer_font">help@backpiperarch.com</p>

                </div>
                <div class="col-lg-3 col-md-4 col-12">
                    <div class="">
                        <div class="pt-lg-0 pt-md-0 pt-3">
                            <h5>Adress</h5>
                        </div>
                    </div>
                    <div class="pe-lg-5 footer_font">
                        <p>128 West 21th Street, Suite 721
                            New York BD 23465</p>
                        <p>NYC street 4 ,Long Island,
                            Suite 721 New York NY 10010</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-12">
                    <div class="">
                        <div class="pt-lg-0 pt-md-0 pt-3">
                            <h5>Main Office</h5>
                        </div>
                    </div>
                    <div class="pe-3">
                        <p class="footer_font">128 West 21th Street, Suite 721
                            New York BD 23465</p>
                    </div>
                    <div class="contact_icon">
                        <i class="bi bi-facebook pe-lg-4 fs-6"><BsFacebook/></i>
                        <i class="bi bi-pinterest pe-lg-4 fs-6"><BsTwitter/></i>
                        <i class="bi bi-messenger pe-lg-4 fs-6"><BsMessenger/></i>
                        <i class="bi bi-twitter pe-lg-4 fs-6"><BsWhatsapp/></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Adress
