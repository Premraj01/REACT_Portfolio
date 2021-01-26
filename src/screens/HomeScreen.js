/** @format */

import React from 'react'
import './HomeScreen.css'
import Hero from '../components/Home/Home'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Skills from '../components/Skills/Skills'
import PortFolio from '../components/PortFolio/Portfolio'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import { Row, Col, Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <div className='header'></div>

      <div className='body'>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <PortFolio />
        <Form />
      </div>
    </>
  )
}

export default HomeScreen
