import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyInput from './input'
import Header from './units/header'

const Contact = (props) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <Header />
      <div style={{
        backgroundColor: 'red',
        color: 'green',
        fontSize: '20px'
      }}>
        <div><h6>{props.title}</h6></div>
        <form action="Contact-Form">
          <label htmlFor="ename">Email:  </label>
          <MyInput />
          <button type="button" onClick={(val) => setValue(value + val)}>Submit</button>
        </form>
      </div>
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
