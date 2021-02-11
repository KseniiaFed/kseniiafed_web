import React, { useState, useEffect } from 'react'

const InitialValue = ''

const inputDefault = "border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
const inputFree = "border border-gray-300 w-full sm:w-5/6 md:w-full rounded-lg p-4"
const Styles = ['inputDefault', 'inputMessage']


const MyInput = ({placeholder, inputStyle, name}) => {
  const sessionField = `input-experimental-${name}`
  const [val, changeVal] = useState(sessionStorage.getItem(sessionField) || InitialValue)
  const changeState = ({ target }) => {
    changeVal(target.value)
  }

  const checkInputStyle = Styles[0] === inputStyle ? inputDefault : inputFree

  useEffect(() => {
    if (val !== InitialValue) {
      sessionStorage.setItem(sessionField, val)
    }
  }, [val, sessionField])

  return (
    <div className="">
      <input
        className={checkInputStyle}
        type="text"
        value={val}
        placeholder={placeholder}
        onChange={changeState}
      />
    </div>
  )

}


export default MyInput
