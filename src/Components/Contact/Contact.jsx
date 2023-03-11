import React from 'react'
import '../Contact/contact.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { GiMailbox } from 'react-icons/gi'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <SiGmail className='contact_option-icon'></SiGmail>
            <h4>Email</h4>
            <h5>ritikesh.m.gokhe@gmail.com</h5>
            <a href='mailto:ritikesh.m.gokhe@gmial.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
            <h4>Whatsapp</h4>
            <h5>ritikesh.m.gokhe@gmail.com</h5>
            <a href='https://www.linkedin.com/messaging' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'></BsLinkedin>
            <h4>Linkend</h4>
            <h5>ritikesh.m.gokhe@gmail.com</h5>
            <a
              href='https://api.whatsapp.com/send?phone+918237682048'
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>
        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Write Your EmailId' />
          <textarea
            name='message'
            rows='7'
            placeholder='Write a Message'
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
