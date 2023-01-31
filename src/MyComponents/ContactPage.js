import React from 'react'
import Adress from './Adress'
import ContactTalk from './ContactTalk'
import Footer from './Footer'
import LogoNavbar from './LogoNavbar'
import Maps from './Maps'

const ContactPage = () => {
  return (
    <div>
        <LogoNavbar/>
        <Maps/>
        <ContactTalk/>
        <Adress/>
         <Footer/>
    </div>
  )
}

export default ContactPage