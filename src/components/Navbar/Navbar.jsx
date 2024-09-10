import { FaUserAstronaut } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { FaCircle } from 'react-icons/fa6'

import './Navbar.css'
import { useState } from 'react'

const Navbar = ({ contactForm, sideMenu }) => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className="navbar">
      <div className="logo-container">
        <span className="logo">
          <FaCircle />
        </span>
        <span className="logo">
          <FaCircle />
        </span>
      </div>
      <div className="buttons">
        <button className="contactMe" onClick={contactForm}>
          Contact Me <FaUserAstronaut />
        </button>
        {/* <button className="color-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button> */}
        <button className="ham-btn" onClick={sideMenu}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  )
}
export default Navbar
