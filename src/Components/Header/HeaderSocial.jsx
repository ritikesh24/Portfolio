import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div>
      <div className='header_social'>
        <a href='https://linkedin.com' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://github.com' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://instagram.com' target='_blank'>
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}
