import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import MyInput from './input'
import './units/toggler.scss'

const Contact = () => {
  const [value, setValue] = useState('')
  // const [text, setText] = useState('')
  // const [clickLog, clickLogChange] = useState('')
  // const [clickLog2, clickLog2Change] = useState('')

  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  // const changeTextBox = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()

  //   setText(e.target.value) // введенное значение можем передать в кукис сешн(более безопасный)/локал сторадж манипуляции
  // }
  return (
    <div>
      <div className="px-8 py-8 flex flex-col w-full space-y-12 lg:space-y-0 lg:flex-row lg:space-x-12 lg:justify-between 2xl:justify-center 2xl:space-x-32 tracking-wide">
        <div className="">
          <div className="text-4xl tracking-wider text-gray-800">
            <h1 className="py-6 self-center">Contact us</h1>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-gray-900">Company Name</h3>
            <p className="text-gray-500 text-xl">
              37 the Cedars, Abberley,
              <br/>
              Shanganagh Road, Killiney,
              <br/>
              Co. Dublin, Ireland, A96 X662,
            </p>
            <p className="text-gray-500 text-xl">
              <i className="fas fa-phone-alt"/>  Tel.number here
              <br />
              <i className="far fa-envelope"/>   Email here
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
              <div className="relative mt-4 overflow-hidden bg-none h-auto w-auto aspect-w-24">
                <iframe
                  title="location"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=37%20the%20cedars%20abberley%20killiney&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full lg:w-132 lg:max-w-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:pt-20">
          <h3 className="text-2xl text-gray-900 pt-2">Contact Form</h3>
          <form className="mt-12 space-y-6 flex flex-col" action="Contact-Form">
            <div>
              <label htmlFor="username" className="font-bold">Name<span className="text-green-600"> &#x0002A;</span></label>
              <MyInput inputStyle="inputDefault" placeholder="Your name"/>
            </div>
            <div>
              <label htmlFor="ename" className="font-bold">Email<span className="text-green-600"> &#x0002A;</span></label>
              <MyInput inputStyle="inputDefault" placeholder="Your email"/>
            </div>
            <div>
              <label htmlFor="phone" className="font-bold">Phone</label>
              <MyInput inputStyle="inputDefault" placeholder="Your phone number"/>
            </div>
            <div>
              <label htmlFor="companyname" className="font-bold">Company</label>
              <MyInput inputStyle="inputDefault" placeholder="Your company"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-bold">Your Message<span className="text-green-600"> &#x0002A;</span></label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                rows="6"
                cols="50"
                placeholder="Start typing..."
                className="border border-gray-500 rounded-lg p-4 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg"
              />
            </div>
            <div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <label htmlFor="toggle">
                  <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  <div className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"/>
                </label>  
              </div>
              <span className="text-xs text-gray-700">I agree to the Privacy Policy and Cookie Policy</span>
            </div>
            <div className="relative lg:pt-2 flex justify-end w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg ">
              <button
                type="button"
                onClick={(val) => setValue(value + val)}
                className="submit-button border mr-0 rounded-full py-3 px-6 text-center text-white font-bold bg-green-600"
              >
                Submit
              </button>
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
  )
}

// Contact.propTypes = {
//     title: PropTypes.string
// }

// Contact.defaultProps = {
//     title: 'Contact us right now!'
// }

export default Contact
