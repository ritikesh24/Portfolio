import React from 'react'
import '../Footer/footer.css'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        Ritikesh
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>about</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebok.com'>
          <FaFacebookSquare />
        </a>
        <a href='https://twitter.com'>
          <FaTwitterSquare />
        </a>
        <a href='https://instagram.com'>
          <BsInstagram />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Ritikesh Gokhe. All rights reserved</small>
      </div>
    </footer>
  )
}
