/** @format */

import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './Portfolio.scss'
import './Portfolio.css'
import { FaLink } from 'react-icons/fa'
import ecom from './img/ecom.png'
import blogg from './img/blog.jpg'
import book from './img/book.png'

const Portfolio = () => {
  return (
    <section className='portfolio-section'>
      <Container id='portfolio' className='portfolio section-bg'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h1 style={{ marginLeft: '40%' }} className='purple'>
              <strong> Portfolio</strong>
            </h1>
            <p
              style={{
                marginLeft: '30%',
                marginTop: '5%',
                marginBottom: '5%',
              }}>
              Here Some of My Live Projects.You can check on
            </p>
          </div>

          <Row
            className='portfolio-container'
            data-aos='fade-up'
            data-aos-delay='200'>
            <Col md={3} className=' portfolio-item filter-app'>
              <div className='portfolio-wrap'>
                <img src={ecom} className='img-fluid' alt='' />
                <div className='portfolio-info'>
                  <h4>Proshop</h4>
                  <p>An Ecommerce Webapp</p>
                  <div className='portfolio-links'>
                    <a
                      href='https://proshopcart.herokuapp.com/'
                      target='_blank'
                      className='venobox'
                      title='Ecommerce Website'>
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} className='ml-5 portfolio-item filter-web'>
              <div className='portfolio-wrap'>
                <img src={book} className='img-fluid' alt='' />
                <div className='portfolio-info'>
                  <h4>Book Shopp</h4>
                  <p>An online book store</p>
                  <div className='portfolio-links'>
                    <a
                      href='https://amazing-jones-c1a1f9.netlify.app/'
                      target='_blank'
                      className='venobox'
                      title='Book Shop'>
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={3} className='ml-5 portfolio-item filter-app'>
              <div className='portfolio-wrap'>
                <img src={blogg} className='img-fluid' alt='' />
                <div className='portfolio-info'>
                  <h4>Freespeech4all</h4>
                  <p>Blogging Site</p>
                  <div className='portfolio-links'>
                    <a
                      href='https://freespeech4all.herokuapp.com/'
                      target='_blank'
                      className='venobox'
                      title='Blogging website'>
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} className='ml-2 '>
              <a
                href='https://github.com/Premraj01?tab=repositories'
                target='_blank'>
                <button className='learn-more '>
                  <span className='circle' aria-hidden='true'>
                    <span className='icon arrow'></span>
                  </span>
                  <span className='button-text'>More</span>
                </button>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio
