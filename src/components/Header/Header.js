/** @format */

import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {
  FaHome,
  FaUser,
  FaTools,
  FaFileAlt,
  FaLaptopCode,
} from 'react-icons/fa'

const Header = () => {
  return (
    <section className='navbar-vertical'>
      <div className='nav-items'>
        <div>
          <Link className='icon'>
            <FaHome />
          </Link>
          <Link className='icon'>
            <FaUser />
          </Link>
          <Link className='icon'>
            <FaFileAlt />
          </Link>
          <Link className='icon'>
            <FaTools />
          </Link>
          <Link className='icon'>
            <FaLaptopCode />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header
