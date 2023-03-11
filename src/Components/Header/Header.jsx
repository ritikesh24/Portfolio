import React from 'react'
import { CTA } from './CTA'
import { HeaderSocial } from './HeaderSocial'
import ME from '../../assets/me.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5 id='greet'>Hello I'm</h5>
        <h1>Ritikesh Gokhe</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
      </div>
    </header>
  )
}

export default Header
