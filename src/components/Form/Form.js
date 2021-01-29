/** @format */

import React from 'react'
import './form.css'
import { FaReact } from 'react-icons/fa'

const Form = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='section-title'>
          <h1>
            <strong className='purple'>Contact</strong> Me!
          </h1>
        </div>

        <div className='row mt-1'>
          <div className='col-lg-4'>
            <div className='info'>
              <div className='address'>
                <i className='fas fa-map-marker-alt fa-2x'></i>
                <h4>Location:</h4>
                <p>62,Chimanpura Peth,Satara</p>
              </div>

              <div className='email'>
                <i className='fas fa-envelope fa-2x'></i>
                <h4>Email:</h4>
                <p>premrajtripute777@gmail.com</p>
              </div>

              <div className='phone'>
                <i className='fas fa-mobile fa-2x'></i>
                <h4>Call:</h4>
                <p>+91-7020817398</p>
              </div>
            </div>
          </div>

          <div className='col-lg-8 mt-5 mt-lg-0'>
            <form className='php-email-form'>
              <div className='form-row'>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    id='name'
                    placeholder='Your Name'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 4 chars'
                  />
                  <div className='validate'></div>
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    data-rule='email'
                    data-msg='Please enter a valid email'
                  />
                  <div className='validate'></div>
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  data-rule='minlen:4'
                  data-msg='Please enter at least 8 chars of subject'
                />
                <div className='validate'></div>
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  name='message'
                  rows='5'
                  data-rule='required'
                  data-msg='Please write something for us'
                  placeholder='Message'></textarea>
                <div className='validate'></div>
              </div>

              <div className='text-center'>
                <button type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-flex'>
          <h4>
            Developed using{' '}
            <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
              <strong className='blue'>
                <FaReact /> React
              </strong>
            </a>
          </h4>
          <h4>
            Design By &nbsp;
            <a
              href='https://github.com/soumyajit4419'
              target='_blank'
              rel='noreferrer'>
              <strong className='purple'>Soumyajit Behera</strong>
            </a>
          </h4>
        </div>
      </footer>
    </section>
  )
}

export default Form
