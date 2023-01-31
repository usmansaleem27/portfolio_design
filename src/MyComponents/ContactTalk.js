import React from 'react'

const ContactTalk = () => {
  return (
    <div>
       <div class="talk_section">
        <div class="container">
            <div class="row">
                    <div class="col-12">
                        <p class="talk_heading mb-0">Let's Talk</p>
                    </div>
            </div>
        </div>
    </div>


    <div class="talk_form pt-lg-5 mt-lg-3 pt-md-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="talk_para">
                        <p class="talk_para_p">SEND US MESSAGE</p>
                    </div>
                    <div class="fullfill_form pt-3 pb-3">
                        <p class="mb-0 fullfill_form_p text-black-50">Please full fill this form or Using information on
                            the right.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="pt-lg-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form_input">
                        <input type="text" placeholder="Name"></input>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form_input">
                        <input type="text" placeholder="Email"></input>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="form_input">
                        <input type="text" placeholder="Website"></input>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="mt-5 pt-5">
                        <textarea class="form_text" cols="30" rows="2" placeholder="Message"></textarea>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="pt-5 mt-3 mb-5 pb-3">
                        <button class="btn btn-secondary rounded-0 submit_form">Submit Now</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ContactTalk
