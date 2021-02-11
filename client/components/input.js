import React, { useState, useEffect } from 'react'

const InitialValue = ''

const inputDefault = "border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg p-4"
const inputMessage = "border border-gray-500 w-5/6 sm:w-3/4 max-w-xl lg:w-full lg:max-w-lg rounded-lg pl-4 h-52 text-justify"
const Styles = ['inputDefault', 'inputMessage']


const MyInput = (props) => {
  const { name } = props
  const sessionField = `input-experimental-${name}`
  const [val, changeVal] = useState(sessionStorage.getItem(sessionField) || InitialValue)
  const changeState = ({ target }) => {
    changeVal(target.value)
  }

  const checkInputStyle = Styles[0] === props.inputStyle ? inputDefault : inputMessage

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
        placeholder="start typing..."
        onChange={changeState}
      />
    </div>
  )

}


export default MyInput
