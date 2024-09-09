import { TfiClose } from 'react-icons/tfi'
import './Modal.css'
import ContactForm from '../ContactForm/ContactForm'
const Modal = ({ func, showModal }) => {
  return (
    <div className={showModal ? 'modal-container' : 'hide'}>
      <div className="overlay"></div>
      <div className="modal">
        <button className="close-btn" onClick={func}>
          <TfiClose />
        </button>
        <ContactForm />
      </div>
    </div>
  )
}
export default Modal
