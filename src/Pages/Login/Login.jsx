import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GeneralContext } from '../../GeneralContext'
import image from "C:/Users/jok02/Desktop/pfa/immovff/src/assets/imgsign.PNG"
import './login.css'
const Login = () => {

  const { users } = useContext(GeneralContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const save = (event) => {
    event.preventDefault() // annuler l'action par defaut du bouton (refresh)
    console.log(form)
    // && u.role =="user"
    // let exist = users.find(u=> u.email === form.email && u.password === form.password )
    if (users.find(u => u.email === form.email && u.password === form.password && u.role === "client")) {
      navigate('/annonce')
    } else if (users.find(u => u.email === form.email && u.password === form.password && u.role === "agent")) 
    { navigate('/contact') }
    else {
      alert('Email or password invalid !')
    }
  }
  const setFormValue = (event, attribut) =>
    setForm({ ...form, [attribut]: event.target.value })
  return (
    <>
      <div className="l-container">
        <form className="l-form" onSubmit={save}>
          <div className="l-content">
            <h3 className="l-title">LOGIN</h3>
            <div className="form-group flexColStart ">
              <label>Email</label>
              <input required
                type="email"
                className=" input-g"
                placeholder="Enter email"
                onChange={(event) => setFormValue(event, 'email')}
              />
            </div>
            <div className="form-group flexColStart">
              <label>Password</label>
              <input required
                type="password"
                className=" input-g"
                placeholder="Enter password"
                minLength="4" onChange={(event) => setForm({ ...form, password: event.target.value })}
              />
            </div>
            <p className="forgot-password "><a href="#"> Forgot password?</a> </p>
            <div className=" flexCenter ">
              <button type="submit" className="button btnform">
                Submit
              </button>

              {/* <button type="submit" className=" btn m-2"
              onClick={(e)=>register(e , form)}>
                Register
              </button> */}
            </div>

            <p>Don't have an account? <Link to="/signup" className="register">Register here</Link></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login