import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { updateSignInForm, signIn } from '../redux/reducers/signInForm'

const validate = (values) => {
  const errors = {}
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

  return errors
}

const SignIn = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
        dispatch(updateSignInForm(values, null, 2))
        dispatch(signIn())
      }}
    >
      <Form>
        <div className="bg-login bg-cover">
          <div className="relative flex justify-center items-start bg-black bg-opacity-50 h-screen">
            <div className="mt-24 flex flex-col items-center justify-center w-3/4">
              <div className="bg-white bg-opacity-20 mb-8 rounded-sm w-full sm:w-96">
                <h1 className="text-white text-center text-4xl px-4 py-2">SIGN IN</h1>
              </div>
              <div className="relative flex flex-col w-full sm:w-96 space-y-8">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="email" className="text-white text-opacity-90 font-bold mb-2">
                      Email
                    </label>
                    <div className="text-red-600 font-bold">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <Field name="email" type="text" className="rounded-sm p-3" placeholder="Email" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="password" className="text-white text-opacity-90 font-bold mb-2">
                      Password
                    </label>
                    <div className="text-red-600 font-bold">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <Field
                    name="password"
                    type="password"
                    className="rounded-sm p-3"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="mt-12">
                <button
                  type="submit"
                  className="focus:outline-none font-bold text-white bg-white bg-opacity-20 rounded-full py-3 px-6 hover:bg-opacity-75 hover:text-gray-900 active:bg-opacity-100"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-24 text-white flex flex-col sm:flex-row sm:space-x-2 justify-center">
                <p>Haven&apos;t signed up with us yet?</p>
                <Link to="/sign-in/sign-up" className="font-bold text-center">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default SignIn
