import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import MyInput from './input'
import './units/contact.scss'

const initialInput = {
  name: '',
  email: '',
  phone: '',
  company: '',
  errormessage: ''
}

const Contact = () => {
  const [value, setValue] = useState('')
  // const [submitStyle, setSubmitStyle] = useState(unclickable)
  const [inputState, setInputState] = useState(initialInput)
  const [inputError, setInputError] = useState(false)

  const errorBlock = () => {
    setInputError(true)
  }
  const validate = (target) => {
    if (target.name.length === false) {
      errorBlock()
    }
  }

  // const unclickable = 'border mr-0 rounded-full py-3 px-6 text-center text-white font-bold bg-gray-500'
  // const clickable ='border mr-0 rounded-full py-3 px-6 text-center text-white font-bold bg-green-500'
  // const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    // const nameField = e.target.name
    // const emailField = e.target.email
    console.log(e.target)
    validate()
  }

  const inputChange = (e) => {
    const nam = e.target.name
    const val = e.target.value
    // let err = ''
    // if (nam === 'email') {
    //   if (val === "" && `${/^S+@S+.S+$/}`) {
    //     err = <span>Please input valid email</span>
    //   }
    // }
    setInputState({
      ...inputState,
      // errormessage: err,
      [nam]: val
    })
  }

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
              <br />
              Shanganagh Road, Killiney,
              <br />
              Co. Dublin, Ireland, A96 X662,
            </p>
            <p className="text-gray-500 text-xl">
              <i className="fas fa-phone-alt" /> Tel.number here
              <br />
              <i className="far fa-envelope" /> Email here
            </p>
          </div>
          <ul className="flex flex-row mt-4 text-3xl space-x-6">
            <li>
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link
                className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="Linkedin"
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
          <form
            className="mt-12 flex flex-col"
            action="Contact-Form"
            onSubmit={submitForm}
          >
            <div className="space-y-6 flex flex-col">
              <div>
                <label htmlFor="name" className="font-bold flex flex-row space-x-2">
                  Name
                  <span className="ml-1 text-green-600">&#x0002A;</span>
                  <span className={`${ inputError ? "block" : "hidden" } text-green-600`}> This field is required</span>
                </label>
                <MyInput
                  name="name"
                  inputStyle="inputDefault"
                  placeholder="Your name"
                  onChange={inputChange}
                  validate={validate}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="font-bold flex flex-row space-x-2">
                  Email
                  <span className="ml-1 text-green-600">&#x0002A;</span>
                  {inputState.errormessage}
                  <span className={`${ inputError ? "block" : "hidden" } text-green-600`}> This field is required</span>
                </label>
                <MyInput
                  name="email"
                  inputStyle="inputDefault"
                  placeholder="Your email"
                  onChange={inputChange}
                  required
                  pattern="/^\S+@\S+\.\S+$/"
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <MyInput
                  name="phone"
                  type="number"
                  inputStyle="inputDefault"
                  placeholder="Your phone number"
                  onChange={inputChange}
                />
              </div>
              <div>
                <label htmlFor="company" className="font-bold">
                  Company
                </label>
                <MyInput
                  name="company"
                  inputStyle="inputDefault"
                  placeholder="Your company"
                  onChange={inputChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contactMessage" className="flex flex-row space-x-2 font-bold">
                  Your Message
                  <span className="ml-1 text-green-600">&#x0002A;</span>
                  <span className={`${ inputError ? "block" : "hidden" } text-green-600`}> This field is required</span>
                </label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  rows="6"
                  cols="50"
                  placeholder="Start typing..."
                  onChange={() => {}}
                  required
                  className="border border-gray-500 rounded-lg p-4 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg"
                />
              </div>
              <div className="w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <label htmlFor="toggle">
                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                    <div className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"/>
                  </label>  
                </div>
                <span className="text-xs text-gray-700">I agree to the Privacy Policy and Cookie Policy</span>
              </div>
              <div className="relative lg:pt-2 flex justify-end w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg ">
                <input
                  type="submit"
                  value="Submit"
                  onClick={(val) => setValue(value + val)}
                  // className={submitStyle}
                />
                  {/* Submit
                </input> */}
              </div>
            </div>
            {/* { 
              (submitted) && (
                <div className="w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg">
                  <div className="submit-successful flex flex-col space-y-4 pt-12 pb-16 px-12 rounded-lg text-white font-bold">
                    <p>Form submitted successfully!</p>
                    <p>A confirmation email was sent to</p>
                  </div>
                </div>
              )
            } */}
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
