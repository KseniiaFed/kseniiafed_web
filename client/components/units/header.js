import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Button from './button'
import './header.scss'

const Header = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  

  const handleClick = () => setClick(!click)
  const closeMenuBar = () => setClick(false)
  
  const showButton = () => {
    if(window.innerWidth <= 783) {
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
    <div className="relative bg-black">
      <div className="mx-auto p-6">
        <div className="flex flex-row justify-between items-center text-white font-bold antialiased text-xl tracking-wide">
          <div className="flex justify-start font-bold text-2xl tracking-tighter">
            <Link to="/" onClick={closeMenuBar}>
              <span>VCCN</span>
              <i className="fas fa-syringe" />
            </Link>
          </div> 
          <div className="menu-icon" role="button" onClick={handleClick} tabIndex={0} onKeyDown={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={
            classnames("flex space-x-10", {
              'nav-menu active': click,
              'nav-menu': !click
            })
          }>
            <li className='nav-item'>
              <Link
                to="/"
                className='nav-links'
                onClick={closeMenuBar}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/map"
                className='nav-links'
                onClick={closeMenuBar}
              >
                Appointments
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/contact"
                className='nav-links'
                onClick={closeMenuBar}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/login"
                className='nav-links-mobile'
                onClick={closeMenuBar}
              >
                LOG IN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">LOG IN</Button>}
        </div>
      </div>
    </div>
  )
}

export default Header
