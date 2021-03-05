import React from 'react'
import { Link } from 'react-router-dom'
import Subscription from './units/subscription'

const CourseCard = ({ name, img, date, text }) => {
  return (
    <div>
      <div className="relative flex flex-row sm:flex-col sm:w-64 md:w-72">
        <div className={`bg-${img} bg-center w-28 h-28 sm:h-64 sm:w-64 md:h-72 md:w-72`}>
          <div className="">
            <Link
              to="/training-info"
              className="rounded-full py-2 px-6 border border-white text-white bg-transparent hover:bg-white hover:text-green-900"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-2/3 sm:w-full space-y-2 py-2 px-2 sm:px-0">
          <div>
            <h3 className="md:text-2xl font-bold text-gray-900">{name}</h3>
          </div>
          <div className="flex flex-row space-x-2 text-xs sm:text-sm">
            <i className="far fa-calendar-alt" />
            <p className="">{date}</p>
          </div>
          <div className="hidden sm:block">
            <span className="sm:text-sm md:text-base md:leading-7 text-center text-gray-600">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Training = (props) => {
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }

  return (
    <div>
      <div className="px-12 pt-8 pb-16 w-full flex flex-col space-y-12 justify-center tracking-wide">
        <div className="relative flex flex-col">
          <h1 className="text-4xl tracking-wider text-gray-800 p-12 self-center">
            {' '}
            Upcoming Courses & Trainings{' '}
          </h1>
          <p className="p-12 text-2xl text-gray-900">
            {' '}
            We deliver training programmes and workshops tailored to the unique needs of
            professionals in the design industry.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center filter-buttons text-base text-green-900 space-x-8">
          <button
            type="button"
            className="rounded-full py-2 px-6 border border-green-900 focus:outline-none hover:bg-green-900 hover:text-white"
          >
            All
          </button>
          <button
            type="button"
            className="rounded-full py-2 px-6 border border-green-900 focus:outline-none hover:bg-green-900 hover:text-white"
          >
            Course
          </button>
          <button
            type="button"
            className="rounded-full py-2 px-6 border border-green-900 focus:outline-none hover:bg-green-900 hover:text-white"
          >
            Event
          </button>
        </div>
        <div className="self-center grid grid-cols-1 gap-y-8 sm:gap-x-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-28">
          <CourseCard
            id=""
            name="Designs&Visualisation"
            img=""
            date="January 27th 2021"
            text="Join past participants as well as the course trainer of the Designs on Growth programme to hear how it is impacting their careers and businesses, and learn how they managed their study with work."
          />
          <CourseCard
            id=""
            name="JavaScript Advanced-best practices of 2021"
            img=""
            date="July 16th 2021"
            text=""
          />
          <CourseCard id="" name="" img="" date="" text="" />
          <CourseCard id="" name="" img="" date="" text="" />
          <CourseCard id="" name="" img="" date="" text="" />
          <CourseCard id="" name="" img="" date="" text="" />
        </div>
        <div className="relative flex flex-col">
          <h1 className="text-4xl tracking-wider text-gray-800 p-12 self-center">
            Events you might like
          </h1>
          <div className="self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-x-12 sm:gap-y-28">
            Events here
          </div>
        </div>
      </div>
      <Subscription />
    </div>
  )
}

Training.propTypes = {}

export default Training
