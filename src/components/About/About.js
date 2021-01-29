/** @format */

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import './About.css'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import myImg from './img/avatar.svg'

const About = () => {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I am an aspiring programmer and I have at least learnt something,
              <br />
              <br />I am fluent in
              <i>
                <b className='purple'> Javascript, Python and C. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className='purple'>Web Development.</b>
              </i>
              <br />
              <br />
              My passion is to develope applications with
              <i>
                <b className='purple'> Modern Javascript Frameworks &nbsp;</b>
              </i>
              like
              <i>
                <b className='purple'>
                  {' '}
                  React.JS (though React is A library but not less powerful than
                  a Framework) and Node.JS
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/Premraj01'
                  title='GitHub'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/premraj-tripute-45364910a/'
                  target='_blank'
                  title='LinkedIn'
                  rel='noopener noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaLinkedin />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/PremrajTripute'
                  target='_blank'
                  title='Twitter'
                  rel='noopener noreferrer'
                  className='icon-colour  home-social-icons'>
                  <FaTwitter />
                </a>
              </li>

              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/prem.raj_12/'
                  target='_blank'
                  title='Instagram'
                  rel='noopener noreferrer'
                  className='icon-colour home-social-icons'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
