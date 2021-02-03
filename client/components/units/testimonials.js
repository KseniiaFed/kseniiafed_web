import React, { useState } from 'react'
import Video from './video'

const Testimonials = () => {
  const [watchComplete, setWatchComplete] = useState(false)
  const [watchNumber, setWatchNumber] = useState(0)

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.5 && !watchComplete) {
      setWatchComplete(true)
      setWatchNumber(watchNumber + 1)
    }
  }

  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-100">
      <div className="border-2 border-red-800 m-16 w-full relative flex flex-col justify-evenly items-center space-y-12 lg:flex-row lg:space-x-16 lg:space-y-0">
        <div className="relative rounded-lg max-w-md md:max-w-screen-sm md:min-w-1/3 md:max-h-96 bg-white shadow-lg">
          <div className="relative p-4 flex flex-row border-1 bg-indigo-700 items-center rounded-t-lg">
            <div className="items-center justify-center ml-2">
              <img 
                src="https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
                alt="testimonials"
                className="rounded-full h-16 w-16 flex items-center justify-center object-cover"
              />
            </div>
            <div className="flex flex-col ml-4">
              <h1 className="text-lg text-white font-medium tracking-wider">Harry Potter</h1>
              <h5 className="text-blue-500 text-sm font-semibold">Wizard from Hogwarts</h5>
            </div>
          </div>
          <div className="md:max-h-72 overflow-auto">
            <p className="px-6 py-5 text-gray-500 italic">
              <i className="fas fa-quote-left italic text-xs text-gray-300 mr-2"/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <i className="fas fa-quote-right italic text-xs text-gray-300 ml-2"/>
            </p>
          </div>
        </div>  
        <div className="relative w-auto rounded-lg shadow-lg">
          <Video url='https://www.youtube.com/watch?v=ysz5S6PUM-U' onProgress={handleWatchComplete}/>
          <div className="flex flex-row items-center pl-2 space-x-2 text-gray-600 font-bold bg-white">
            <i className={`fas fa-check ${ watchComplete ? `text-green-500` : `text-gray-600`}`}/>
            <i className="far fa-eye"/> <span>{watchNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
