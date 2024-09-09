import './ContactForm.css'
import Title from '../Title/Title'
const ContactForm = () => {
  return (
    <form action="">
      <Title title="send me a message" />
      <div className="form-row">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className="form-row">
        <input type="text" name="subject" placeholder="Subject" />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message"
          className="text-area"
        ></textarea>
      </div>
      <div className="form-row">
        <input className="submit-btn" type="submit" />
      </div>
    </form>
  )
}
export default ContactForm
