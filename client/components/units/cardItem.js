import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
  return (
    <div className="relative self-center w-11/12 md:w-72 xl:w-64 xl:mx-2">
      <li className="flex flex-1 rounded-lg my-0 mx-0">
        <Link to={props.path} className="flex flex-col w-full shadow-lg rounded-lg overflow-auto no-underline">
          <figure className="h-80 relative" data-category={props.label}>
            <img src={props.src} alt="Infographics" className="relative inset-0 block w-full max-w-full h-full max-h-full object-cover transition-all hover:transform scale-110"/>
          </figure>
          <div className="pt-5 pb-8 px-8 md:px-2 text-center">
            <h5 className="text-gray-700 text-lg font-bold leading-6">{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem
