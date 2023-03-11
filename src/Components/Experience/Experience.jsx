import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import '../Experience/experience.css'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skiills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Devlopment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Devlopment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Oracle Sql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill></BsPatchCheckFill>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
