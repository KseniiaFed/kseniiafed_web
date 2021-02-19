import React from 'react'
import Button from './button'
import './mainslider.scss'

const Slide = (props) => {
  return (
    <div
      className={`bg-${props.background} slider bg-cover flex items-center justify-center relative w-full h-full`}
    >
      <div className="relative items-center">
        <h1 className="text-white font-bold text-4xl md:text-6xl text-center tracking-widest">
          {props.header}
        </h1>
        <p className="text-white text-lg md:text-2xl text-center">{props.text}</p>
        <div className="mt-6 flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Button className="btns" buttonStyle="btn-outline">
            GET STARTED
          </Button>
          <Button className="btns" buttonStyle="btn-default">
            WATCH TRAILER
            <i className="far fa-play-circle ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Slide
