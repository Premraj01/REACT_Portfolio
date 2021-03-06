/** @format */

import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row } from 'react-bootstrap'

const GitHub = () => {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  }
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 style={{ paddingBottom: '20px', color: 'white' }}>
        Days I <strong className='purple'>Code</strong>
      </h1>
      <GitHubCalendar
        username='Premraj01'
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  )
}

export default GitHub
