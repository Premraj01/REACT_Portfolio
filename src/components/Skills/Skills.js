/** @format */

import React from 'react'
import { Container } from 'react-bootstrap'
import './Skills.css'
import Techstack from './Techstack'
import Github from './GitHub'

const Skills = () => {
  return (
    <Container id='skills' className='skill'>
      <Techstack />
      <Github />
    </Container>
  )
}

export default Skills
