import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { submitForm } from '../../redux/reducers/contactForm'

const unclickable =
  'border mr-0 focus:outline-none rounded-full py-3 px-6 text-center text-white font-bold bg-gray-400'
const clickable =
  'border mr-0 focus:outline-none rounded-full py-3 px-6 text-center text-white font-bold bg-green-600 hover:bg-green-500'

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'This field is required'
  } else if (values.name.length > 25) {
    errors.name = 'Must be less than 25 characters'
  }

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please input valid email'
  }

  if (!values.message) {
    errors.message = 'This field is required'
  } else if (values.message.length > 500) {
    errors.message = 'Exceeded message length limit'
  }

  return errors
}

const ContactForm = () => {
  const formIsSubmitted = useSelector((s) => s.contactForm.submitted)
  const dispatch = useDispatch()
  // const [submitted, setSubmitted] = useState(false)
  const [submitButton, setSubmitButton] = useState(unclickable)
  const [toggleStyle, setToggleStyle] = useState(false)

  const formikRef = useRef()

  const sessionName = 'name'
  const sessionEmail = 'email'
  const sessionMessage = 'message'
  const sessionCompany = 'company'
  const sessionPhone = 'phone'

  formikRef.current = useFormik({
    initialValues: {
      name: sessionStorage.getItem(sessionName) || '',
      email: sessionStorage.getItem(sessionEmail) || '',
      phone: sessionStorage.getItem(sessionPhone) || '',
      company: sessionStorage.getItem(sessionCompany) || '',
      message: sessionStorage.getItem(sessionMessage) || ''
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      // fetch('https://url/server', {
      //   method: 'POST',
      //   body: JSON.stringify(values, null, 2),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8'
      //   }
      // })
      //   .then((res) => res.json())
      //   .then((json) => console.log(json))
      dispatch(submitForm(true))
      // setSubmitted(true)
    }
  })
  const formik = formikRef.current

  const handleToggleStyle = () => {
    setToggleStyle(!toggleStyle)
  }

  useEffect(() => {
    if (
      formik.values.name.length &&
      formik.values.email.length &&
      formik.values.message.length &&
      Object.keys(formik.errors).length === 0 &&
      toggleStyle
    ) {
      setSubmitButton(clickable)
    }
    return () => {
      setSubmitButton(unclickable)
    }
  }, [formik.values, formik.values.name.length, formik.errors, toggleStyle])

  useEffect(() => {
    if (formik.values.message !== formik.initialValues.message) {
      sessionStorage.setItem(sessionMessage, formikRef.current.values.message)
    } else if (formik.values.name !== formik.initialValues.name) {
      sessionStorage.setItem(sessionName, formikRef.current.values.name)
    } else if (formik.values.phone !== formik.initialValues.phone) {
      sessionStorage.setItem(sessionPhone, formikRef.current.values.phone)
    } else if (formik.values.company !== formik.initialValues.company) {
      sessionStorage.setItem(sessionCompany, formikRef.current.values.company)
    }
  }, [
    formik.values,
    formik.initialValues.company,
    formik.initialValues.message,
    formik.initialValues.name,
    formik.initialValues.phone
  ])

  return (
    <div>
      <form
        className={`${formIsSubmitted ? 'hidden' : 'block'} mt-12 flex flex-col`}
        action="Contact-Form"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-6 flex flex-col">
          <div>
            <label htmlFor="name" className="font-bold flex flex-row space-x-2">
              Name
              <span className="ml-1 text-green-600">&#x0002A;</span>
              {formik.touched.name && formik.errors.name ? (
                <span className="text-green-600">{formik.errors.name}</span>
              ) : null}
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              {...formik.getFieldProps('name')}
              className="border border-gray-500 focus:border-transparent focus:ring-2 focus:ring-green-600 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold flex flex-row space-x-2">
              Email
              <span className="ml-1 text-green-600">&#x0002A;</span>
              {formik.touched.email && formik.errors.email ? (
                <span className="text-green-600">{formik.errors.email}</span>
              ) : null}
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...formik.getFieldProps('email')}
              className="border border-gray-500 focus:border-transparent focus:ring-2 focus:ring-green-600 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-bold flex flex-row">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Your phone number"
              {...formik.getFieldProps('phone')}
              className="border border-gray-500 focus:border-transparent focus:ring-2 focus:ring-green-600 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div>
            <label htmlFor="company" className="font-bold flex flex-row space-x-2">
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your company"
              {...formik.getFieldProps('company')}
              className="border border-gray-500 focus:border-transparent focus:ring-2 focus:ring-green-600 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="flex flex-row space-x-2 font-bold">
              Your Message
              <span className="ml-1 text-green-600">&#x0002A;</span>
              {formik.touched.message && formik.errors.message ? (
                <span className="text-green-600">{formik.errors.message}</span>
              ) : null}
            </label>
            <textarea
              name="message"
              rows="6"
              cols="50"
              placeholder="Start typing..."
              {...formik.getFieldProps('message')}
              className="border border-gray-500 focus:border-transparent focus:ring-2 focus:ring-green-600 rounded-lg p-4 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg"
            />
          </div>
          <div className="w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transform transition duration-200 ease-in">
              <label htmlFor="toggle">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  onClick={handleToggleStyle}
                  className={`${
                    toggleStyle ? 'border-green-600 right-0' : null
                  } absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
                />
                <div
                  className={`
                  ${
                    toggleStyle ? 'bg-green-600' : 'bg-gray-200'
                  } block overflow-hidden h-6 rounded-full cursor-pointer`}
                />
              </label>
            </div>
            <span className="text-xs text-gray-700">
              I agree to the Privacy Policy and Cookie Policy
            </span>
          </div>
          <div className="relative lg:pt-2 flex justify-end w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg ">
            <button type="submit" className={submitButton}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className={`${formIsSubmitted ? 'block' : 'hidden'} relative flex h-128`}>
        <div className="mt-12 flex flex-col h-2/5 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg border rounded-lg bg-green-600">
          <div className="flex flex-col space-y-4 pt-12 pb-16 px-12 text-white font-bold">
            <p>Form submitted successfully!</p>
            <p>A confirmation email was sent to {formik.values.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
