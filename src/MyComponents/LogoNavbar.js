import React from 'react';
import PortfolioLogo from './images/logo/Logo.png';
import { BsArrowLeft } from 'react-icons/bs';
import {Link} from 'react-router-dom'

const LogoNavbar = () => {
  return (
    <div>
         
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="pt-lg-5 pt-md-3 pt-3">
                    <Link to="/">
                        <img src={PortfolioLogo} class="img-fluid" alt="logo"></img>
                    </Link>
                </div>
            </div> 
        </div>
    </div>

    <header class="top_navbar mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="left-button float-left p-color-bg"><a href=""><span><i
                                    class=""><BsArrowLeft/></i> Back</span></a></div>
                    <div class="right-button float-right p-color-bg"><Link to=""><span>Work History<i
                                    class=""><BsArrowLeft/></i></span></Link></div>
                    <div class="menu_items float-right">
                        <ul class="nav">
                            <li><Link to="/new_page">About</Link></li>
                            <li><a href="">Concept</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">News</a></li>
                            <li><Link to="/contact_page">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default LogoNavbar
