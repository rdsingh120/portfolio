import { TfiClose } from 'react-icons/tfi'
import './Modal.css'
const Modal = ({func, showModal}) => {
  
  return (
    <div className={showModal ? 'modal-container' : 'hide'}>
      <div id="overlay"></div>
      <div className="modal">
        <button className="close-btn" onClick={func}>
          <TfiClose />
        </button>
      </div>
    </div>
  )
}
export default Modal
