import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import './hero.css'
import imgA from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/acc2.jpg'
const Hero = () => {
  return (
    <>
    <section className="hero-wrapper">
        <div className="hero-container paddingd innerwidth flexCenter">
            <div className="hero-left flexColStart">
                <div className="hero-title">
                    <div className="icon-circle"></div>
                    <h1>somethig <br/>to put here</h1>
                </div>
                <div className="hero-desc flexColStart">
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </span>
                    <span>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  <span> Ut enim ad minim veniam, quis nostrud exercitation</span>
                    <span> ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
                <div className="search-bar flexCenter">
                    <HiLocationMarker color="blue" size={25}/>
                    <input type='text'/>
                    <button className="button">Search</button>
                </div>
            </div>
            <div className="hero-right flexCenter">
              <div className="image-container">
                <img src={imgA} alt="" />
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero