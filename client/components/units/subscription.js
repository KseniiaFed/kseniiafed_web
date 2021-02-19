import React from 'react'
import MyInput from '../input'

export default function Subscription() {
  return (
    <div className="relative flex bg-gray-100 justify-center">
      <div className="relative flex flex-col m-16 p-12 border rounded-lg shadow-md space-y-6 max-w-screen-lg bg-white">
        <h1 className="text-3xl">We&apos;ve got more coming...</h1>
        <p className="text-gray-500">
          Join our monthly newsletter to receive the latest news and our best course deals. You can
          unsubscribe at any time.
        </p>
        <div className="relative flex flex-col space-y-6 md:flex-row md:space-y-0 md:justify-between md:space-x-12 w-full">
          <div className="md:w-3/4">
            <MyInput placeholder="Enter your email" inputStyle="inputFree" />
          </div>
          <button
            type="button"
            className="bg-black focus:outline-none text-white font-bold hover:bg-gray-900 py-4 px-5 w-32 rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
