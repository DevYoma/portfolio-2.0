import React, { useState } from 'react'
import './Footer.scss'

import { images } from '../../constants'
import { AppWrap, MotionWrap} from '../../Wrapper'
import { client } from '../../client'


const Footer = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    message: ""
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, 
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    setLoading(true)

    const contact = {
      _type: 'contact', 
      name: name,
      email: email,
      message: message
    }

    // sanity client to upload information
    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <React.Fragment>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:lawrenceyoma@gmail.com" className="p-text">Lawrenceyoma@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +2347061393489" className="p-text">+234 706 1393 489</a>
        </div>
      </div>

      {
        !isFormSubmitted ? 
        <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input 
            type="text" 
            className="p-text"
            placeholder="Your Name"
            value={name}
            name="name"
            onChange={handleChangeInput}
          />
        </div>

        <div className="app__flex">
          <input 
            type="email" 
            className="p-text"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <textarea 
            className='p-tet'
            placeholder="Your message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>

        <button
          type="button"
          className="p-text"
          onClick={handleSubmit}
        >
          {loading ? "Sending" : "Send Message" }
        </button>

      </div> 
        : 
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      }
      
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'app__whitebg'
)