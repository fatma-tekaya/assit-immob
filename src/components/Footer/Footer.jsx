import React from 'react'
import logo from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/logo.png'
import './footer.css'
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";
const Footer = () => {
  return (
    <>
    <section className="f-wrapper">
        <div className="f-container paddings innerWidth flexCenter">
            <div className="f-left flexColStart">
                <img src={logo} alt="" width={140}/>
                <span className='secondaryText'>
                    Our vision is to make all people<br/>
                    the best place to live for them.<br/>
                    © All rights reserved
                </span>
            </div>
            <div className="f-right flexColStart">
                <span className="primaryText">Information</span>
                <span className="orangeText icons">
                    <IoLogoInstagram  size={30}/>
                    <IoLogoFacebook  size={30}/>
                    <IoLogoLinkedin  size={30}/>
                    <IoLogoPinterest  size={30}/>
                
                </span>
                {/* <div className="f-menu flexCenter">
                    <span>Property</span>
                    <span>Services</span>
                    <span>About Us</span>
                    <span>Contact</span>
                </div> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer