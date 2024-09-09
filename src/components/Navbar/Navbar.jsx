import { FaUserAstronaut } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaCircle } from 'react-icons/fa6'

import './Navbar.css'

const Navbar = ({ contactForm, sideMenu }) => {
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
        <button className="ham-btn" onClick={sideMenu}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  )
}
export default Navbar
