import React from 'react'
import { useContext } from 'react';
import {SwiperSlide,Swiper} from "swiper/react"
import 'swiper/swiper-bundle.css';
import './residenes.css'
import 'swiper/swiper.min.css'
import data from 'C:/Users/jok02/Desktop/pfa/immovff/src/resdata'
import {GeneralContext} from 'C:/Users/jok02/Desktop/pfa/immovff/src/GeneralContext'
const Res = () => {
   // const {data} = useContext(GeneralContext)
    return (
      <section className="r-wrapper">
          <div className="r-container paddings innerWidth">
              <div className="r-head flexColStart">
                  <span className="orangeText">Best Choices</span>
                  <span className="primaryText">Popular Residencies</span>
              </div>
              {console.log(data.nom)}
              <Swiper>
              {
                      data && data.map((annonce,i) => {
                        return(
                          <SwiperSlide key={i}>
                              {console.log(data.nom)}
                              <div className="r-card flexColStat">
                                  <img src={annonce.image} alt="annonce1" />
                                  <span className="r-price secondaryText">
                                      <span style={{color:"blue"}}>$</span>
                                      <span>{annonce.prix}</span>
                                  </span>
                                  <span className="primartText">{annonce.nom}</span>
                                  <span className="primaryText">{annonce.desc}</span>
                              </div>
                          </SwiperSlide>
                             
                             )
                      })
                  }
  
  
              </Swiper>
          </div>
      </section>
  )
}

export default Res