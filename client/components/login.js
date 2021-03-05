import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
// import { createStore } from 'redux'

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'This field is required'
  } else if (values.firstName.length > 25) {
    errors.firstName = 'Must be less than 25 characters'
  }

  if (!values.lastName) {
    errors.lastName = 'This field is required'
  } else if (values.lastName.length > 25) {
    errors.name = 'Must be less than 25 characters'
  }

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please input valid email'
  }

  if (!values.password) {
    errors.password = 'This field is required'
  } else if (values.password.length > 25) {
    errors.passwordVerified = 'There must be at least 1 Upper case and 1 symbol'
  }

  if (!values.passwordVerified) {
    errors.passwordVerified = 'This field is required'
  } else if (values.passwordVerified !== values.password) {
    errors.passwordVerified = 'Password does not match'
  }

  return errors
}

const Login = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordVerified: ''
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      <Form>
        <div className="bg-login bg-cover">
          <div className="relative flex flex-col items-center bg-black bg-opacity-50 flex-col h-screen">
            <div className="bg-white bg-opacity-20 mt-16 mb-8 rounded-sm w-3/4 sm:w-96">
              <h1 className="text-white text-center text-4xl px-4 py-2">LOGIN FORM</h1>
            </div>
            <div className="relative flex flex-col w-3/4 sm:w-96 space-y-8">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="firstName" className="text-white text-opacity-90 font-bold mb-2">First Name</label>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="firstName" className="text-red-500" />
                  </div>
                </div>
                <Field name="firstName" type="text" className="rounded-sm p-3" placeholder="First name" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="lasttName" className="text-white text-opacity-90 font-bold mb-2">Last Name</label>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="lastName" />
                  </div>
                </div>
                <Field name="lastName" type="text" className="rounded-sm p-3" placeholder="Last name" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="email" className="text-white text-opacity-90 font-bold mb-2">Email</label>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <Field name="email" type="text" className="rounded-sm p-3" placeholder="Email" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="password" className="text-white text-opacity-90 font-bold mb-2">Password</label>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <Field name="password" type="text" className="rounded-sm p-3" placeholder="Password" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <label htmlFor="passwordVerified" className="text-white text-opacity-90 font-bold mb-2">Verify Password</label>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="passwordVerified" />
                  </div>
                </div>
                <Field name="passwordVerified" type="text" className="rounded-sm p-3" placeholder="Password confirm" />
              </div>
            </div>
            <div className="mt-12">
              <button type="submit" className="focus:outline-none font-bold text-white bg-white bg-opacity-20 rounded-full py-3 px-6 hover:bg-opacity-75 hover:text-gray-900 active:bg-opacity-100">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default Login
