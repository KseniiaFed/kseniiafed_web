import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'
import { string } from 'prop-types'

const Styles = ['btn-default', 'btn-outline']

const Button = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]

  return (
    <Link to="/sign-in" className="btn-login">
      <button
        className={`btn ${checkButtonStyle} focus:outline-none`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
  )
}

Button.defaultProps = {
  type: string
}

export default Button
