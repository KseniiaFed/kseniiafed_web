import React, { useState, useEffect } from 'react'
import './units/contact.scss'

const InitialValue = ''

const inputDefault = "border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
const inputFree = "border border-gray-300 w-full sm:w-5/6 md:w-full rounded-lg p-4"
const Styles = ['inputDefault', 'inputMessage']


const MyInput = ({placeholder, inputStyle, name, validate}) => {
  const sessionField = `input-experimental-${name}`
  const [value, changeValue] = useState(sessionStorage.getItem(sessionField) || InitialValue)
  const changeState = ({ target }) => {
    changeValue(target.value)
    validate(target)
    console.log(target)
  }

  const checkInputStyle = Styles[0] === inputStyle ? inputDefault : inputFree

  useEffect(() => {
    if (value !== InitialValue) {
      sessionStorage.setItem(sessionField, value)
    }
  }, [value, sessionField])

  return (
    <div>
      <input
        className={checkInputStyle}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={changeState}
      />
    </div>
  )

}


export default MyInput
