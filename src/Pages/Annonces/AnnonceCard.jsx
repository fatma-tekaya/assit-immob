import React from 'react'
import { Link } from 'react-router-dom'
import './annonce.css'
const AnnonceCard = (annonce) => {
    return (
        <>
        {console.log(annonce.annonce.nom)}
            <div className="card-container flexColCenter">
                <div className="card flexStart">
                    <img className="" src={annonce.image} />
                    <div className="card-body">
                        <h4 className="card-title">{annonce.nom}</h4>
                        <h4 className="card-loc">{annonce.local}</h4>
                        <h4 className="card-price">{annonce.prix}</h4>
                        <p className="card-desc">{annonce.desc}</p>
                    </div>
                    <div className=''>
                        <Link to="/details" className="button ">Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnnonceCard