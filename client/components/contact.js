import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import MyInput from './input'

const Contact = () => {
  const [value, setValue] = useState('')
  const [text, setText] = useState('')
  // const [clickLog, clickLogChange] = useState('')
  // const [clickLog2, clickLog2Change] = useState('')

  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  const changeTextBox = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setText(e.target.value) // введенное значение можем передать в кукис сешн(более безопасный)/локал сторадж манипуляции
  }
  return (
    <div>
      <div className="text-4xl tracking-wider text-gray-800">
        <h1 className="p-6 self-center">Contact us</h1>
      </div>
      <div className="px-6 pb-6 flex flex-col w-full space-y-12 lg:space-y-0 lg:flex-row lg:justify-between tracking-wide">
        <div className="">
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-900">Company Name</h3>
            <p className="text-gray-600 text-xl">
              37 the Cedars, Abberley,
              <br/>
              Shanganagh Road, Killiney,
              <br/>
              Co. Dublin, Ireland, A96 X662,
            </p>
            <p className="text-gray-600 text-xl">
              Tel.number:
              <br />
              Email:
            </p>
          </div>
          <ul className="flex flex-row mt-4 text-3xl space-x-6">
            <li>
              <Link
              className="social-icon-link facebook" 
              to="/" 
              target="_blank"
              aria-label='Facebook'
            >
               <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link instagram" 
                to="/" 
                target="_blank"
                aria-label='Instagram'
              >
                <i className="fab fa-instagram" />  
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link youtube" 
                to="/" 
                target="_blank"
                aria-label='Youtube'
              >
                <i className="fab fa-youtube" />  
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link twitter" 
                to="/" 
                target="_blank"
                aria-label='Twitter'
              >
                <i className="fab fa-twitter" />  
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link linkedin" 
                to="/" 
                target="_blank"
                aria-label='Linkedin'
              >
                <i className="fab fa-linkedin" />  
              </Link>
            </li>
          </ul>
          <div className="mt-12 divide-y-2 divide-gray-300">
            <h3 className="mb-2 text-2xl text-gray-900">Find us</h3>
            <div className="relative text-right h-auto w-auto">
              <div className="mt-4 overflow-hidden bg-none h-auto w-auto aspect-w-24">
                <iframe title="location" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=37%20the%20cedars%20abberley%20killiney&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form border-2 border-indigo-500">
          <div>
            <h3 className="text-2xl text-gray-900">Contact Form</h3>
            <form className="mt-12 space-y-6" action="Contact-Form">
              <div>
                <label htmlFor="ename">Your Name</label>
                <MyInput />
              </div>
              <div>
                <label htmlFor="ename">Your Email</label>
                <MyInput />
              </div>
              <div>
                <label htmlFor="ename">Your Phone</label>
                <MyInput />
              </div>
              <div>
                <label htmlFor="ename">Your Company</label>
                <MyInput />
              </div>
              <div>
                <label htmlFor="ename">Your Message</label>
                <MyInput />
              </div>
              <button type="button" onClick={(val) => setValue(value + val)}>Submit</button>
              { text }
              <div>
                <input
                  className="border border-gray-500"
                  type="input"
                  value={text}
                  onChange={changeTextBox}
                />
              </div>

              {/* <div onClick={() => {
                clickLogChange(`${clickLog} parentDivClicked`)
              }}
                role="button"
                tabIndex={0}
                onKeyDown={() => {}}
                className="border border-red-500"
              >
                clickMe
                <div onClick={(e) => {
                  e.stopPropagation()
                  clickLog2Change(`${clickLog2} CHILD DIV`)
                }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => {}}
                  className="border border-blue-500"
                >
                  clickMe2 Gently
                </div>
              </div>
              {clickLog}
              <br />
              {clickLog2} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact.propTypes = {
//     title: PropTypes.string
// }

// Contact.defaultProps = {
//     title: 'Contact us right now!'
// }

export default Contact
