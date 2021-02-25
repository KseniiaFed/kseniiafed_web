import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function Subscription() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(value) => {
        const errors = {}
        if (!value.email) {
          errors.email = ''
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
          errors.email = '* Please input valid email'
        }
        return errors
      }}
      onSubmit={(value) => {
        console.log(JSON.stringify(value, null, 2))
      }}
    >
      <Form>
        <div className="relative flex bg-gray-100 justify-center">
          <div className="relative flex flex-col m-16 p-12 border rounded-lg shadow-md max-w-screen-lg bg-white">
            <h1 className="text-3xl mb-4">We&apos;ve got more coming...</h1>
            <p className="text-gray-500 mb-2">
              Join our monthly newsletter to receive the latest news and our best course deals. You
              can unsubscribe at any time.
            </p>
            <span className="flex h-7 font-bold text-red-500 mb-1">
              <ErrorMessage name="email" />
            </span>
            <div className="relative flex flex-col space-y-6 md:flex-row md:space-y-0 md:justify-between md:space-x-12 w-full">
              <div className="md:w-3/4">
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300 w-full sm:w-5/6 md:w-full rounded-lg p-4"
                />
              </div>
              <button
                type="submit"
                className="bg-black focus:outline-none text-white font-bold hover:bg-gray-900 py-4 px-5 w-32 rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
