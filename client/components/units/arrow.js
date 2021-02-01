import React from 'react'

const Arrow = (props) => {
  return (
    <div
    role="button"
    onClick={props.swipeSlide}
    onKeyDown={props.swipeSlide}
    tabIndex={0}
    className={`
      flex
      absolute
      ${props.direction === 'left' ? 'left-0' : 'right-0'}
      h-12
      w-12
      mx-0
      mt-32
      items-center
      justify-center
      text-white
      text-opacity-50
      text-3xl
      cursor-pointer
      z-10
      hover:transform
    `}
    >
    {props.direction === 'left' ?
        <i className="fas fa-chevron-left" />
        :
        <i className="fas fa-chevron-right" />}
    </div>
  )
}

export default Arrow
