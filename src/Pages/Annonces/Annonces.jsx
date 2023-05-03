import { React, useContext } from 'react'
import AnnonceCard from './AnnonceCard'
import { GeneralContext } from '../../GeneralContext';
import { Link } from 'react-router-dom';
import { ImLocation } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";


import './annonce.css'
const Annonces = () => {
  const { data } = useContext(GeneralContext)
  return (
    <>
      <div className='grid-container flexStart '>
        {
          data.map((annonce, i) => {
            // console.log(annonce)
            return (

              <div className="card  ">
                <div className="i-container" >
                  <img className="" src={annonce.image} />
                </div>
                <div className="card-info">
                  <h4 className="card-title">{annonce.nom}</h4>
                  <div className='loc-pri'><ImLocation className='card-icon' /><span className="card-loc">{annonce.local}</span><br />
                    <ImCoinDollar className='card-icon' /> <span className="card-price">{annonce.prix}</span></div>
                  <p className="card-desc">{annonce.desc}</p>
                </div>
                <div className='bton-container'>
                  <Link to="/details" className="bton ">Details</Link>
                </div>
              </div>


            )
          })
        }
      </div>

    </>
  )
}

export default Annonces