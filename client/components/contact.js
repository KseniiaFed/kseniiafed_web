import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Contact = (props) => {
  const [value, setValue] = useState('')
  return (
    <div style={{
      backgroundColor: 'red',
      color: 'green',
      fontSize: '20px'
    }}>
      <div><h6>{props.title}</h6></div>
      <form action="Contact-Form">
        <label htmlFor="ename">Email:  </label>
        <input type="text" placeholder='Input here' id="ename" name="ename"/>
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
