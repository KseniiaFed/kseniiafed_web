import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './units/contactForm'
// import PropTypes from 'prop-types'
// import MyInput from './input'
import './units/contact.scss'

// const initialInput = {
//   name: '',
//   email: '',
//   phone: '',
//   company: '',
//   errormessage: ''
// }

const Contact = () => {
  // const [value, setValue] = useState('')
  // const [submitStyle, setSubmitStyle] = useState(unclickable)
  // const [inputState, setInputState] = useState(initialInput)
  // const [inputError, setInputError] = useState(false)

  // const errorBlock = () => {
  //   setInputError(true)
  // }
  // const validate = (target) => {
  //   if (target.name.length === false) {
  //     errorBlock()
  //   }
  // }

  // const unclickable = 'border mr-0 rounded-full py-3 px-6 text-center text-white font-bold bg-gray-500'
  // const clickable ='border mr-0 rounded-full py-3 px-6 text-center text-white font-bold bg-green-500'
  // const [text, setText] = useState('')

  // const submitForm = (e) => {
  //   e.preventDefault()
  //   // const nameField = e.target.name
  //   // const emailField = e.target.email
  //   console.log(e.target)
  //   validate()
  // }

  // const inputChange = (e) => {
  //   const nam = e.target.name
  //   const val = e.target.value
  //   // let err = ''
  //   // if (nam === 'email') {
  //   //   if (val === "" && `${/^S+@S+.S+$/}`) {
  //   //     err = <span>Please input valid email</span>
  //   //   }
  //   // }
  //   setInputState({
  //     ...inputState,
  //     // errormessage: err,
  //     [nam]: val
  //   })
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
          <ContactForm />
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
