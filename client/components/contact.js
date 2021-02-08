import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyInput from './input'


const Contact = (props) => {
  const [value, setValue] = useState('')
  const [text, setText] = useState('')
  const [clickLog, clickLogChange] = useState('')
  const [clickLog2, clickLog2Change] = useState('')

  // const onClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  
  //   setText(e.target.value) // введенное значение можем передать в кукис сешн/локал сторадж манипуляции
  // }
  const changeTextBox = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    setText(e.target.value) // введенное значение можем передать в кукис сешн(более безопасный)/локал сторадж манипуляции
  }
  return (
    <div className="mt-20">
        <div><h6>{props.title}</h6></div>
        <form className="mt-20" action="Contact-Form">
          <label htmlFor="ename">Email:  </label>
          <MyInput />
          <button type="button" onClick={(val) => setValue(value + val)}>Submit</button>
          { text }
          <div>
            <input
              className="border border-gray-500"
              type="input"
              value={text}
              onChange={changeTextBox}
            />
          </div>
          <br />
          <div>
            <input
              className="border border-gray-500"
              type="password"
              onChange={changeTextBox}
            />
          </div>

          <div onClick={() => {
            clickLogChange(`${clickLog} parentDivClicked`)
          }}
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            className="border border-red-500"
          >
            clickMe
            <div onClick={(e) => {
              e.stopPropagation()
              clickLog2Change(`${clickLog2} CHILD DIV`)
            }}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              className="border border-blue-500"
            >
              clickMe2 Gently
            </div>
          </div>

          { clickLog }
          <br />
          { clickLog2 }
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
