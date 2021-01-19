import React from 'react'
import Button from './button'


const HeroSection = () => {
  return (
    <div className="relative items-center flex flex-col justify-center h-screen bg-laboratory">
      <h1 className="text-white font-bold text-4xl md:text-6xl">
        FIND YOUR CENTRE
      </h1>
      <p className="text-white text-lg md:text-2xl">
        I want to know more
      </p>
      <div className="mt-6 flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Button
          className='btns' 
          buttonStyle='btn-outline'
        >
          GET STARTED
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn-default'
        >
          WATCH TRAILER <i className='far fa-play-circle ml-2' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
