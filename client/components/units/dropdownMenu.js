import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = (props) => {
  return (
    <div
      className="flex flex-col w-full relative text-center md:text-left md:origin-top-right md:absolute md:left-0 md:w-56 md:rounded-sm shadow-lg bg-black bg-opacity-50 ring-1 ring-black ring-opacity-5 divide-y divide-black"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div className="py-1">
        <Link
          to="/about"
          className="block px-4 py-2 text-sm text-white hover:bg-opacity-80 hover:text-gray-500"
          role="menuitem"
          onClick={props.closeMenuBar}
        >
          About us
        </Link>
      </div>
      <div className="py-1">
        <Link
          to="aboutteam"
          className="block px-4 py-2 text-sm text-white hover:bg-opacity-80 hover:text-gray-500"
          role="menuitem"
          onClick={props.closeMenuBar}
        >
          Our team
        </Link>
      </div>
    </div>
  )
}

export default DropdownMenu
