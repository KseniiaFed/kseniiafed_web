import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyInput from './input'


const Contact = (props) => {
  const [value, setValue] = useState('')
  return (
    <div className="mt-20">
        <div><h6>{props.title}</h6></div>
        <form className="mt-20" action="Contact-Form">
          <label htmlFor="ename">Email:  </label>
          <MyInput />
          <button type="button" onClick={(val) => setValue(value + val)}>Submit</button>
        </form>
    </div>
  )
}

Contact.propTypes = {
    title: PropTypes.string
}

Contact.defaultProps = {
    title: 'Contact us right now!'
}

export default Contact
