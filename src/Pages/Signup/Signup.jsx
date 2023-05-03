import React, { useContext, useState } from 'react'
import { GeneralContext } from '../../GeneralContext'
import { useNavigate } from 'react-router-dom'
import './signup.css'
import image from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/imgsign.PNG'
const Signup = () => {
    const { users, register } = useContext(GeneralContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const save = (event) => {
        event.preventDefault() // annuler l'action par defaut du bouton (refresh)
        console.log(form)
    }
    return (
        <>
            <section className="s-wrapper" >
                <div className="s-container paddings innerWidth flexCenter">
                    <div className="s-left">
                        <div className="image2-container">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="s-right">
                        <h2 className='reg-title'>Registration</h2>

                        <form className="s-form " onSubmit={save}>
                            <div className="input-box">
                                <input type="text" className='input-g'  placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <input type="text" className='input-g' placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <input type="password" className='input-g' placeholder="Create password" required />
                            </div>

                            <div className="flexColStart">
                                <input type="Submit" className="button btn-reg" value="Register" onClick={(e) => register(e, form)} />
                            </div>
                            <div className="text">
                                <h5>Already have an account? <a className='login-now' href="/login">Login now</a></h5>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
