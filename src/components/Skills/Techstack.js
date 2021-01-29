/** @format */

import React from 'react'
import './Skills.css'
import { Row, Col } from 'react-bootstrap'
import {
  SiRedux,
  SiPostman,
  SiHeroku,
  SiCsswizardry,
  SiBootstrap,
} from 'react-icons/si'
import { DiJsBadge, DiMongodb, DiVisualstudio } from 'react-icons/di'
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaWindows,
} from 'react-icons/fa'

const Techstack = () => {
  return (
    <div>
      <h1
        className='project-heading'
        style={{ padding: '3%', marginLeft: '35%', color: 'white' }}>
        Professtional &nbsp;
        <strong className='purple'>Skillset </strong>
      </h1>

      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className='tech-icons'>
          <i
            className='devicon-c-line'
            style={{ color: 'white' }}
            title='C-Programming'></i>
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <i
            className='devicon-python-plain-wordmark'
            style={{ color: 'white' }}
            title='Python'></i>
        </Col>

        <Col xs={4} md={2} className='tech-icons'>
          <DiJsBadge style={{ color: 'white' }} title='JavaScript' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaReact style={{ color: 'white' }} title='React.JS' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <SiRedux style={{ color: 'white' }} title='Redux' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaNode style={{ color: 'white' }} title='Node.JS' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <i
            className='devicon-express-original-wordmark colored'
            style={{ color: 'white' }}
            title='Express.JS'></i>
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <DiMongodb style={{ color: 'white' }} title='MongoDB' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaHtml5 style={{ color: 'white' }} title='HTML5' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <SiCsswizardry style={{ color: 'white' }} title='CSS' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <SiBootstrap style={{ color: 'white' }} title='Bootstrap' />
        </Col>
      </Row>
      <h1
        className='project-heading'
        style={{ marginLeft: '40%', color: 'white' }}>
        <strong className='purple'>Tools</strong> I use
      </h1>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className='tech-icons'>
          <DiVisualstudio style={{ color: 'white' }} title='VS-code' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <SiPostman style={{ color: 'white' }} title='Postman' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaGitAlt style={{ color: 'white' }} title='Git' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <SiHeroku style={{ color: 'white' }} title='Heroku' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaLinux style={{ color: 'white' }} title='Linux' />
        </Col>
        <Col xs={4} md={2} className='tech-icons'>
          <FaWindows style={{ color: 'white' }} title='Windows' />
        </Col>
      </Row>
    </div>
  )
}

export default Techstack
