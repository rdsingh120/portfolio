import { FaUserAstronaut } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">:Hello World</span>
      <div className="buttons">
        <button
          className="contactMe"
          onClick={() => {
            console.log('Hello')
          }}
        >
          Contact Me <FaUserAstronaut />
        </button>
        <button className="ham-btn">
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  )
}
export default Navbar
