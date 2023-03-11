import React from 'react'
import '../SelfInfo/about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { GiSoapExperiment } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='about image' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className='about_card'>
              <GiSoapExperiment className='about_icon' />
              <h5>Hands on Skills</h5>
              <small>10+ Skills</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            "Hello! I am a software engineer with one year of experience in the
            industry. I have a strong background in programming and am skilled
            in several programming languages such as Python, Java, and
            JavaScript.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
