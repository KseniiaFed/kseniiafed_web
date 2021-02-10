import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import MyInput from './input'

const Contact = () => {
  const [value, setValue] = useState('')
  const [text, setText] = useState('')
  const [clickLog, clickLogChange] = useState('')
  const [clickLog2, clickLog2Change] = useState('')

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
      <div className="contact-container flex flex-col w-full space-y-12 md:space-y-0 md:flex-row md:justify-evenly tracking-wide">
        <div className="contact-address border-2 border-yellow-500">
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-800">Company Name</h3>
            <p className="text-gray-600 text-xl">
              Address
              <br/>
              Address
              <br/>
              Address
              <br/>
              Address
            </p>
            <p className="text-gray-600 text-xl">
              Tel.number:
              <br />
              Email:
            </p>
          </div>
          <ul className="border border-green-500 flex flex-row mt-4 text-2xl space-x-6">
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
          <div className="contact-map border border-green-500 mt-12">
            <h3 className="text-2xl underline text-gray-800">Find us</h3>
            {/* <iframe>map</iframe> */}
            Map Here
          </div>
        </div>
        <div className="contact-form border-2 border-indigo-500">
          <div>
            <h3 className="text-2xl text-gray-800">Contact Form</h3>
          <form className="mt-20" action="Contact-Form">
            <label htmlFor="ename">Email:  </label>
            <MyInput />
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
            <br />
            <div>
              <input
                className="border border-gray-500"
                type="password"
                onChange={changeTextBox}
              />
            </div>

            <div onClick={() => {
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

            { clickLog }
            <br />
            { clickLog2 }
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
