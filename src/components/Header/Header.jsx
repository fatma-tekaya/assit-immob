import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import logo from 'C:/Users/jok02/Desktop/pfa/immovff/src/assets/logo.png';
import './header.css'
// import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return{right:!menuOpened &&"-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="logo" width={160} />
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          {/* <a className="nav-link" href="#">About us</a> */}
          <a className="nav-link" href="/annonce">Annonces</a>
          <a className="nav-link" href="/#v-section">Value</a>
          <a className="nav-link" href="/#c-section">Contact us</a>
          <button className='button'>
            <a href="/login">Login</a>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)} >
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  )
}

export default Header