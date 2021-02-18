import React, { useState } from 'react'
import { useFormik } from 'formik'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'This field is required'
  } else if (values.name.length > 15) {
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
  const [submitted, setSubmitted] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      errormessage: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      setSubmitted(true)
    },
  })
  return (
    <div>
      <form
        className={`${submitted ? "hidden" : "block"} mt-12 flex flex-col`}
        action="Contact-Form"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-6 flex flex-col">
          <div>
            <label htmlFor="name" className="font-bold flex flex-row space-x-2">
              Name
              <span className="ml-1 text-green-600">&#x0002A;</span>
              {formik.touched.name && formik.errors.name ? <span className="text-green-600">{formik.errors.name}</span> : null}
            </label>
            <input
              id="name"
                name="name"
                type="text"
                inputStyle="inputDefault"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold flex flex-row space-x-2">
                Email
                <span className="ml-1 text-green-600">&#x0002A;</span>
                {formik.touched.email && formik.errors.email ? <span className="text-green-600">{formik.errors.email}</span> : null}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              inputStyle="inputDefault"
              placeholder="Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-bold flex flex-row">
                Phone
            </label>
            <input
              id="phone"
                name="phone"
                type="number"
                inputStyle="inputDefault"
                placeholder="Your phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
            </div>
            <div>
            <label htmlFor="company" className="font-bold flex flex-row space-x-2">
                Company
            </label>
            <input
              id="company"
              type="text"
                name="company"
                inputStyle="inputDefault"
                placeholder="Your company"
                onChange={formik.handleChange}
                value={formik.values.company}
                className="border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
            />
            </div>
            <div className="flex flex-col">
            <label htmlFor="contactMessage" className="flex flex-row space-x-2 font-bold">
                Your Message
                <span className="ml-1 text-green-600">&#x0002A;</span>
                {formik.touched.message && formik.errors.message ? <span className="text-green-600">{formik.errors.message}</span> : null} 
            </label>
            <textarea
                id="message"
                name="message"
                rows="6"
                cols="50"
                placeholder="Start typing..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
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
            <button
                type="submit"
            >
                Submit
            </button>
            </div>
        </div>
        </form>
        { submitted && (
            <div className="mt-12 flex flex-col w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg border rounded-lg bg-green-600">
              <div className="flex flex-col space-y-4 pt-12 pb-16 px-12 text-white font-bold">
                <p>Form submitted successfully!</p>
                <p>A confirmation email was sent to {formik.values.email}</p>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default ContactForm
