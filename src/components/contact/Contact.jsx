import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedin}from 'react-icons/fa'
import{FaWhatsappSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      
        <h5>Get In TOUCH</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>kumarmuravath@gmail.com</h5>
              <a href="mailto:kumarmuravath@gmail.com" target='_blank'>Send a message</a>

            </article>
            <article className='contact__option'>
              <FaLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Message any Queries</h5>
              <a href="https://www.linkedin.com/in/malothu-thirupathi-92a09426a" target='_blank'>Send a message</a>

            </article>
            <article className='contact__option'>
              <FaWhatsappSquare className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+917671852358</h5>
              <a href="https://api.whatsapp.com/send?phone=917671852358" target='_blank'>Send a message</a>

            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message"  rows="7" placeholder='Your Message'required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

      </section>
    
  )
}

export default Contact