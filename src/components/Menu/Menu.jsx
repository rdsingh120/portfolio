import SideLinks from '../SideLinks/SideLinks'
import './Menu.css'
import { TfiClose } from 'react-icons/tfi'
const Menu = ({ func, className, overlay2 }) => {
  return (
    <>
      <div className={overlay2}></div>
      <div className={className}>
        <button className="close-btn" onClick={func}>
          <TfiClose />
        </button>
        <div className="links">
          <SideLinks />
        </div>
      </div>
    </>
  )
}
export default Menu
