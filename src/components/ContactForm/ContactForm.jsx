import './ContactForm.css'
import Title from '../Title/Title'
import { useState } from 'react'
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const updateState = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const { name, email, subject, message } = contact
  return (
    <form action="">
      <Title title="send me a message" />
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={updateState}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={updateState}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={updateState}
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message"
          className="text-area"
          value={message}
          onChange={updateState}
        ></textarea>
      </div>
      <div className="form-row">
        <input
          className="submit-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            setContact({
              name: '',
              email: '',
              subject: '',
              message: '',
            })
          }}
        />
      </div>
    </form>
  )
}
export default ContactForm
