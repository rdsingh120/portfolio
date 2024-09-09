import './ContactForm.css'
import Title from '../Title/Title'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const ContactForm = () => {
  const form = useRef()
  const notify = () => toast('Message Sent')
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          notify()
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
    setContact({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

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
    <form ref={form} onSubmit={sendEmail}>
      <Toaster />
      <Title title="send me a message" />
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={updateState}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={updateState}
          required
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={updateState}
          required
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message"
          className="text-area"
          value={message}
          onChange={updateState}
          required
        ></textarea>
      </div>
      <div className="form-row">
        <input className="submit-btn" type="submit" />
      </div>
    </form>
  )
}
export default ContactForm
