import React from 'react'

const Dot = (props) =>{
  return (
    <span className={`
      p-1
      cursor-pointer
      border-50%
      bg-transparent
      text-white
      text-xs
      text-opacity-50
    `}>
    {props.active ? <i className="fas fa-circle"/> : <i className="far fa-circle"/>}
    </span>
  )
}

const Dots = ({slides, activeIndex, dotHandler}) => {
  return (
    <div className ="
        absolute
        bottom-6
        w-full
        flex
        items-center
        justify-center
        z-10
    ">
        {slides.map((slide, i) => (
        <button key={i} type="button" onClick={() => dotHandler(i)}>
          <Dot key={i} active={activeIndex === i} />
        </button>
        ))}
    </div>
  )
}

export default Dots
