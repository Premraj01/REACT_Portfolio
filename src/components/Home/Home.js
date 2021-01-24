/** @format */

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import homeLogo from './img/home-main.svg'
import TypeWriter from './TypeWriter'

const Home = () => {
  return (
    <section>
      <Container fluid className='hero' id='home'>
        <Container className='hero-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 20 }} className='heading'>
                Hi There! I'M
                <strong className='author-name'> PREMRAJ</strong>
              </h1>

              <div style={{ marginLeft: 50 }}>
                <TypeWriter />
                <h3 style={{ marginTop: 10 }}>
                  And a&nbsp;
                  <strong className='purple'>Programming Enthusiast</strong>
                </h3>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home
