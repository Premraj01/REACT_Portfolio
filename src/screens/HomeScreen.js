/** @format */

import React, { useRef, useEffect } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import './HomeScreen.css'
import './Header.css'
import Hero from '../components/Home/Home'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Skills from '../components/Skills/Skills'
import PortFolio from '../components/PortFolio/Portfolio'
import Form from '../components/Form/Form'
import {
  FaHome,
  FaUser,
  FaTools,
  FaFileAlt,
  FaLaptopCode,
  FaPhoneAlt,
  FaHamburger,
} from 'react-icons/fa'

const HomeScreen = () => {
  const homeRef = useRef(null)
  useEffect(() => {
    const home = homeRef.current
    home.click()
  }, [])

  return (
    <>
      <header id='header' className='d-flex flex-column justify-content-center'>
        <div className='nav-items'>
          <div>
            <NavHashLink
              ref={homeRef}
              smooth
              to='#hero'
              className='icon'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}>
              <FaHome />
            </NavHashLink>
            <NavHashLink
              smooth
              id='aboutNav'
              to='#about'
              className='icon'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}>
              <FaUser />
            </NavHashLink>
            <NavHashLink
              smooth
              to='#resume'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}
              className='icon'>
              <FaFileAlt />
            </NavHashLink>
            <NavHashLink
              smooth
              to='#skills'
              className='icon'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}>
              <FaTools />
            </NavHashLink>
            <NavHashLink
              smooth
              to='#portfolio'
              className='icon'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}>
              <FaLaptopCode />
            </NavHashLink>
            <NavHashLink
              smooth
              to='#contact'
              className='icon'
              activeClassName='selected'
              activeStyle={{ backgroundColor: 'purple', color: 'white' }}>
              <FaPhoneAlt />
            </NavHashLink>
          </div>
        </div>
      </header>

      <Hero className='d-flex flex-column justify-content-center' />

      <About />

      <Resume />
      <Skills />
      <PortFolio />
      <Form />
    </>
  )
}

export default HomeScreen
