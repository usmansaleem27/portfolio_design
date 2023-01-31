import React from 'react'
import LogoNavbar from './LogoNavbar';
import Footer from './Footer';
import AboutCarousel from './AboutCarousel';
import AboutUs from './AboutUs';
import DeveloperCards from './DeveloperCards';
import Timeline from './Timeline';
import AboutAdvertisement from './AboutAdvertisement';


const NewPage = () => {
  return (
    <div>
        <LogoNavbar/>
        <AboutCarousel/>
        <AboutUs/>
        <DeveloperCards/>
        <Timeline/>
        <AboutAdvertisement/>
        <Footer/>
      </div>
  )
}

export default NewPage
