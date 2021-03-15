import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Button from './button'
import DropdownMenu from './dropdownMenu'
import './header.scss'

const Header = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenuBar = () => setClick(false)
  const handleDropdownMenu = () => setIsShown(!isShown)

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <div className="fixed bg-black mx-auto z-50 p-5 inset-x-0 -mt-20 h-20 items-center">
      <div className="flex flex-row justify-between items-center text-white font-bold antialiased text-xl tracking-wide">
        <div className="flex justify-start font-bold text-2xl tracking-tighter">
          <Link to="/" onClick={closeMenuBar}>
            <span>CourseUP </span>
            <i className="fas fa-laptop-code" />
          </Link>
        </div>
        <div
          className="md:hidden block text-3xl"
          role="button"
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={handleClick}
        >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={classnames(
            'flex md:space-x-5 md:text-lg lg:space-x-10 lg:text-xl items-center',
            {
              'nav-menu active': click,
              'nav-menu': !click
            }
          )}
        >
          <li
            className="nav-item relative"
            onMouseEnter={handleDropdownMenu}
            onMouseLeave={handleDropdownMenu}
          >
            <Link to="/about" className="nav-links" onClick={closeMenuBar}>
              About
            </Link>
            {isShown && (
              <DropdownMenu row1text="About Us" path="/about" closeMenuBar={closeMenuBar} />
            )}
          </li>
          <li className="nav-item">
            <Link to="/training" className="nav-links" onClick={closeMenuBar}>
              Training
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMenuBar}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMenuBar}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenuBar}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-in"
              className="md:hidden block text-center my-8 mx-auto w-full py-3.5 rounded w-4/5 no-underline text-2xl bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black hover:duration-200"
              onClick={closeMenuBar}
            >
              SIGN IN
            </Link>
          </li>
          {button && <Button buttonStyle="btn-outline">SIGN IN</Button>}
        </ul>
      </div>
    </div>
  )
}

export default Header
