/** @format */

import React from 'react'
import './Resume.css'
import { Container } from 'react-bootstrap'

const Resume = () => {
  return (
    <Container fluid className='resume-section' id='about'>
      <section id='resume' className='resume'>
        <div className='container'>
          <div className='section-title'>
            <h2 style={{ marginLeft: '40%' }} className='purple'>
              Resume
            </h2>
            <p style={{ marginLeft: '10%' }}>
              Here is my Resume for reference.The information about my Education
              ,Experience ,Courses, Achievement.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <h3 className='resume-title'>Sumary</h3>
              <div className='resume-item pb-0'>
                <h4>Premraj Tripute</h4>
                <p>
                  <em>
                    I am an IT engineer. I Love programming and web development.
                    I Love to learn things and build new things.
                  </em>
                </p>
                <ul>
                  <li>Satara ,MH ,India</li>
                  <li>+91-7020817398</li>
                  <li>premrajtripute777@gmail.com</li>
                </ul>
              </div>

              <h3 className='resume-title'>Education</h3>
              <div className='resume-item'>
                <h4>Bachelor of Engineering</h4>
                <h5>2015 - 2020</h5>
                <p>
                  <em>
                    Vidya Pratishthan's Kamalnayan Bajaj Institute of
                    Engineering and Technology, Baramati
                  </em>
                </p>
                <p>
                  I have completed my Bachelor's degree from this college with
                  &nbsp;
                  <span className='purple'>
                    <strong>CGPA of 6.34</strong>
                  </span>{' '}
                  in the Year 2020
                </p>
              </div>
              <div className='resume-item'>
                <h4>HSC</h4>
                <h5>2013 - 2015</h5>
                <p>
                  <em>Maharaja Sayajiorao Jr. college Satara</em>
                </p>
                <p>
                  I have completed my HSC from this college with &nbsp;
                  <span className='purple'>
                    <strong>aggregate of 62.62%</strong>
                  </span>{' '}
                  in the Year 2015
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <h3 className='resume-title'>Courses and Achievements </h3>
              <div className='resume-item'>
                <h4>SalesForce ADX-201 workshop</h4>
                <h5>2019</h5>
                <p>
                  <em>SalesForce Trailblazers</em>
                </p>
                <ul>
                  <li>
                    It was 6 days where I learned about SalesForce Platform and
                    Earn{' '}
                    <span className='purple'>
                      <strong>15 Badges Including 3 superbadges</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='resume-item'>
                <h4>NPTEL Certificate for DBMS</h4>
                <h5>2018 - 2019</h5>
                <p>
                  <em>NPTEL</em>
                </p>
                <ul>
                  <li>
                    Completed DBMS Course with{' '}
                    <span className='purple'>
                      <strong>72% of marks</strong>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='resume-item'>
                <h4>Certificate on Python for Data science</h4>
                <h5> 2019</h5>
                <p>
                  <em>IBM</em>
                </p>
                <ul>
                  <li>Completed basic Certificate Course on Data science</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Resume
