import React, { useState, useEffect } from 'react'
import TestimonialSlide from './testimonialslide'
import Video from './video'

const slides = [
  <TestimonialSlide
    key="slide1"
    testimonialPic="https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
    testimonialName="Harry Potter"
    testimonialTitle="Wizard of Hogwarts"
    testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  />,

  <TestimonialSlide
    key="slide2"
    testimonialPic="https://assets.mugglenet.com/wp-content/uploads/2017/03/Lord-Voldemort-Laughs.png"
    testimonialName="Voldemort"
    testimonialTitle="Dark Lord"
    testimonialText="Hey sup everyone"        
  />,

  <TestimonialSlide
    key="slide3"
    testimonialPic="https://pm1.narvii.com/5918/ec8c73e84e86bf7444ab5cf4fa82a505e2bd5ac2_hq.jpg"
    testimonialName="Hagrid"
    testimonialTitle="Groundskeeper"
    testimonialText="Harry you are a wizard"        
  />
]


const Testimonials = () => {
  const [watchComplete, setWatchComplete] = useState(false)
  const [watchNumber, setWatchNumber] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.5 && !watchComplete) {
      setWatchComplete(true)
      setWatchNumber(watchNumber + 1)
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, )

  return (
    <div className="relative flex flex-col lg:flex-row bg-gray-100">
      <div className="m-16 w-auto lg:w-full relative flex flex-col justify-evenly items-center space-y-12 lg:flex-row lg:space-x-16 lg:space-y-0">
        <div
          className="w-full relative h-80 items-center"
          key={activeIndex}
        >
          {slides[activeIndex]}
        </div>
        <div className="relative w-full rounded-lg shadow-lg">
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
